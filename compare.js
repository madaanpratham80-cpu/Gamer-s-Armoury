









var laptopOne    = null;   
var laptopTwo    = null;   

var pickedModelA    = null;  
var pickedModelB    = null;  
var pickedVariantA  = null;  
var pickedVariantB  = null;  









var laptopMRP = {
  1:  72990,   
  2:  89990,   
  3:  149990,  
  4:  289990,  
  5:  319990,  
  6:  139990,  
  7:  179990,  
  9:  69990,   
  10: 259990,  
  14: 84990,   
  15: 174990,  
  18: 89999,   
  19: 219990,  
  21: 109990,  
  23: 59990,   
  24: 79990,   
  25: 189990,  
  27: 149990,  
  28: 349990,  
};








var compareDevices = [
  {
    id: 1, brand: "ASUS", name: "ASUS TUF Gaming A15 (2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8GB / 512GB",   cpu: "AMD Ryzen 5 7535HS",  gpu: "NVIDIA RTX 4050",   ram: "8 GB",  storage: "512 GB SSD", cpuScore: 63, gpuScore: 62 },
      { label: "Ryzen 7 7745HX / RTX 4060 / 16GB / 1TB",    cpu: "AMD Ryzen 7 7745HX",  gpu: "NVIDIA RTX 4060",   ram: "16 GB", storage: "1 TB SSD",   cpuScore: 78, gpuScore: 72 },
      { label: "Ryzen 9 7945HX / RTX 4070 / 16GB / 1TB",    cpu: "AMD Ryzen 9 7945HX",  gpu: "NVIDIA RTX 4070",   ram: "16 GB", storage: "1 TB SSD",   cpuScore: 90, gpuScore: 82 },
    ],
  },
  {
    id: 2, brand: "ASUS", name: "ASUS TUF Gaming F16 (2025)",
    variants: [
      { label: "Core Ultra 5 235H / RTX 4060 / 16GB / 512GB", cpu: "Intel Core Ultra 5 235H", gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "512 GB SSD", cpuScore: 70, gpuScore: 72 },
      { label: "Core Ultra 9 285H / RTX 4070Ti / 32GB / 2TB", cpu: "Intel Core Ultra 9 285H", gpu: "NVIDIA RTX 4070 Ti", ram: "32 GB", storage: "2 TB SSD",   cpuScore: 91, gpuScore: 88 },
    ],
  },
  {
    id: 3, brand: "ASUS", name: "ASUS ROG Strix G16 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4060 / 16GB / 1TB",   cpu: "Intel Core Ultra 7 155H", gpu: "NVIDIA RTX 4060",          ram: "16 GB", storage: "1 TB SSD",  cpuScore: 80, gpuScore: 72 },
      { label: "Core Ultra 9 285H / RTX 4080 / 32GB / 2TB",   cpu: "Intel Core Ultra 9 285H", gpu: "NVIDIA RTX 4080",          ram: "32 GB", storage: "2 TB SSD",  cpuScore: 95, gpuScore: 94 },
    ],
  },
  {
    id: 4, brand: "ASUS", name: "ASUS ROG Strix SCAR 16 (2025)",
    variants: [
      { label: "Ryzen AI 9 HX 370 / RTX 5080 / 64GB / 4TB",  cpu: "AMD Ryzen AI 9 HX 370", gpu: "NVIDIA RTX 5080", ram: "64 GB", storage: "4 TB SSD", cpuScore: 96, gpuScore: 97 },
    ],
  },
  {
    id: 6, brand: "ASUS", name: "ASUS ROG Zephyrus G14 (2024)",
    variants: [
      { label: "Ryzen AI 9 HX 370 / RTX 4060 / 16GB / 1TB",  cpu: "AMD Ryzen AI 9 HX 370", gpu: "NVIDIA RTX 4060", ram: "16 GB", storage: "1 TB SSD", cpuScore: 92, gpuScore: 72 },
      { label: "Ryzen AI 9 HX 370 / RTX 4070 / 32GB / 1TB",  cpu: "AMD Ryzen AI 9 HX 370", gpu: "NVIDIA RTX 4070", ram: "32 GB", storage: "1 TB SSD", cpuScore: 94, gpuScore: 83 },
    ],
  },
  {
    id: 9, brand: "MSI", name: "MSI Katana 15 (2024)",
    variants: [
      { label: "i5-13420H / RTX 4050 / 8GB / 512GB",   cpu: "Intel Core i5-13420H", gpu: "NVIDIA RTX 4050", ram: "8 GB",  storage: "512 GB SSD", cpuScore: 60, gpuScore: 62 },
      { label: "i7-13700H / RTX 4070 / 16GB / 1TB",    cpu: "Intel Core i7-13700H", gpu: "NVIDIA RTX 4070", ram: "16 GB", storage: "1 TB SSD",   cpuScore: 80, gpuScore: 82 },
    ],
  },
  {
    id: 10, brand: "MSI", name: "MSI Raider GE78 HX (2025)",
    variants: [
      { label: "Core Ultra 9 285HX / RTX 4090 / 64GB / 4TB", cpu: "Intel Core Ultra 9 285HX", gpu: "NVIDIA RTX 4090", ram: "64 GB", storage: "4 TB SSD", cpuScore: 96, gpuScore: 98 },
      { label: "Core Ultra 9 285HX / RTX 5090 / 64GB / 4TB", cpu: "Intel Core Ultra 9 285HX", gpu: "NVIDIA RTX 5090", ram: "64 GB", storage: "4 TB SSD", cpuScore: 97, gpuScore: 99 },
    ],
  },
  {
    id: 14, brand: "Lenovo", name: "Lenovo Legion 5i Gen 9 (2024)",
    variants: [
      { label: "i5-13500HX / RTX 4060 / 16GB / 512GB", cpu: "Intel Core i5-13500HX", gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "512 GB SSD", cpuScore: 68, gpuScore: 72 },
      { label: "i9-14900HX / RTX 4070Ti / 32GB / 2TB", cpu: "Intel Core i9-14900HX", gpu: "NVIDIA RTX 4070 Ti", ram: "32 GB", storage: "2 TB SSD",   cpuScore: 93, gpuScore: 89 },
    ],
  },
  {
    id: 15, brand: "Lenovo", name: "Lenovo Legion 7i Gen 9 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4070 / 16GB / 1TB",  cpu: "Intel Core Ultra 7 155H", gpu: "NVIDIA RTX 4070", ram: "16 GB", storage: "1 TB SSD", cpuScore: 82, gpuScore: 83 },
      { label: "Core Ultra 9 185H / RTX 4090 / 32GB / 2TB",  cpu: "Intel Core Ultra 9 185H", gpu: "NVIDIA RTX 4090", ram: "32 GB", storage: "2 TB SSD", cpuScore: 93, gpuScore: 98 },
    ],
  },
  {
    id: 18, brand: "Acer", name: "Acer Predator Helios Neo 16 (2024)",
    variants: [
      { label: "Core Ultra 5 125H / RTX 4060 / 16GB / 512GB",  cpu: "Intel Core Ultra 5 125H", gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "512 GB SSD", cpuScore: 67, gpuScore: 72 },
      { label: "Core Ultra 9 185H / RTX 4070Ti / 32GB / 2TB",  cpu: "Intel Core Ultra 9 185H", gpu: "NVIDIA RTX 4070 Ti", ram: "32 GB", storage: "2 TB SSD",   cpuScore: 91, gpuScore: 89 },
    ],
  },
  {
    id: 19, brand: "Acer", name: "Acer Predator Helios 18 (2024)",
    variants: [
      { label: "i9-14900HX / RTX 4090 / 64GB / 4TB",  cpu: "Intel Core i9-14900HX", gpu: "NVIDIA RTX 4090", ram: "64 GB", storage: "4 TB SSD", cpuScore: 94, gpuScore: 98 },
    ],
  },
  {
    id: 21, brand: "HP", name: "HP Omen 16 (2024)",
    variants: [
      { label: "Ryzen 7 8845HS / RTX 4060 / 16GB / 512GB",   cpu: "AMD Ryzen 7 8845HS",     gpu: "NVIDIA RTX 4060", ram: "16 GB", storage: "512 GB SSD", cpuScore: 82, gpuScore: 72 },
      { label: "Core Ultra 7 155H / RTX 4080 / 32GB / 2TB",  cpu: "Intel Core Ultra 7 155H", gpu: "NVIDIA RTX 4080", ram: "32 GB", storage: "2 TB SSD",   cpuScore: 82, gpuScore: 94 },
    ],
  },
  {
    id: 23, brand: "HP", name: "HP Victus 16 (2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8GB / 512GB",  cpu: "AMD Ryzen 5 7535HS",  gpu: "NVIDIA RTX 4050", ram: "8 GB",  storage: "512 GB SSD", cpuScore: 63, gpuScore: 62 },
      { label: "i5-13500H / RTX 4060 / 16GB / 512GB",       cpu: "Intel Core i5-13500H", gpu: "NVIDIA RTX 4060", ram: "16 GB", storage: "512 GB SSD", cpuScore: 67, gpuScore: 72 },
    ],
  },
  {
    id: 24, brand: "Dell", name: "Dell G16 Gaming (2024)",
    variants: [
      { label: "i7-13650HX / RTX 4060 / 16GB / 512GB",  cpu: "Intel Core i7-13650HX", gpu: "NVIDIA RTX 4060", ram: "16 GB", storage: "512 GB SSD", cpuScore: 74, gpuScore: 72 },
      { label: "i9-13900HX / RTX 4070 / 16GB / 1TB",    cpu: "Intel Core i9-13900HX", gpu: "NVIDIA RTX 4070", ram: "16 GB", storage: "1 TB SSD",   cpuScore: 89, gpuScore: 83 },
    ],
  },
  {
    id: 25, brand: "Dell", name: "Alienware m16 R2 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4070 / 16GB / 1TB",  cpu: "Intel Core Ultra 7 155H", gpu: "NVIDIA RTX 4070", ram: "16 GB", storage: "1 TB SSD", cpuScore: 80, gpuScore: 83 },
      { label: "Core Ultra 9 185H / RTX 4080 / 32GB / 2TB",  cpu: "Intel Core Ultra 9 185H", gpu: "NVIDIA RTX 4080", ram: "32 GB", storage: "2 TB SSD", cpuScore: 91, gpuScore: 94 },
    ],
  },
];






