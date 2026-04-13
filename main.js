
let myRig = JSON.parse(localStorage.getItem("myRig")) || null;
let pickedModelId    = "";
let pickedVariantIdx = "";
let laptops = [];
// Data now fetched via Custom API (api/dummy_dataset.json)
async function fetchDummyAPI() {
  try {
    var res = await fetch("https://raw.githubusercontent.com/madaanpratham80-cpu/Gamer-s-Armoury/main/api/dummy_dataset.json");
    if (!res.ok) throw new Error("API network error");
    var dummyData = await res.json();
    
    // Merge external API dataset natively into local variables
    laptops = laptops.concat(dummyData);
    console.log("Successfully fetched and integrated dummy API dataset!");
  } catch (err) {
    console.warn("Dummy API fetch failed. Using local dataset.", err);
  }
}
window.addEventListener("DOMContentLoaded", async function() {

  // Fetch from the API first
  await fetchDummyAPI();

  // Then build dropdown so it includes the API dataset
  buildModelDropdown();

  
  if (myRig) {
    showRigCard(myRig);
    showRigStats(myRig);
  }

  
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".custom-drop")) {
      document.querySelectorAll(".custom-drop").forEach(function(d) {
        d.classList.remove("open");
      });
    }
  });

});






function handleNav(id) {
  
  document.querySelectorAll(".sb-link").forEach(function(link) {
    link.classList.remove("active");
  });
  var el = document.getElementById(id);
  if (el) el.classList.add("active");
  
  closeSidebar();
}






