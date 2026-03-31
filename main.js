// =====================================================
//  Gamer's Armoury — main.js
//  Written by: Pratham Madaan, First-year, Rishihood University
//  Uses only Array HOFs (.map, .filter, .sort) — no for loops
//  Keeps game data from RAWG API (Windows/PC platform = 4)
// =====================================================


// ------ state ------
let myRig = JSON.parse(localStorage.getItem("myRig")) || null;

// which model / variant the user picked in the modal
let pickedModelId    = "";
let pickedVariantIdx = "";

// active operating mode removed — not needed for this project

// RAWG API key (free public key)
var RAWG_KEY = "3e6d4c3e9d6f435bb956e1a26dadc43c";

// RAWG platform id 4 = PC / Windows
var PC_PLATFORM = 4;


// ------ laptop catalogue ------
// hardcoded because most laptop spec APIs block browser requests (CORS)
// covers ASUS TUF / ROG / Zephyrus / Flow, MSI, Lenovo Legion, Acer Predator / Nitro,
// HP Omen / Victus, Dell G-Series / Alienware, Razer Blade, Gigabyte AORUS
// GPU generations go all the way up to RTX 5090
var laptops = [

  // ---- ASUS TUF GAMING ----
  {
    id: 1,
    brand: "ASUS",
    name: "ASUS TUF Gaming A15 (2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8 GB / 512 GB SSD",   cpu: "AMD Ryzen 5 7535HS",  gpu: "NVIDIA RTX 4050",    ram: "8 GB",   storage: "512 GB SSD",  cpuScore: 63, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 7745HX / RTX 4060 / 16 GB / 1 TB SSD",    cpu: "AMD Ryzen 7 7745HX",  gpu: "NVIDIA RTX 4060",    ram: "16 GB",  storage: "1 TB SSD",    cpuScore: 78, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 9 7945HX / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "AMD Ryzen 9 7945HX",  gpu: "NVIDIA RTX 4070",    ram: "16 GB",  storage: "1 TB SSD",    cpuScore: 90, gpuScore: 82, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 2,
    brand: "ASUS",
    name: "ASUS TUF Gaming F16 (2025)",
    variants: [
      { label: "Core Ultra 5 235H / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "Intel Core Ultra 5 235H",  gpu: "NVIDIA RTX 4060",     ram: "16 GB", storage: "512 GB SSD",  cpuScore: 70, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "Core Ultra 7 255H / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core Ultra 7 255H",  gpu: "NVIDIA RTX 4070",     ram: "16 GB", storage: "1 TB SSD",    cpuScore: 82, gpuScore: 82, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 285H / RTX 4070Ti / 32 GB / 2 TB SSD",  cpu: "Intel Core Ultra 9 285H",  gpu: "NVIDIA RTX 4070 Ti",  ram: "32 GB", storage: "2 TB SSD",    cpuScore: 91, gpuScore: 88, ramScore: 92, storeScore: 95 },
    ],
  },

  // ---- ASUS ROG STRIX ----
  {
    id: 3,
    brand: "ASUS",
    name: "ASUS ROG Strix G16 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4060 / 16 GB / 1 TB SSD",   cpu: "Intel Core Ultra 7 155H",   gpu: "NVIDIA RTX 4060",          ram: "16 GB", storage: "1 TB SSD",  cpuScore: 80, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 185H / RTX 4070 Ti / 32 GB / 1 TB SSD", cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4070 Ti SUPER", ram: "32 GB", storage: "1 TB SSD",  cpuScore: 93, gpuScore: 91, ramScore: 92, storeScore: 78 },
      { label: "Core Ultra 9 285H / RTX 4080 / 32 GB / 2 TB SSD",    cpu: "Intel Core Ultra 9 285H",  gpu: "NVIDIA RTX 4080",          ram: "32 GB", storage: "2 TB SSD",  cpuScore: 95, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 4,
    brand: "ASUS",
    name: "ASUS ROG Strix SCAR 16 (2025)",
    variants: [
      { label: "Ryzen AI 9 HX 370 / RTX 4080 / 32 GB / 2 TB SSD",   cpu: "AMD Ryzen AI 9 HX 370",  gpu: "NVIDIA RTX 4080",   ram: "32 GB", storage: "2 TB SSD",  cpuScore: 96, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "Ryzen AI 9 HX 370 / RTX 5080 / 64 GB / 4 TB SSD",   cpu: "AMD Ryzen AI 9 HX 370",  gpu: "NVIDIA RTX 5080",   ram: "64 GB", storage: "4 TB SSD",  cpuScore: 96, gpuScore: 97, ramScore: 98, storeScore: 99 },
    ],
  },
  {
    id: 5,
    brand: "ASUS",
    name: "ASUS ROG Strix G18 (2025)",
    variants: [
      { label: "Core Ultra 7 255HX / RTX 5070 Ti / 16 GB / 1 TB SSD",  cpu: "Intel Core Ultra 7 255HX",  gpu: "NVIDIA RTX 5070 Ti",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 87, gpuScore: 93, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 285HX / RTX 5080 / 32 GB / 2 TB SSD",     cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 5080",     ram: "32 GB", storage: "2 TB SSD",  cpuScore: 95, gpuScore: 97, ramScore: 92, storeScore: 95 },
      { label: "Core Ultra 9 285HX / RTX 5090 / 64 GB / 4 TB SSD",     cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 5090",     ram: "64 GB", storage: "4 TB SSD",  cpuScore: 97, gpuScore: 99, ramScore: 98, storeScore: 99 },
    ],
  },

  // ---- ASUS ROG ZEPHYRUS ----
  {
    id: 6,
    brand: "ASUS",
    name: "ASUS ROG Zephyrus G14 (2024)",
    variants: [
      { label: "Ryzen AI 9 HX 370 / RTX 4060 / 16 GB / 1 TB SSD",  cpu: "AMD Ryzen AI 9 HX 370",  gpu: "NVIDIA RTX 4060",   ram: "16 GB", storage: "1 TB SSD",  cpuScore: 92, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "Ryzen AI 9 HX 370 / RTX 4070 / 32 GB / 1 TB SSD",  cpu: "AMD Ryzen AI 9 HX 370",  gpu: "NVIDIA RTX 4070",   ram: "32 GB", storage: "1 TB SSD",  cpuScore: 94, gpuScore: 83, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 7,
    brand: "ASUS",
    name: "ASUS ROG Zephyrus G16 (2025)",
    variants: [
      { label: "Core Ultra 7 258H / RTX 4070 / 16 GB / 1 TB SSD",   cpu: "Intel Core Ultra 7 258H",  gpu: "NVIDIA RTX 4070",   ram: "16 GB", storage: "1 TB SSD",  cpuScore: 85, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 288H / RTX 4080 / 32 GB / 2 TB SSD",   cpu: "Intel Core Ultra 9 288H",  gpu: "NVIDIA RTX 4080",   ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "Core Ultra 9 288H / RTX 5080 / 32 GB / 2 TB SSD",   cpu: "Intel Core Ultra 9 288H",  gpu: "NVIDIA RTX 5080",   ram: "32 GB", storage: "2 TB SSD",  cpuScore: 94, gpuScore: 97, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 8,
    brand: "ASUS",
    name: "ASUS ROG Flow X16 (2024)",
    variants: [
      { label: "Ryzen 9 7940HX / RTX 4070 / 16 GB / 1 TB SSD",  cpu: "AMD Ryzen 9 7940HX",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 90, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 9 7940HX / RTX 4080 / 32 GB / 2 TB SSD",  cpu: "AMD Ryzen 9 7940HX",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 91, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },

  // ---- MSI ----
  {
    id: 9,
    brand: "MSI",
    name: "MSI Katana 15 (2024)",
    variants: [
      { label: "i5-13420H / RTX 4050 / 8 GB / 512 GB SSD",   cpu: "Intel Core i5-13420H",  gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 60, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "i7-13620H / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "Intel Core i7-13620H",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 75, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "i7-13700H / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core i7-13700H",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 82, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 10,
    brand: "MSI",
    name: "MSI Raider GE78 HX (2025)",
    variants: [
      { label: "Core Ultra 9 285HX / RTX 4080 / 32 GB / 2 TB SSD",  cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 4080",   ram: "32 GB", storage: "2 TB SSD",   cpuScore: 95, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "Core Ultra 9 285HX / RTX 4090 / 64 GB / 4 TB SSD",  cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 4090",   ram: "64 GB", storage: "4 TB SSD",   cpuScore: 96, gpuScore: 98, ramScore: 98, storeScore: 99 },
      { label: "Core Ultra 9 285HX / RTX 5090 / 64 GB / 4 TB SSD",  cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 5090",   ram: "64 GB", storage: "4 TB SSD",   cpuScore: 97, gpuScore: 99, ramScore: 98, storeScore: 99 },
    ],
  },
  {
    id: 11,
    brand: "MSI",
    name: "MSI Vector GP68HX (2024)",
    variants: [
      { label: "i7-13700HX / RTX 4070 Ti / 16 GB / 1 TB SSD",  cpu: "Intel Core i7-13700HX",  gpu: "NVIDIA RTX 4070 Ti",  ram: "16 GB", storage: "1 TB SSD",   cpuScore: 83, gpuScore: 88, ramScore: 73, storeScore: 78 },
      { label: "i9-13980HX / RTX 4080 / 32 GB / 2 TB SSD",     cpu: "Intel Core i9-13980HX",  gpu: "NVIDIA RTX 4080",     ram: "32 GB", storage: "2 TB SSD",   cpuScore: 94, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 12,
    brand: "MSI",
    name: "MSI Stealth 16 AI (2025)",
    variants: [
      { label: "Core Ultra 7 258H / RTX 4070 / 16 GB / 1 TB SSD",  cpu: "Intel Core Ultra 7 258H",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 84, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 288H / RTX 4080 / 32 GB / 2 TB SSD",  cpu: "Intel Core Ultra 9 288H",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 13,
    brand: "MSI",
    name: "MSI Titan GT77 (2023)",
    variants: [
      { label: "i9-13980HX / RTX 4090 / 64 GB / 4 TB SSD",  cpu: "Intel Core i9-13980HX",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",  cpuScore: 95, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },

  // ---- LENOVO LEGION ----
  {
    id: 14,
    brand: "Lenovo",
    name: "Lenovo Legion 5i Gen 9 (2024)",
    variants: [
      { label: "i5-13500HX / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "Intel Core i5-13500HX",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 68, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "i7-14700HX / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core i7-14700HX",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 85, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "i9-14900HX / RTX 4070 Ti / 32 GB / 2 TB SSD", cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4070 Ti",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 89, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 15,
    brand: "Lenovo",
    name: "Lenovo Legion 7i Gen 9 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core Ultra 7 155H",   gpu: "NVIDIA RTX 4070",   ram: "16 GB", storage: "1 TB SSD",  cpuScore: 82, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 185H / RTX 4080 / 32 GB / 1 TB SSD",    cpu: "Intel Core Ultra 9 185H",   gpu: "NVIDIA RTX 4080",   ram: "32 GB", storage: "1 TB SSD",  cpuScore: 91, gpuScore: 94, ramScore: 92, storeScore: 78 },
      { label: "Core Ultra 9 185H / RTX 4090 / 32 GB / 2 TB SSD",    cpu: "Intel Core Ultra 9 185H",   gpu: "NVIDIA RTX 4090",   ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 98, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 16,
    brand: "Lenovo",
    name: "Lenovo Legion Pro 5 Gen 9 (2024)",
    variants: [
      { label: "Ryzen 7 8845HX / RTX 4060 / 16 GB / 1 TB SSD",   cpu: "AMD Ryzen 7 8845HX",  gpu: "NVIDIA RTX 4060",   ram: "16 GB", storage: "1 TB SSD",  cpuScore: 86, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 9 8945HX / RTX 4070 Ti / 32 GB / 1 TB SSD", cpu: "AMD Ryzen 9 8945HX",  gpu: "NVIDIA RTX 4070 Ti", ram: "32 GB", storage: "1 TB SSD",  cpuScore: 93, gpuScore: 89, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 17,
    brand: "Lenovo",
    name: "Lenovo Legion Slim 7i Gen 9 (2024)",
    variants: [
      { label: "Core Ultra 7 165H / RTX 4060 / 16 GB / 1 TB SSD",  cpu: "Intel Core Ultra 7 165H",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 80, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 185H / RTX 4070 / 32 GB / 2 TB SSD",  cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4070",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 91, gpuScore: 83, ramScore: 92, storeScore: 95 },
    ],
  },

  // ---- ACER ----
  {
    id: 18,
    brand: "Acer",
    name: "Acer Predator Helios Neo 16 (2024)",
    variants: [
      { label: "Core Ultra 5 125H / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "Intel Core Ultra 5 125H",  gpu: "NVIDIA RTX 4060",   ram: "16 GB", storage: "512 GB SSD",  cpuScore: 67, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "Core Ultra 7 155H / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core Ultra 7 155H",  gpu: "NVIDIA RTX 4070",   ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 185H / RTX 4070 Ti / 32 GB / 2 TB SSD", cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4070 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 91, gpuScore: 89, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 19,
    brand: "Acer",
    name: "Acer Predator Helios 18 (2024)",
    variants: [
      { label: "i9-14900HX / RTX 4080 / 32 GB / 2 TB SSD",   cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "i9-14900HX / RTX 4090 / 64 GB / 4 TB SSD",   cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",  cpuScore: 94, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },
  {
    id: 20,
    brand: "Acer",
    name: "Acer Nitro V 15 (2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8 GB / 512 GB SSD",  cpu: "AMD Ryzen 5 7535HS",  gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 63, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 7745HX / RTX 4060 / 16 GB / 512 GB SSD", cpu: "AMD Ryzen 7 7745HX",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 78, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },

  // ---- HP ----
  {
    id: 21,
    brand: "HP",
    name: "HP Omen 16 (2024)",
    variants: [
      { label: "Ryzen 7 8845HS / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 8845HS",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 82, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 9 8945HS / RTX 4070 / 32 GB / 1 TB SSD",    cpu: "AMD Ryzen 9 8945HS",  gpu: "NVIDIA RTX 4070",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 90, gpuScore: 83, ramScore: 92, storeScore: 78 },
      { label: "Core Ultra 7 155H / RTX 4080 / 32 GB / 2 TB SSD", cpu: "Intel Core Ultra 7 155H",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 82, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 22,
    brand: "HP",
    name: "HP Omen Transcend 14 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4070 / 16 GB / 1 TB SSD",  cpu: "Intel Core Ultra 7 155H",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 80, gpuScore: 83, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 23,
    brand: "HP",
    name: "HP Victus 16 (2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8 GB / 512 GB SSD",   cpu: "AMD Ryzen 5 7535HS",  gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 63, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "i5-13500H / RTX 4060 / 16 GB / 512 GB SSD",       cpu: "Intel Core i5-13500H",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 67, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },

  // ---- DELL ----
  {
    id: 24,
    brand: "Dell",
    name: "Dell G16 Gaming (2024)",
    variants: [
      { label: "i7-13650HX / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "Intel Core i7-13650HX",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 74, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "i9-13900HX / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core i9-13900HX",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 89, gpuScore: 83, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 25,
    brand: "Dell",
    name: "Alienware m16 R2 (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4070 / 16 GB / 1 TB SSD",   cpu: "Intel Core Ultra 7 155H",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 80, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "Core Ultra 9 185H / RTX 4080 / 32 GB / 2 TB SSD",   cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 91, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 26,
    brand: "Dell",
    name: "Alienware x16 R2 (2024)",
    variants: [
      { label: "Core Ultra 9 185H / RTX 4080 / 32 GB / 2 TB SSD",  cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "Core Ultra 9 185H / RTX 4090 / 64 GB / 4 TB SSD",  cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",  cpuScore: 94, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },

  // ---- RAZER ----
  {
    id: 27,
    brand: "Razer",
    name: "Razer Blade 14 (2024)",
    variants: [
      { label: "Ryzen 9 8945HS / RTX 4060 / 16 GB / 1 TB SSD",  cpu: "AMD Ryzen 9 8945HS",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 90, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 9 8945HS / RTX 4070 / 16 GB / 1 TB SSD",  cpu: "AMD Ryzen 9 8945HS",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 91, gpuScore: 83, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 28,
    brand: "Razer",
    name: "Razer Blade 16 (2025)",
    variants: [
      { label: "Core Ultra 9 285HX / RTX 5080 / 32 GB / 2 TB SSD",  cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 5080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 95, gpuScore: 97, ramScore: 92, storeScore: 95 },
      { label: "Core Ultra 9 285HX / RTX 5090 / 32 GB / 4 TB SSD",  cpu: "Intel Core Ultra 9 285HX",  gpu: "NVIDIA RTX 5090",  ram: "32 GB", storage: "4 TB SSD",  cpuScore: 96, gpuScore: 99, ramScore: 92, storeScore: 99 },
    ],
  },
  {
    id: 29,
    brand: "Razer",
    name: "Razer Blade 18 (2024)",
    variants: [
      { label: "i9-14900HX / RTX 4080 / 32 GB / 2 TB SSD",  cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "i9-14900HX / RTX 4090 / 64 GB / 4 TB SSD",  cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",  cpuScore: 95, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },

  // ---- GIGABYTE AORUS ----
  {
    id: 30,
    brand: "Gigabyte",
    name: "Gigabyte AORUS 16X (2024)",
    variants: [
      { label: "i7-14650HX / RTX 4070 Ti / 16 GB / 1 TB SSD",  cpu: "Intel Core i7-14650HX",  gpu: "NVIDIA RTX 4070 Ti SUPER",  ram: "16 GB", storage: "1 TB SSD",  cpuScore: 84, gpuScore: 91, ramScore: 73, storeScore: 78 },
      { label: "i9-14900HX / RTX 4080 / 32 GB / 2 TB SSD",    cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4080",           ram: "32 GB", storage: "2 TB SSD",  cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 31,
    brand: "Gigabyte",
    name: "Gigabyte AORUS 17X (2024)",
    variants: [
      { label: "i9-14900HX / RTX 4080 / 64 GB / 2 TB SSD",  cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4080",  ram: "64 GB", storage: "2 TB SSD",  cpuScore: 94, gpuScore: 94, ramScore: 98, storeScore: 95 },
      { label: "i9-14900HX / RTX 4090 / 64 GB / 4 TB SSD",  cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",  cpuScore: 95, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },

];


// =====================================================
//  PAGE INIT
// =====================================================

window.addEventListener("DOMContentLoaded", function() {

  // fill the model dropdown in the modal
  buildModelDropdown();

  // if rig already saved from a previous visit, show it straight away
  if (myRig) {
    showRigCard(myRig);
    showRigStats(myRig);
  }

  // set up the game search box listener
  setupSearch();

  // close dropdowns when clicking elsewhere on the page
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".custom-drop")) {
      document.querySelectorAll(".custom-drop").forEach(function(d) {
        d.classList.remove("open");
      });
    }
  });

});


// =====================================================
//  NAVIGATION
// =====================================================

function handleNav(id) {
  // remove active from all sidebar links
  document.querySelectorAll(".sb-link").forEach(function(link) {
    link.classList.remove("active");
  });
  var el = document.getElementById(id);
  if (el) el.classList.add("active");
  // close sidebar on mobile after tapping
  closeSidebar();
}

function scrollToGames() {
  var el = document.getElementById("section-games");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  document.getElementById("game-search-input").focus();
}


// =====================================================
//  MODAL — open / close
// =====================================================

function openModal() {
  document.getElementById("rig-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("rig-modal").classList.remove("open");
  // reset dropdown state so next open feels fresh
  closeDrop("model-drop");
  closeDrop("variant-drop");
}

// clicking the dark overlay (not the box) closes modal
function onModalOverlayClick(e) {
  if (e.target === document.getElementById("rig-modal")) {
    closeModal();
  }
}


// =====================================================
//  CUSTOM DROPDOWN
// =====================================================

function toggleDrop(id) {
  var drop = document.getElementById(id);
  var isOpen = drop.classList.contains("open");
  // close all first
  document.querySelectorAll(".custom-drop").forEach(function(d) {
    d.classList.remove("open");
  });
  if (!isOpen) drop.classList.add("open");
}

function closeDrop(id) {
  document.getElementById(id).classList.remove("open");
}

// build the laptop model options using .map()
function buildModelDropdown() {
  var menu = document.getElementById("model-menu");
  var html = laptops.map(function(laptop) {
    return '<div class="drop-option" onclick="pickModel(' + laptop.id + ', \'' + laptop.brand + ' — ' + laptop.name + '\')">' + laptop.brand + ' — ' + laptop.name + '</div>';
  }).join("");
  menu.innerHTML = html;
}

// user picked a laptop model
function pickModel(laptopId, label) {
  pickedModelId    = laptopId;
  pickedVariantIdx = "";

  document.getElementById("model-trigger-text").textContent = label;
  closeDrop("model-drop");

  // reset variant dropdown text
  document.getElementById("variant-trigger-text").textContent = "-- Pick a variant --";

  // build the variant options for chosen laptop using .filter() + .map()
  var matched = laptops.filter(function(l) { return l.id === parseInt(laptopId); });
  var chosen  = matched[0];

  var varHtml = chosen.variants.map(function(v, i) {
    return '<div class="drop-option" onclick="pickVariant(' + i + ', \'' + v.label + '\')">' + v.label + '</div>';
  }).join("");

  document.getElementById("variant-menu").innerHTML = varHtml;
  document.getElementById("variant-section").style.display = "block";
}

// user picked a variant
function pickVariant(idx, label) {
  pickedVariantIdx = idx;
  document.getElementById("variant-trigger-text").textContent = label;
  closeDrop("variant-drop");
}


// =====================================================
//  SAVE RIG
// =====================================================

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
  showToast("✅ " + myRig.brand + " " + myRig.name + " saved to Armoury!");
}


// =====================================================
//  DISPLAY — rig card in main area
// =====================================================

function showRigCard(rig) {
  var noRig  = document.getElementById("no-rig-view");
  var card   = document.getElementById("rig-card");

  // hide the + area
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
        <span class="rig-chip">🧠 ' + rig.ram + '</span>\
        <span class="rig-chip">💾 ' + rig.storage + '</span>\
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
      <div class="stats-ph-icon">😴</div>\
      <p>No setup selected yet.</p>\
      <p class="stats-ph-sub">Click <strong>+</strong> to add<br>your laptop.</p>\
    </div>\
  ';
  document.getElementById("stats-content").innerHTML = empty;

  var sheetInner = document.getElementById("stats-sheet-inner");
  if (sheetInner) sheetInner.innerHTML = empty;

  showToast("Setup removed from Armoury.");
}


// =====================================================
//  TOAST
// =====================================================

function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function() {
    t.classList.remove("show");
  }, 3000);
}


// =====================================================
//  GAME SEARCH — RAWG API (PC / Windows platform only)
// =====================================================

function setupSearch() {
  var input = document.getElementById("game-search-input");
  var btn   = document.getElementById("game-search-btn");

  btn.addEventListener("click", function() {
    var q = input.value.trim();
    if (q) fetchGames(q);
  });

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      var q = input.value.trim();
      if (q) fetchGames(q);
    }
  });
}

function doSearch() {
  var q = document.getElementById("game-search-input").value.trim();
  if (q) fetchGames(q);
}

async function fetchGames(query) {
  var grid = document.getElementById("game-results");
  grid.innerHTML = '<p class="msg-loading">🔍 Searching Windows games for "' + query + '"...</p>';

  try {
    // build the RAWG url — platforms=4 filters to PC/Windows only
    var rawgUrl = [
      "https://api.rawg.io/api/games",
      "?key=" + RAWG_KEY,
      "&search=" + encodeURIComponent(query),
      "&platforms=" + PC_PLATFORM,
      "&ordering=-rating",
      "&page_size=12",
    ].join("");

    // when opened as file:// we need a CORS proxy because browsers block it
    var isFile   = window.location.protocol === "file:";
    var finalUrl = isFile
      ? "https://corsproxy.io/?url=" + encodeURIComponent(rawgUrl)
      : rawgUrl;

    var res  = await fetch(finalUrl);
    var data = await res.json();

    // filter out cards with no image using .filter()
    var games = data.results.filter(function(g) { return g.background_image; });

    // sort by rating, best first, using .sort()
    games = games.sort(function(a, b) { return b.rating - a.rating; });

    renderGames(games);
  } catch (err) {
    console.log("RAWG fetch error:", err);
    grid.innerHTML = '<p class="msg-error">❌ Could not load games. Check your internet connection.</p>';
  }
}

function renderGames(games) {
  var grid = document.getElementById("game-results");

  if (games.length === 0) {
    grid.innerHTML = '<p class="msg-loading">No Windows games found. Try a different search term.</p>';
    return;
  }

  // build cards using .map() — junior dev writes one step at a time
  var cards = games.map(function(game) {

    var rating  = game.rating ? game.rating.toFixed(1) : "N/A";
    var genres  = game.genres ? game.genres.map(function(g) { return g.name; }).join(", ") : "";
    var mcScore = game.metacritic ? '<span class="game-meta-score">' + game.metacritic + '</span>' : "";
    var compat  = getCompatBadge(game);

    return '\
      <div class="game-card" onclick="openGameDetail(\'' + game.id + '\')">\
        <img class="game-thumb" src="' + game.background_image + '" alt="' + game.name + '" loading="lazy" />\
        <div class="game-meta">\
          <div class="game-title">' + game.name + '</div>\
          <div class="game-genre">' + genres + '</div>\
          <div class="game-row">\
            <span class="game-rating">⭐ ' + rating + '</span>\
            ' + mcScore + '\
            ' + compat + '\
          </div>\
        </div>\
      </div>\
    ';
  });

  grid.innerHTML = cards.join("");
}

// figure out compat badge based on rig scores vs game weight
function getCompatBadge(game) {
  if (!myRig) {
    return '<span class="compat compat-unknown">Add Setup to Check</span>';
  }

  var avg      = (myRig.cpuScore + myRig.gpuScore) / 2;
  var weight   = game.metacritic ? game.metacritic : 60;

  if (avg >= 80 || weight <= 65) {
    return '<span class="compat compat-yes">✓ Runs Well</span>';
  } else if (avg >= 60) {
    return '<span class="compat compat-maybe">~ May Run</span>';
  } else {
    return '<span class="compat compat-no">✗ May Struggle</span>';
  }
}


// =====================================================
//  GAME DETAIL PANEL
// =====================================================

async function openGameDetail(gameId) {
  var panel = document.getElementById("game-detail-box");
  panel.innerHTML = '<p class="msg-loading" style="padding:14px 0;">Loading details...</p>';
  panel.classList.add("open");

  try {
    var rawgDetailUrl = "https://api.rawg.io/api/games/" + gameId + "?key=" + RAWG_KEY;
    var isFile   = window.location.protocol === "file:";
    var finalUrl = isFile
      ? "https://corsproxy.io/?url=" + encodeURIComponent(rawgDetailUrl)
      : rawgDetailUrl;

    var res  = await fetch(finalUrl);
    var game = await res.json();

    // extract info using .map()
    var platforms  = game.platforms  ? game.platforms.map(function(p)  { return p.platform.name; }).join(" · ") : "Unknown";
    var devs       = game.developers ? game.developers.map(function(d) { return d.name; }).join(", ") : "Unknown";
    var publishers = game.publishers ? game.publishers.map(function(p) { return p.name; }).join(", ") : "Unknown";
    var genres     = game.genres     ? game.genres.map(function(g)     { return g.name; }).join(", ") : "Unknown";
    var esrb       = game.esrb_rating ? game.esrb_rating.name : "Not Rated";
    var desc       = game.description_raw ? game.description_raw.slice(0, 380) + "…" : "No description.";
    var compat     = getCompatBadge(game);

    panel.innerHTML = '\
      <button class="detail-close" onclick="closeGameDetail()">✕</button>\
      <h3 class="detail-heading">' + game.name + '</h3>\
      <div class="detail-badges">' + compat + '<span class="detail-esrb">' + esrb + '</span></div>\
      <p class="detail-desc">' + desc + '</p>\
      <div class="detail-meta-grid">\
        <div class="detail-meta-row"><strong>Developer:</strong> ' + devs + '</div>\
        <div class="detail-meta-row"><strong>Publisher:</strong> ' + publishers + '</div>\
        <div class="detail-meta-row"><strong>Genre:</strong> ' + genres + '</div>\
        <div class="detail-meta-row"><strong>Platforms:</strong> ' + platforms + '</div>\
        <div class="detail-meta-row"><strong>Rating:</strong> ⭐ ' + (game.rating ? game.rating.toFixed(1) : "N/A") + ' / 5</div>\
        <div class="detail-meta-row"><strong>Metacritic:</strong> ' + (game.metacritic || "N/A") + '</div>\
        <div class="detail-meta-row"><strong>Released:</strong> ' + (game.released || "N/A") + '</div>\
        <div class="detail-meta-row"><strong>Avg Playtime:</strong> ' + (game.playtime ? game.playtime + " hrs" : "N/A") + '</div>\
      </div>\
    ';
  } catch (err) {
    console.log("Game detail fetch error:", err);
    panel.innerHTML = '<p class="msg-error" style="padding:14px 0;">❌ Could not load game details.</p>';
  }
}

function closeGameDetail() {
  var panel = document.getElementById("game-detail-box");
  panel.classList.remove("open");
}


// =====================================================
//  MOBILE — sidebar, stats sheet, bottom nav
// =====================================================

function openSidebar() {
  var sb  = document.getElementById("sidebar");
  var ov  = document.getElementById("sb-overlay");
  sb.classList.add("open");
  ov.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  var sb = document.getElementById("sidebar");
  var ov = document.getElementById("sb-overlay");
  sb.classList.remove("open");
  ov.classList.remove("show");
  document.body.style.overflow = "";
}

function openStatsSheet() {
  // sync content from the desktop panel before showing
  var desktopContent = document.getElementById("stats-content");
  var sheetInner     = document.getElementById("stats-sheet-inner");
  if (desktopContent && sheetInner) {
    sheetInner.innerHTML = desktopContent.innerHTML;
    // re-run animations for the cloned bars
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