window.addEventListener("DOMContentLoaded", function () {

  
  checkLastCompared();

  
  tryNotebAPI();

  
  fetchTrendingGames();
});







async function tryNotebAPI() {
  try {
    var res = await fetch("https://noteb.com/?public/api.php", { mode: "cors" });
    if (!res.ok) throw new Error("not reachable");
    console.log("Noteb API reachable — using local data as primary source");
  } catch (err) {
    console.log("Noteb API unreachable (expected in browser) — using local laptop data");
  }
}






function toggleSidebar() {
  var sb = document.getElementById("sidebar");
  var ov = document.getElementById("sb-overlay");
  var isOpen = sb.classList.contains("open");
  if (isOpen) { closeSidebar(); }
  else {
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







function openPicker(slot) {
  var slotL    = slot.toLowerCase();                     
  var emptyId  = "slot-" + slotL + "-empty";
  var pickerId = "picker-" + slotL;
  var pickerEl = document.getElementById(pickerId);

  
  document.getElementById(emptyId).style.display = "none";

  
  
  pickerEl.innerHTML = [
    
    '<div class="cmp-picker-head">',
    '  <span class="cmp-picker-title">Select a Laptop</span>',
    '  <button class="cmp-picker-cancel" onclick="cancelPicker(\'' + slot + '\')">Cancel</button>',
    '</div>',

    
    '<div class="cmp-picker-search-row">',
    '  <input class="cmp-picker-search"',
    '         id="picker-search-' + slotL + '"',
    '         type="text"',
    '         placeholder="Search by brand, name, or GPU..."',
    '         oninput="renderPickerList(\'' + slot + '\', this.value)"',
    '         autocomplete="off" />',
    '</div>',

    
    '<div class="cmp-laptop-list" id="laptop-list-' + slotL + '">',
    '  <!-- renderPickerList() fills this -->',
    '</div>',

    
    '<div class="cmp-variant-section" id="variant-section-' + slotL + '" style="display:none;">',
    '  <div class="cmp-picker-label" style="margin-bottom:0;">Choose a Variant:</div>',
    '  <div class="cmp-variant-pills" id="variant-pills-' + slotL + '">',
    '  </div>',
    '  <button class="cmp-confirm-btn" id="confirm-btn-' + slotL + '"',
    '          onclick="confirmSlot(\'' + slot + '\')" style="display:none;">',
    '    &#10003; Confirm Selection',
    '  </button>',
    '</div>',
  ].join("");

  
  pickerEl.style.display = "block";

  
  renderPickerList(slot, "");

  
  setTimeout(function () {
    var searchEl = document.getElementById("picker-search-" + slotL);
    if (searchEl) searchEl.focus();
  }, 80);
}







function renderPickerList(slot, query) {
  var slotL  = slot.toLowerCase();
  var listEl = document.getElementById("laptop-list-" + slotL);
  if (!listEl) return;

  var trimQ = query ? query.toLowerCase().trim() : "";

  
  var filtered = compareDevices.filter(function (laptop) {
    if (!trimQ) return true;
    
    var haystack = (
      laptop.name.toLowerCase() + " " +
      laptop.brand.toLowerCase() + " " +
      laptop.variants.map(function (v) { return v.gpu + " " + v.cpu; }).join(" ").toLowerCase()
    );
    return haystack.indexOf(trimQ) !== -1;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = '<p class="cmp-no-results">No laptops match your search. Try a different term.</p>';
    return;
  }

  
  var selectedId = slot === "A" ? pickedModelA : pickedModelB;

  
  var cards = filtered.map(function (laptop) {
    var price    = laptopMRP[laptop.id] || 0;
    var priceStr = price ? "\u20B9" + price.toLocaleString("en-IN") : "N/A";

    
    var topGPU = laptop.variants[0].gpu
      .replace("NVIDIA ", "")
      .replace("AMD Radeon ", "");

    var varCount   = laptop.variants.length;
    var isSelected = selectedId === laptop.id;

    return [
      '<div class="cmp-laptop-option' + (isSelected ? " selected" : "") + '"',
      '     id="opt-' + slotL + '-' + laptop.id + '"',
      '     onclick="selectLaptopFromList(\'' + slot + '\', ' + laptop.id + ')">',
      '  <div class="cmp-option-top">',
      '    <span class="cmp-option-brand">' + laptop.brand + '</span>',
      '    <span class="cmp-option-gpu">' + topGPU + '</span>',
      '  </div>',
      '  <div class="cmp-option-name">' + laptop.name + '</div>',
      '  <div class="cmp-option-bottom">',
      '    <span class="cmp-option-price">from ' + priceStr + '</span>',
      '    <span class="cmp-option-vars">' + varCount + ' variant' + (varCount > 1 ? "s" : "") + '</span>',
      '  </div>',
      '</div>',
    ].join("");
  });

  listEl.innerHTML = cards.join("");
}







function selectLaptopFromList(slot, laptopId) {
  var slotL = slot.toLowerCase();

  
  if (slot === "A") { pickedModelA = laptopId;   pickedVariantA = null; }
  else              { pickedModelB = laptopId;   pickedVariantB = null; }

  
  document.querySelectorAll(".cmp-laptop-option").forEach(function (el) {
    el.classList.remove("selected");
  });

  
  var selectedEl = document.getElementById("opt-" + slotL + "-" + laptopId);
  if (selectedEl) {
    selectedEl.classList.add("selected");
    
    selectedEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  
  var matchArr = compareDevices.filter(function (l) {
    return l.id === parseInt(laptopId);
  });
  var laptop = matchArr[0];
  var price  = laptopMRP[laptop.id] || 0;

  
  var pillsHtml = laptop.variants.map(function (v, i) {
    
    var gpuName   = v.gpu.replace("NVIDIA ", "").replace("AMD Radeon ", "");
    var priceStr  = price ? "\u20B9" + price.toLocaleString("en-IN") : "N/A";

    return [
      '<button class="cmp-variant-pill"',
      '        onclick="selectVariantPill(\'' + slot + '\', ' + i + ', this)"',
      '        data-idx="' + i + '">',
      '  <span class="cmp-pill-gpu">' + gpuName + '</span>',
      '  <span class="cmp-pill-specs">' + v.cpu + ' &nbsp;·&nbsp; ' + v.ram + ' RAM &nbsp;·&nbsp; ' + v.storage + '</span>',
      '  <span class="cmp-pill-price">' + priceStr + '</span>',
      '  <span class="cmp-selected-check">&#10003;</span>',
      '</button>',
    ].join("");
  });

  
  var pillsEl  = document.getElementById("variant-pills-" + slotL);
  var sectEl   = document.getElementById("variant-section-" + slotL);
  var confirmEl = document.getElementById("confirm-btn-" + slotL);

  pillsEl.innerHTML              = pillsHtml.join("");
  sectEl.style.display           = "block";
  confirmEl.style.display        = "none";   

  
  setTimeout(function () {
    sectEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 80);
}






function selectVariantPill(slot, variantIdx, btn) {
  
  if (slot === "A") pickedVariantA = variantIdx;
  else              pickedVariantB = variantIdx;

  
  btn.closest(".cmp-variant-pills").querySelectorAll(".cmp-variant-pill").forEach(function (p) {
    p.classList.remove("selected");
  });

  
  btn.classList.add("selected");

  
  var slotL = slot.toLowerCase();
  document.getElementById("confirm-btn-" + slotL).style.display = "block";
}






function cancelPicker(slot) {
  var slotL    = slot.toLowerCase();
  var pickerId = "picker-" + slotL;
  var emptyId  = "slot-" + slotL + "-empty";
  var filledId = "slot-" + slotL + "-filled";

  
  var hasConfirmed = (slot === "A" && laptopOne) || (slot === "B" && laptopTwo);

  document.getElementById(pickerId).style.display = "none";
  if (hasConfirmed) {
    document.getElementById(filledId).style.display = "block";
  } else {
    document.getElementById(emptyId).style.display  = "flex";
  }
}







function confirmSlot(slot) {
  var modelId    = slot === "A" ? pickedModelA    : pickedModelB;
  var variantIdx = slot === "A" ? pickedVariantA  : pickedVariantB;

  
  if (!modelId || variantIdx === null || variantIdx === undefined) {
    showToast("Ek model aur uska variant dono select karo!");
    return;
  }

  
  var matchArr = compareDevices.filter(function (l) {
    return l.id === parseInt(modelId);
  });
  var laptop  = matchArr[0];
  var variant = laptop.variants[parseInt(variantIdx)];
  var price   = laptopMRP[laptop.id] || 0;

  
  var rigData = {
    laptopId:   laptop.id,
    brand:      laptop.brand,
    name:       laptop.name,
    cpu:        variant.cpu,
    gpu:        variant.gpu,
    ram:        variant.ram,
    storage:    variant.storage,
    cpuScore:   variant.cpuScore,
    gpuScore:   variant.gpuScore,
    price:      price,
  };

  
  if (slot === "A") laptopOne = rigData;
  else              laptopTwo = rigData;

  
  renderFilledSlot(slot, rigData);

  
  checkBothSlotsFilled();
}






function clearSlot(slot) {
  var slotL = slot.toLowerCase();

  if (slot === "A") {
    laptopOne    = null;
    pickedModelA   = null;
    pickedVariantA = null;
    document.getElementById("slot-a-card").classList.remove("winner-slot", "value-winner-slot");
  } else {
    laptopTwo    = null;
    pickedModelB   = null;
    pickedVariantB = null;
    document.getElementById("slot-b-card").classList.remove("winner-slot", "value-winner-slot");
  }

  
  document.getElementById("slot-" + slotL + "-filled").style.display  = "none";
  document.getElementById("picker-" + slotL).style.display            = "none";
  document.getElementById("slot-" + slotL + "-empty").style.display   = "flex";
  document.getElementById("clear-btn-" + slotL).style.display         = "none";

  
  document.getElementById("cmp-action-row").style.display = "none";
  document.getElementById("cmp-results").style.display    = "none";
}






function renderFilledSlot(slot, rig) {
  var slotL    = slot.toLowerCase();
  var filledId = "slot-" + slotL + "-filled";
  var pickerId = "picker-" + slotL;
  var clearId  = "clear-btn-" + slotL;

  var priceDisplay = rig.price > 0
    ? "\u20B9" + rig.price.toLocaleString("en-IN")
    : "Price N/A";

  
  var valueScore = rig.price > 0
    ? (rig.gpuScore / (rig.price / 100000)).toFixed(1)
    : "N/A";

  document.getElementById(filledId).innerHTML = [
    '<div class="cmp-filled-brand">' + rig.brand + '</div>',
    '<div class="cmp-filled-name">'  + rig.name  + '</div>',
    '<div class="cmp-filled-sub">'   + rig.cpu + '<br>' + rig.gpu + '</div>',
    '<div class="cmp-filled-chips">',
    '  <span class="cmp-chip">RAM: ' + rig.ram + '</span>',
    '  <span class="cmp-chip">SSD: ' + rig.storage + '</span>',
    '</div>',
    '<div class="cmp-filled-price">' + priceDisplay + '</div>',
    '<div class="cmp-filled-price-label">MRP (approx.)</div>',
    '<div class="cmp-mini-scores">',
    '  <div class="cmp-mini-score-row">',
    '    <span class="cmp-mini-score-label">CPU</span>',
    '    <div class="cmp-mini-bar-wrap"><div class="cmp-mini-bar-fill" id="mini-cpu-' + slotL + '" style="width:0%"></div></div>',
    '    <span class="cmp-mini-score-val">' + rig.cpuScore + '</span>',
    '  </div>',
    '  <div class="cmp-mini-score-row">',
    '    <span class="cmp-mini-score-label">GPU</span>',
    '    <div class="cmp-mini-bar-wrap"><div class="cmp-mini-bar-fill" id="mini-gpu-' + slotL + '" style="width:0%"></div></div>',
    '    <span class="cmp-mini-score-val">' + rig.gpuScore + '</span>',
    '  </div>',
    '  <div class="cmp-mini-score-row">',
    '    <span class="cmp-mini-score-label">VAL</span>',
    '    <div class="cmp-mini-bar-wrap"><div class="cmp-mini-bar-fill" id="mini-val-' + slotL + '" style="width:0%"></div></div>',
    '    <span class="cmp-mini-score-val">' + valueScore + '</span>',
    '  </div>',
    '</div>',
  ].join("");

  
  document.getElementById(pickerId).style.display  = "none";
  document.getElementById(filledId).style.display  = "block";
  document.getElementById(clearId).style.display   = "inline-block";

  
  setTimeout(function () {
    animateMiniBar("mini-cpu-" + slotL, rig.cpuScore);
    animateMiniBar("mini-gpu-" + slotL, rig.gpuScore);
    var maxVal = 3;
    var valPct = rig.price > 0 ? Math.min((rig.gpuScore / (rig.price / 100000)) / maxVal * 100, 100) : 0;
    animateMiniBar("mini-val-" + slotL, valPct);
  }, 80);
}

function animateMiniBar(barId, targetPct) {
  var bar = document.getElementById(barId);
  if (!bar) return;
  bar.style.width = targetPct + "%";
}






function checkBothSlotsFilled() {
  if (laptopOne && laptopTwo) {
    document.getElementById("cmp-action-row").style.display = "flex";
    doCompare();  
  } else {
    document.getElementById("cmp-action-row").style.display = "none";
  }
}






function getWinner(rigA, rigB) {
  var gpuWinner = rigA.gpuScore > rigB.gpuScore ? "A"
    : rigB.gpuScore > rigA.gpuScore ? "B"
    : "tie";

  
  var valueA = rigA.price > 0 ? rigA.gpuScore / (rigA.price / 100000) : 0;
  var valueB = rigB.price > 0 ? rigB.gpuScore / (rigB.price / 100000) : 0;

  var valueWinner = valueA > valueB ? "A"
    : valueB > valueA ? "B"
    : "tie";

  return {
    gpuWinner:     gpuWinner,
    valueWinner:   valueWinner,
    overallWinner: gpuWinner,  
    valueA:        parseFloat(valueA.toFixed(2)),
    valueB:        parseFloat(valueB.toFixed(2)),
  };
}






function doCompare() {
  if (!laptopOne || !laptopTwo) {
    showToast("Dono slots mein laptop select karo pehle!");
    return;
  }

  var result = getWinner(laptopOne, laptopTwo);

  
  renderWinnerBanner(result);

  
  var specRows = [
    {
      label: "Price (MRP)",
      rowClass: "cmp-row-price",
      aVal:  laptopOne.price > 0 ? "\u20B9" + laptopOne.price.toLocaleString("en-IN") : "N/A",
      bVal:  laptopTwo.price > 0 ? "\u20B9" + laptopTwo.price.toLocaleString("en-IN") : "N/A",
      winner: laptopOne.price < laptopTwo.price ? "A" : laptopTwo.price < laptopOne.price ? "B" : "tie",
    },
    {
      label: "Processor",
      aVal:  laptopOne.cpu,
      bVal:  laptopTwo.cpu,
      winner: laptopOne.cpuScore > laptopTwo.cpuScore ? "A" : laptopTwo.cpuScore > laptopOne.cpuScore ? "B" : "tie",
    },
    {
      label: "Graphics Card",
      aVal:  laptopOne.gpu,
      bVal:  laptopTwo.gpu,
      winner: result.gpuWinner,
    },
    {
      label: "RAM",
      aVal:  laptopOne.ram,
      bVal:  laptopTwo.ram,
      winner: parseInt(laptopOne.ram) > parseInt(laptopTwo.ram) ? "A" : parseInt(laptopTwo.ram) > parseInt(laptopOne.ram) ? "B" : "tie",
    },
    {
      label: "Storage",
      aVal:  laptopOne.storage,
      bVal:  laptopTwo.storage,
      winner: "tie",
    },
    {
      label: "CPU Score",
      aVal:  laptopOne.cpuScore + " / 100",
      bVal:  laptopTwo.cpuScore + " / 100",
      aBar: true, bBar: true,
      aBarId: "bar-cmp-cpu-a", bBarId: "bar-cmp-cpu-b",
      aPct: laptopOne.cpuScore,  bPct: laptopTwo.cpuScore,
      winner: laptopOne.cpuScore > laptopTwo.cpuScore ? "A" : laptopTwo.cpuScore > laptopOne.cpuScore ? "B" : "tie",
    },
    {
      label: "GPU Score",
      aVal:  laptopOne.gpuScore + " / 100",
      bVal:  laptopTwo.gpuScore + " / 100",
      aBar: true, bBar: true,
      aBarId: "bar-cmp-gpu-a", bBarId: "bar-cmp-gpu-b",
      aPct: laptopOne.gpuScore,  bPct: laptopTwo.gpuScore,
      winner: result.gpuWinner,
    },
    {
      label: "Overall Score",
      rowClass: "cmp-row-overall",
      aVal:  Math.round((laptopOne.cpuScore + laptopOne.gpuScore) / 2) + " / 100",
      bVal:  Math.round((laptopTwo.cpuScore + laptopTwo.gpuScore) / 2) + " / 100",
      winner: (laptopOne.cpuScore + laptopOne.gpuScore) > (laptopTwo.cpuScore + laptopTwo.gpuScore) ? "A"
            : (laptopTwo.cpuScore + laptopTwo.gpuScore) > (laptopOne.cpuScore + laptopOne.gpuScore) ? "B"
            : "tie",
    },
    {
      label: "Value Score",
      aVal:  result.valueA + " pts/lakh",
      bVal:  result.valueB + " pts/lakh",
      winner: result.valueWinner,
      isValue: true,
    },
  ];

  
  var rowsHtml = specRows.map(function (spec) {
    var rowClass = spec.rowClass || "";
    if (spec.winner === "A") rowClass += " cmp-row-a-wins";
    if (spec.winner === "B") rowClass += " cmp-row-b-wins";

    
    var cellA = spec.aVal;
    if (spec.aBar) {
      cellA += '<div class="cmp-score-bar-wrap"><div class="cmp-score-bar-fill-a" id="' + spec.aBarId + '" style="width:0%"></div></div>';
    }
    if (spec.isValue) {
      var ca = spec.winner === "A" ? "cmp-value-chip win" : "cmp-value-chip";
      cellA = '<span class="' + ca + '">' + spec.aVal + '</span>';
    }

    
    var cellB = spec.bVal;
    if (spec.bBar) {
      cellB += '<div class="cmp-score-bar-wrap"><div class="cmp-score-bar-fill-b" id="' + spec.bBarId + '" style="width:0%"></div></div>';
    }
    if (spec.isValue) {
      var cb = spec.winner === "B" ? "cmp-value-chip win" : "cmp-value-chip";
      cellB = '<span class="' + cb + '">' + spec.bVal + '</span>';
    }

    return [
      '<tr class="' + rowClass + '">',
      '  <td class="cmp-td cmp-td-spec">' + spec.label + '</td>',
      '  <td class="cmp-td cmp-td-a">'    + cellA      + '</td>',
      '  <td class="cmp-td cmp-td-b">'    + cellB      + '</td>',
      '</tr>',
    ].join("");
  });

  
  document.getElementById("cmp-th-a").textContent = laptopOne.brand + " — " + laptopOne.name.split("(")[0].trim();
  document.getElementById("cmp-th-b").textContent = laptopTwo.brand + " — " + laptopTwo.name.split("(")[0].trim();

  document.getElementById("cmp-tbody").innerHTML = rowsHtml.join("");
  document.getElementById("cmp-results").style.display = "block";

  
  setTimeout(function () {
    specRows
      .filter(function (s) { return s.aBar; })
      .map(function (s) {
        animateBar(s.aBarId, s.aPct);
        animateBar(s.bBarId, s.bPct);
      });
  }, 100);

  
  highlightWinnerSlot(result.overallWinner, result.valueWinner);

  
  saveLastCompared();

  
  setTimeout(function () {
    document.getElementById("cmp-results").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
}






function renderWinnerBanner(result) {
  var banner = document.getElementById("cmp-winner-banner");

  if (result.overallWinner === "tie") {
    banner.className = "cmp-winner-banner tie-state";
    banner.innerHTML = [
      '<div class="cmp-winner-crown">🤝</div>',
      '<div class="cmp-winner-info">',
      '  <div class="cmp-winner-sup">It\'s a Draw!</div>',
      '  <div class="cmp-winner-name">Both laptops are evenly matched</div>',
      '  <div class="cmp-winner-reason">Check the Value Score to decide based on your budget.</div>',
      '</div>',
    ].join("");
    return;
  }

  var winnerRig = result.overallWinner === "A" ? laptopOne : laptopTwo;
  var valueWinRig = result.valueWinner === "A" ? laptopOne : (result.valueWinner === "B" ? laptopTwo : null);
  var loserRig  = result.overallWinner === "A" ? laptopTwo : laptopOne;

  var reason = result.gpuWinner === result.valueWinner
    ? "Best GPU performance AND best value for money!"
    : "Strongest raw GPU. " + (valueWinRig ? loserRig.name.split("(")[0].trim() + " wins on value for money." : "");

  banner.className = "cmp-winner-banner";
  banner.innerHTML = [
    '<div class="cmp-winner-crown">🏆</div>',
    '<div class="cmp-winner-info">',
    '  <div class="cmp-winner-sup">Winner — Laptop ' + result.overallWinner + '</div>',
    '  <div class="cmp-winner-name">' + winnerRig.name + '</div>',
    '  <div class="cmp-winner-reason">' + reason + '</div>',
    '</div>',
    '<div class="cmp-winner-scores">',
    '  <div class="cmp-winner-chip">',
    '    <span class="cmp-winner-chip-val">' + winnerRig.gpuScore + '</span>',
    '    <span class="cmp-winner-chip-label">GPU Score</span>',
    '  </div>',
    '  <div class="cmp-winner-chip">',
    '    <span class="cmp-winner-chip-val">' + (result.overallWinner === "A" ? result.valueA : result.valueB) + '</span>',
    '    <span class="cmp-winner-chip-label">Value/Lakh</span>',
    '  </div>',
    '</div>',
  ].join("");
}






function highlightWinnerSlot(gpuWinner, valueWinner) {
  document.getElementById("slot-a-card").classList.remove("winner-slot", "value-winner-slot");
  document.getElementById("slot-b-card").classList.remove("winner-slot", "value-winner-slot");

  if (gpuWinner === "A") document.getElementById("slot-a-card").classList.add("winner-slot");
  else if (gpuWinner === "B") document.getElementById("slot-b-card").classList.add("winner-slot");

  if (valueWinner !== gpuWinner && valueWinner !== "tie") {
    var valCardId = valueWinner === "A" ? "slot-a-card" : "slot-b-card";
    document.getElementById(valCardId).classList.add("value-winner-slot");
  }
}






function animateBar(barId, targetPct) {
  var bar = document.getElementById(barId);
  if (!bar) return;
  bar.style.width = "0%";
  requestAnimationFrame(function () {
    setTimeout(function () { bar.style.width = targetPct + "%"; }, 50);
  });
}






function saveLastCompared() {
  localStorage.setItem("lastCompared", JSON.stringify({ laptopOne: laptopOne, laptopTwo: laptopTwo }));
}

function checkLastCompared() {
  var saved = JSON.parse(localStorage.getItem("lastCompared") || "null");
  if (saved && saved.laptopOne && saved.laptopTwo) {
    var bar    = document.getElementById("cmp-restore-bar");
    var textEl = document.getElementById("cmp-restore-text");
    textEl.textContent = "Restore: " + saved.laptopOne.name + "  vs  " + saved.laptopTwo.name;
    bar.style.display  = "flex";
  }
}

function restoreLastCompared() {
  var saved = JSON.parse(localStorage.getItem("lastCompared") || "null");
  if (!saved || !saved.laptopOne || !saved.laptopTwo) {
    showToast("Koi saved comparison nahi mili!");
    return;
  }

  laptopOne = saved.laptopOne;
  laptopTwo = saved.laptopTwo;

  renderFilledSlot("A", laptopOne);
  renderFilledSlot("B", laptopTwo);

  document.getElementById("slot-a-empty").style.display = "none";
  document.getElementById("slot-b-empty").style.display = "none";
  document.getElementById("picker-a").style.display     = "none";
  document.getElementById("picker-b").style.display     = "none";

  dismissRestore();
  checkBothSlotsFilled();
  showToast("Last comparison restored!");
}

function dismissRestore() {
  document.getElementById("cmp-restore-bar").style.display = "none";
}






function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function () { t.classList.remove("show"); }, 3000);
}






var RAWG_KEY = "dd3a12f2f07e482493bbd21cb8e62a0e";

async function fetchTrendingGames() {
  var grid = document.getElementById("trending-games-grid");
  if (!grid) return;

  try {
    var rawgUrl = "https://api.rawg.io/api/games?key=" + RAWG_KEY + "&platforms=4&ordering=-added&page_size=8";
    
    
    var isFile   = window.location.protocol === "file:";
    var finalUrl = isFile ? "https://corsproxy.io/?url=" + encodeURIComponent(rawgUrl) : rawgUrl;

    var res  = await fetch(finalUrl);
    var data = await res.json();

    
    var games = data.results.filter(function (g) { 
        if (!g.background_image) return false;
        var nameL = g.name.toLowerCase();
        if (nameL.indexOf("charlie") !== -1) return false;
        if (nameL.indexOf("princess maker 2") !== -1) return false;
        return true;
    }).slice(0, 8);

    if (games.length === 0) {
      grid.innerHTML = '<p class="cmp-slot-empty-text" style="grid-column: 1 / -1; text-align: center;">No trending games found right now.</p>';
      return;
    }

    
    var cardsHtml = games.map(function (game) {
      
      var mc = game.metacritic;
      var mcClass = "mc-none";
      if (mc) {
        if (mc >= 80) mcClass = "mc-green";
        else if (mc >= 50) mcClass = "mc-yellow";
        else mcClass = "mc-red";
      }
      var mcDisplay = mc ? mc : "N/A";

      
      var storeTags = "";
      if (game.stores && game.stores.length > 0) {
        storeTags = game.stores.map(function (s) {
          return '<span class="trending-store-tag">' + (s.store ? s.store.name : "") + '</span>';
        }).join("");
      }

      var bg = game.background_image ? game.background_image.replace("media/games/", "media/crop/600/400/games/").replace("media/screenshots/", "media/crop/600/400/screenshots/") : "";

      return [
        '<div class="trending-card">',
        '  <img src="' + bg + '" class="trending-thumb" alt="' + game.name + '" loading="lazy" />',
        '  <div class="trending-info">',
        '    <div class="trending-title">' + game.name + '</div>',
        '    <div class="trending-stores">' + storeTags + '</div>',
        '    <div class="trending-meta-row" style="margin-top: 12px;">',
        '      <span class="cmp-picker-label" style="text-transform:none; margin-bottom:0;">Metascore:</span>',
        '      <span class="trending-mc-badge ' + mcClass + '">' + mcDisplay + '</span>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join("");
    });

    grid.innerHTML = cardsHtml.join("");

  } catch (err) {
    console.log("Error fetching trending games:", err);
    grid.innerHTML = '<p class="cmp-slot-empty-text" style="grid-column: 1 / -1; text-align: center; color: #ff4d4d;">Failed to load trending games. Check your connection.</p>';
  }
}