function openModal() {
  document.getElementById("rig-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("rig-modal").classList.remove("open");
  
  closeDrop("model-drop");
  closeDrop("variant-drop");
}


function onModalOverlayClick(e) {
  if (e.target === document.getElementById("rig-modal")) {
    closeModal();
  }
}






function toggleDrop(id) {
  var drop = document.getElementById(id);
  var isOpen = drop.classList.contains("open");
  
  document.querySelectorAll(".custom-drop").forEach(function(d) {
    d.classList.remove("open");
  });
  if (!isOpen) drop.classList.add("open");
}

function closeDrop(id) {
  document.getElementById(id).classList.remove("open");
}


function buildModelDropdown() {
  var menu = document.getElementById("model-menu");
  var html = laptops.map(function(laptop) {
    return '<div class="drop-option" onclick="pickModel(' + laptop.id + ', \'' + laptop.brand + ' — ' + laptop.name + '\')">' + laptop.brand + ' — ' + laptop.name + '</div>';
  }).join("");
  menu.innerHTML = html;
}


function pickModel(laptopId, label) {
  pickedModelId    = laptopId;
  pickedVariantIdx = "";

  document.getElementById("model-trigger-text").textContent = label;
  closeDrop("model-drop");

  
  document.getElementById("variant-trigger-text").textContent = "-- Pick a variant --";

  
  var matched = laptops.filter(function(l) { return l.id === parseInt(laptopId); });
  var chosen  = matched[0];

  var varHtml = chosen.variants.map(function(v, i) {
    return '<div class="drop-option" onclick="pickVariant(' + i + ', \'' + v.label + '\')">' + v.label + '</div>';
  }).join("");

  document.getElementById("variant-menu").innerHTML = varHtml;
  document.getElementById("variant-section").style.display = "block";
}


function pickVariant(idx, label) {
  pickedVariantIdx = idx;
  document.getElementById("variant-trigger-text").textContent = label;
  closeDrop("variant-drop");
}






function saveRig() {
  if (pickedModelId === "" || pickedVariantIdx === "") {
    showToast("Please pick a laptop and a variant first!");
    return;
  }

  var chosen  = laptops.filter(function(l) { return l.id === parseInt(pickedModelId); })[0];
  var variant = chosen.variants[parseInt(pickedVariantIdx)];

  myRig = {
    brand:      chosen.brand,
    name:       chosen.name,
    cpu:        variant.cpu,
    gpu:        variant.gpu,
    ram:        variant.ram,
    storage:    variant.storage,
    cpuScore:   variant.cpuScore,
    gpuScore:   variant.gpuScore,
    ramScore:   variant.ramScore,
    storeScore: variant.storeScore,
    savedOn:    new Date().toLocaleDateString("en-IN"),
  };

  localStorage.setItem("myRig", JSON.stringify(myRig));

  showRigCard(myRig);
  showRigStats(myRig);
  closeModal();
  showToast(myRig.brand + " " + myRig.name + " saved to Armoury!");
}






function showRigCard(rig) {
  var noRig  = document.getElementById("no-rig-view");
  var card   = document.getElementById("rig-card");

  
  noRig.style.display = "none";

  card.style.display = "flex";
  card.innerHTML = '\
    <div class="rig-laptop-visual">💻</div>\
    <div class="rig-details">\
      <div class="rig-brand-tag">' + rig.brand + '</div>\
      <h2 class="rig-model-name">' + rig.name + '</h2>\
      <p class="rig-cpu-line">' + rig.cpu + '</p>\
      <p class="rig-gpu-line">' + rig.gpu + '</p>\
      <div class="rig-chips">\
        <span class="rig-chip">RAM: ' + rig.ram + '</span>\
        <span class="rig-chip">SSD: ' + rig.storage + '</span>\
      </div>\
      <p class="rig-saved-when">Saved on ' + rig.savedOn + '</p>\
      <button class="btn-change-rig" onclick="openModal()">Change Setup</button>\
    </div>\
  ';
}


// =====================================================
//  DISPLAY — stats panel (right side + mobile sheet)
// =====================================================

function showRigStats(rig) {
  // build the HTML for the stats content
  var html = buildStatsHTML(rig);

  // put it in the desktop right panel
  document.getElementById("stats-content").innerHTML = html;

  // animate bars after a tiny delay so the DOM paints first
  setTimeout(function() {
    animateBar("bar-cpu",   rig.cpuScore);
    animateBar("bar-gpu",   rig.gpuScore);
    animateBar("bar-ram",   rig.ramScore);
    animateBar("bar-store", rig.storeScore);
  }, 80);

  // also update the mobile stats sheet inner content
  var sheetInner = document.getElementById("stats-sheet-inner");
  if (sheetInner) {
    sheetInner.innerHTML = html;
    setTimeout(function() {
      animateBar("bar-cpu",   rig.cpuScore);
      animateBar("bar-gpu",   rig.gpuScore);
      animateBar("bar-ram",   rig.ramScore);
      animateBar("bar-store", rig.storeScore);
    }, 80);
  }
}

// builds the stats panel HTML
// shows benchmark scores from the database — no fake usage/temp numbers
function buildStatsHTML(rig) {

  return '\
    <!-- CPU -->\
    <div class="stat-group">\
      <div class="stat-group-title">CPU</div>\
      <div class="stat-row"><span class="stat-key">Processor</span><span class="stat-val">' + rig.cpu + '</span></div>\
      <div class="stat-bar-wrap"><div class="stat-bar-fill" id="bar-cpu" style="width:0%"></div></div>\
      <div class="stat-row score-row"><span class="stat-key">Benchmark Score</span><span class="score-badge">' + rig.cpuScore + ' <span class="score-denom">/ 100</span></span></div>\
    </div>\
    \
    <!-- GPU -->\
    <div class="stat-group">\
      <div class="stat-group-title">GPU</div>\
      <div class="stat-row"><span class="stat-key">Graphics Card</span><span class="stat-val">' + rig.gpu + '</span></div>\
      <div class="stat-bar-wrap"><div class="stat-bar-fill" id="bar-gpu" style="width:0%"></div></div>\
      <div class="stat-row score-row"><span class="stat-key">Benchmark Score</span><span class="score-badge">' + rig.gpuScore + ' <span class="score-denom">/ 100</span></span></div>\
    </div>\
    \
    <!-- RAM -->\
    <div class="stat-group">\
      <div class="stat-group-title">RAM</div>\
      <div class="stat-row"><span class="stat-key">Capacity</span><span class="stat-val">' + rig.ram + '</span></div>\
      <div class="stat-bar-wrap"><div class="stat-bar-fill" id="bar-ram" style="width:0%"></div></div>\
      <div class="stat-row score-row"><span class="stat-key">Benchmark Score</span><span class="score-badge">' + rig.ramScore + ' <span class="score-denom">/ 100</span></span></div>\
    </div>\
    \
    <!-- Storage -->\
    <div class="stat-group">\
      <div class="stat-group-title">Storage</div>\
      <div class="stat-row"><span class="stat-key">Drive</span><span class="stat-val">' + rig.storage + '</span></div>\
      <div class="stat-bar-wrap"><div class="stat-bar-fill" id="bar-store" style="width:0%"></div></div>\
      <div class="stat-row score-row"><span class="stat-key">Benchmark Score</span><span class="score-badge">' + rig.storeScore + ' <span class="score-denom">/ 100</span></span></div>\
    </div>\
  ';
}

// animates a single progress bar
function animateBar(barId, target) {
  var bar = document.getElementById(barId);
  if (!bar) return;

  var current = 0;
  var step = setInterval(function() {
    if (current >= target) {
      clearInterval(step);
      return;
    }
    current += 2;
    bar.style.width = current + "%";
  }, 18);
}




// =====================================================
//  CLEAR RIG
// =====================================================

function clearRig() {
  localStorage.removeItem("myRig");
  myRig = null;
  pickedModelId    = "";
  pickedVariantIdx = "";

  // restore + button area
  var noRig = document.getElementById("no-rig-view");
  var card  = document.getElementById("rig-card");
  noRig.style.display = "flex";
  card.style.display  = "none";
  card.innerHTML      = "";

  // restore stats placeholder
  var empty = '\
    <div class="stats-placeholder">\
      <div class="stats-ph-icon">---</div>\
      <p>No setup selected yet.</p>\
      <p class="stats-ph-sub">Click <strong>+</strong> to add<br>your laptop.</p>\
    </div>\
  ';
  document.getElementById("stats-content").innerHTML = empty;

  var sheetInner = document.getElementById("stats-sheet-inner");
  if (sheetInner) sheetInner.innerHTML = empty;

  showToast("Setup removed from Armoury.");
}






function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function() {
    t.classList.remove("show");
  }, 3000);
}






