// =====================================================
//  Gamer's Armoury — games.js
//  Game Library page logic (games.html)
//  Written by: Pratham Madaan, First-year, Rishihood University
//  Uses only Array HOFs (.map, .filter, .sort) — no for loops
//  Fetches Windows/PC games from RAWG API (platform id = 4)
// =====================================================


// ------ state ------
// load rig from localStorage so compat badges work on this page too
var myRig = JSON.parse(localStorage.getItem("myRig")) || null;

// RAWG API key
var RAWG_KEY = "dd3a12f2f07e482493bbd21cb8e62a0e";

// RAWG platform id 4 = PC / Windows
var PC_PLATFORM = 4;

// active sort/filter
var activeSort = "rating";

// last fetched games list (for re-sorting without re-fetching)
var cachedGames = [];

// last query
var lastQuery = "";


// =====================================================
//  PAGE INIT
// =====================================================

window.addEventListener("DOMContentLoaded", function () {
  // load popular games on page load
  fetchGames("");

  // set up enter-key listener on search input
  var input = document.getElementById("game-search-input");
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") doSearch();
  });
});


// =====================================================
//  NAVIGATION — sidebar toggle
// =====================================================

function toggleSidebar() {
  var sb = document.getElementById("sidebar");
  var ov = document.getElementById("sb-overlay");
  var isOpen = sb.classList.contains("open");
  if (isOpen) {
    closeSidebar();
  } else {
    sb.classList.add("open");
    ov.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeSidebar() {
  var sb = document.getElementById("sidebar");
  var ov = document.getElementById("sb-overlay");
  sb.classList.remove("open");
  ov.classList.remove("show");
  document.body.style.overflow = "";
}


// =====================================================
//  FILTER / SORT PILLS
// =====================================================

function setFilter(btn, sort) {
  // update active pill
  document.querySelectorAll(".gl-filter-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");

  activeSort = sort;

  // if we have cached games, re-sort them instantly without a new API call
  if (cachedGames.length > 0) {
    renderGames(sortGames(cachedGames, sort));
  } else {
    // no cache yet — fetch
    fetchGames(lastQuery, sort);
  }
}

function sortGames(games, sort) {
  if (sort === "rating") {
    return games.slice().sort(function (a, b) { return b.rating - a.rating; });
  }
  if (sort === "released") {
    return games.slice().sort(function (a, b) {
      return new Date(b.released || 0) - new Date(a.released || 0);
    });
  }
  if (sort === "metacritic") {
    return games.slice().sort(function (a, b) {
      return (b.metacritic || 0) - (a.metacritic || 0);
    });
  }
  if (sort === "name") {
    return games.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
  return games;
}


// =====================================================
//  SEARCH
// =====================================================

function doSearch() {
  var q = document.getElementById("game-search-input").value.trim();
  currentQuery = q;
  currentPage = 1;
  fetchGames(q, false);
}

function loadMoreGames() {
  currentPage++;
  fetchGames(currentQuery, true);
}


// =====================================================
//  FETCH LOGIC
// =====================================================

async function fetchGames(query, isLoadMore) {
  if (isFetching) return;
  isFetching = true;

  var grid = document.getElementById("game-results");
  var countEl = document.getElementById("result-count");
  var label = document.getElementById("results-label");

  if (!isLoadMore && !query && currentPage === 1) {
    var cachedStr = sessionStorage.getItem("ga_games_cache_v2");
    if (cachedStr) {
      try {
        cachedGames = JSON.parse(cachedStr);
        cachedGames = sortGames(cachedGames, sort);
        label.textContent = "Popular Games";
        countEl.textContent = cachedGames.length + " games";
        renderGames(cachedGames);
        isFetching = false;
        return;
      } catch (e) {}
    }
  }

  if (!isLoadMore) {
    grid.innerHTML = [
      '<div class="gl-spinner">',
      '  <div class="gl-spinner-ring"></div>',
      '  <span>' + (query ? 'Searching for "' + query + '"...' : 'Loading popular games...') + '</span>',
      '</div>'
    ].join("");
    countEl.textContent = "";
  } else {
    var btn = document.getElementById("load-more-btn");
    if (btn) btn.textContent = "Loading...";
  }

  try {
    var rawgUrl;
    if (query) {
      rawgUrl = [
        "https://api.rawg.io/api/games",
        "?key=" + RAWG_KEY,
        "&search=" + encodeURIComponent(query),
        "&platforms=" + PC_PLATFORM,
        "&ordering=-relevance",
        "&page_size=40",
        "&page=" + currentPage
      ].join("");
    } else {
      rawgUrl = [
        "https://api.rawg.io/api/games",
        "?key=" + RAWG_KEY,
        "&platforms=" + PC_PLATFORM,
        "&ordering=-rating",
        "&page_size=40",
        "&page=" + currentPage
      ].join("");
    }

    var isFile   = window.location.protocol === "file:";
    var finalUrl = isFile
      ? "https://corsproxy.io/?url=" + encodeURIComponent(rawgUrl)
      : rawgUrl;

    var res  = await fetch(finalUrl);
    var data = await res.json();

    var games = data.results.filter(function (g) { 
        if (!g.background_image) return false;
        var nameLower = g.name.toLowerCase();
        if (nameLower.indexOf("charlie") !== -1) return false;
        if (nameLower.indexOf("princess maker 2") !== -1) return false;
        return true;
    });

    if (!isLoadMore && !query && currentPage === 1) {
      sessionStorage.setItem("ga_games_cache_v2", JSON.stringify(games));
    }

    if (isLoadMore) {
      cachedGames = cachedGames.concat(games);
    } else {
      cachedGames = games;
    }

    // sort
    cachedGames = sortGames(cachedGames, sort);

    // update labels
    label.textContent = query ? 'Results for "' + query + '"' : "Popular Games";
    countEl.textContent = cachedGames.length + " games";

    renderGames(cachedGames);

  } catch (err) {
    console.log("RAWG fetch error:", err);
    if (!isLoadMore) {
      cachedGames = [];
      label.textContent = "Game Library";
      countEl.textContent = "";
      grid.innerHTML = [
        '<div class="gl-error">',
        '  <div class="gl-error-icon">⚠️</div>',
        '  <div class="gl-error-title">Could not load games</div>',
        '  <div class="gl-error-sub">Check your internet connection and try again.</div>',
        '</div>'
      ].join("");
    }
  }

  isFetching = false;
}


// =====================================================
//  RENDER GAMES
// =====================================================

function renderGames(games) {
  var grid = document.getElementById("game-results");
  var countEl = document.getElementById("result-count");

  if (games.length === 0) {
    countEl.textContent = "0 games";
    grid.innerHTML = [
      '<div class="gl-empty">',
      '  <div class="gl-empty-icon">🎮</div>',
      '  <div class="gl-empty-title">No games found</div>',
      '  <div class="gl-empty-sub">Try a different search term or browse popular games.</div>',
      '</div>'
    ].join("");
    return;
  }

  countEl.textContent = games.length + " games";

  var cards = games.map(function (game) {
    var rating  = game.rating ? game.rating.toFixed(1) : "N/A";
    var genres  = game.genres
      ? game.genres.map(function (g) { return g.name; }).join(", ")
      : "";
    var mcScore = '<span style="font-size: 9.5px; color: var(--text-dim); margin-right: 4px;">Metacritic</span><span class="game-meta-score">' + (game.metacritic ? game.metacritic : "N/A") + "</span>";
    var compat = getCompatBadge(game);
    var released = game.released ? game.released.substring(0, 4) : "";
    
    // Optimize images down to thumbnails using RAWG crop API
    var bg = game.background_image ? game.background_image.replace("media/games/", "media/crop/600/400/games/").replace("media/screenshots/", "media/crop/600/400/screenshots/") : "";

    return [
      '<div class="game-card" onclick="openGameDetail(\'' + game.id + '\')" id="gc-' + game.id + '">',
      '  <img class="game-thumb" src="' + bg + '" alt="' + escapeHtml(game.name) + '" loading="lazy" />',
      '  <div class="game-meta">',
      '    <div class="game-title">' + escapeHtml(game.name) + '</div>',
      '    <div class="game-genre">' + escapeHtml(genres) + (released ? ' · ' + released : '') + '</div>',
      '    <div class="game-row">',
      '      <span class="game-rating">' + rating + '</span>',
      '      ' + mcScore,
      '      ' + compat,
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");
  });

  var loadMoreMarkup = [
    '<div style="grid-column: 1 / -1; display: flex; justify-content: center; margin-top: 30px; padding-bottom: 30px;">',
    '  <button id="load-more-btn" class="search-btn" style="padding: 10px 40px; font-size: 14px;" onclick="loadMoreGames()">Load More Games</button>',
    '</div>'
  ].join("");

  grid.innerHTML = cards.join("") + loadMoreMarkup;
}


// =====================================================
//  COMPAT BADGE
// =====================================================

function getCompatBadge(game) {
  // Add Setup badge and compat logic removed entirely as requested
  return "";
}


// =====================================================
//  GAME DETAIL PANEL
// =====================================================

async function openGameDetail(gameId) {
  // close any previously open detail
  var panel = document.getElementById("game-detail-box");
  panel.innerHTML = '<p class="msg-loading" style="padding:16px 0;">Loading details...</p>';
  panel.classList.add("open");

  // smooth scroll to panel
  setTimeout(function () {
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 80);

  try {
    var rawgDetailUrl = "https://api.rawg.io/api/games/" + gameId + "?key=" + RAWG_KEY;
    var isFile   = window.location.protocol === "file:";
    var finalUrl = isFile
      ? "https://corsproxy.io/?url=" + encodeURIComponent(rawgDetailUrl)
      : rawgDetailUrl;

    var res  = await fetch(finalUrl);
    var game = await res.json();

    // extract fields using .map()
    var platforms  = game.platforms  ? game.platforms.map(function (p)  { return p.platform.name; }).join(" · ") : "Unknown";
    var devs       = game.developers ? game.developers.map(function (d) { return d.name; }).join(", ") : "Unknown";
    var publishers = game.publishers ? game.publishers.map(function (p) { return p.name; }).join(", ") : "Unknown";
    var genres     = game.genres     ? game.genres.map(function (g)     { return g.name; }).join(", ") : "Unknown";
    var tags       = game.tags       ? game.tags.slice(0, 6).map(function (t) { return t.name; }).join(", ") : "";
    var esrb       = game.esrb_rating ? game.esrb_rating.name : "Not Rated";
    var desc       = game.description_raw ? game.description_raw.slice(0, 480) + "…" : "No description available.";
    var compat     = getCompatBadge(game);

    panel.innerHTML = [
      '<button class="detail-close" onclick="closeGameDetail()">✕</button>',
      '<h3 class="detail-heading">' + escapeHtml(game.name) + '</h3>',
      '<div class="detail-badges">',
      '  ' + compat,
      '  <span class="detail-esrb">' + escapeHtml(esrb) + '</span>',
      '</div>',
      '<p class="detail-desc">' + escapeHtml(desc) + '</p>',
      '<div class="detail-meta-grid">',
      '  <div class="detail-meta-row"><strong>Developer:</strong> ' + escapeHtml(devs) + '</div>',
      '  <div class="detail-meta-row"><strong>Publisher:</strong> ' + escapeHtml(publishers) + '</div>',
      '  <div class="detail-meta-row"><strong>Genre:</strong> ' + escapeHtml(genres) + '</div>',
      '  <div class="detail-meta-row"><strong>Platforms:</strong> ' + escapeHtml(platforms) + '</div>',
      '  <div class="detail-meta-row"><strong>Rating:</strong> ' + (game.rating ? game.rating.toFixed(1) : "N/A") + ' / 5</div>',
      '  <div class="detail-meta-row"><strong>Metacritic:</strong> ' + (game.metacritic || "N/A") + '</div>',
      '  <div class="detail-meta-row"><strong>Released:</strong> ' + (game.released || "N/A") + '</div>',
      '  <div class="detail-meta-row"><strong>Avg Playtime:</strong> ' + (game.playtime ? game.playtime + " hrs" : "N/A") + '</div>',
      tags ? '  <div class="detail-meta-row" style="grid-column:1/-1"><strong>Tags:</strong> ' + escapeHtml(tags) + '</div>' : '',
      '</div>'
    ].join("");

  } catch (err) {
    console.log("Game detail fetch error:", err);
    panel.innerHTML = '<p class="msg-error" style="padding:14px 0;">Could not load game details. Check your connection.</p>';
  }
}

function closeGameDetail() {
  var panel = document.getElementById("game-detail-box");
  panel.classList.remove("open");
}


// =====================================================
//  TOAST
// =====================================================

function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function () { t.classList.remove("show"); }, 3000);
}


// =====================================================
//  HELPERS
// =====================================================

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