function openSidebar() {
  var sb  = document.getElementById("sidebar");
  var ov  = document.getElementById("sb-overlay");
  sb.classList.add("open");
  ov.classList.add("show");
  document.body.style.overflow = "hidden";
}

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






function openStatsSheet() {
  
  var desktopContent = document.getElementById("stats-content");
  var sheetInner     = document.getElementById("stats-sheet-inner");
  if (desktopContent && sheetInner) {
    sheetInner.innerHTML = desktopContent.innerHTML;
    
    if (myRig) {
      setTimeout(function() {
        animateBar("bar-cpu",   myRig.cpuScore);
        animateBar("bar-gpu",   myRig.gpuScore);
        animateBar("bar-ram",   myRig.ramScore);
        animateBar("bar-store", myRig.storeScore);
      }, 80);
    }
  }
  document.getElementById("stats-sheet").classList.add("open");
  document.getElementById("stats-sheet-overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeStatsSheet() {
  document.getElementById("stats-sheet").classList.remove("open");
  document.getElementById("stats-sheet-overlay").style.display = "none";
  document.body.style.overflow = "";
}

function setBottomActive(id) {
  document.querySelectorAll(".bnav-item").forEach(function(item) {
    item.classList.remove("active");
  });
  var target = document.getElementById(id);
  if (target) target.classList.add("active");
}
