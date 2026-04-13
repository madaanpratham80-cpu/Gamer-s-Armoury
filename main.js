








let myRig = JSON.parse(localStorage.getItem("myRig")) || null;


let pickedModelId    = "";
let pickedVariantIdx = "";




var RAWG_KEY = "dd3a12f2f07e482493bbd21cb8e62a0e";


var PC_PLATFORM = 4;







var laptops = [

  
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

  
  {
    id: 32,
    brand: "ASUS",
    name: "ASUS TUF Gaming A15 (2021)",
    variants: [
      { label: "Ryzen 5 4600H / GTX 1650 / 8 GB / 512 GB SSD",     cpu: "AMD Ryzen 5 4600H",   gpu: "NVIDIA GTX 1650",     ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 45, gpuScore: 40, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 4800H / GTX 1660 Ti / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 4800H",   gpu: "NVIDIA GTX 1660 Ti",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 52, gpuScore: 50, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 7 5800H / RTX 3060 / 16 GB / 512 GB SSD",     cpu: "AMD Ryzen 7 5800H",   gpu: "NVIDIA RTX 3060",     ram: "16 GB", storage: "512 GB SSD",  cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 33,
    brand: "ASUS",
    name: "ASUS ROG Strix G15 (2021/2022)",
    variants: [
      { label: "Ryzen 7 5800H / RTX 3050 Ti / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 5800H",   gpu: "NVIDIA RTX 3050 Ti",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 65, gpuScore: 55, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 9 5900HX / RTX 3070 / 16 GB / 1 TB SSD",      cpu: "AMD Ryzen 9 5900HX",  gpu: "NVIDIA RTX 3070",     ram: "16 GB", storage: "1 TB SSD",    cpuScore: 72, gpuScore: 75, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 9 6900HX / RTX 3080 / 32 GB / 1 TB SSD",      cpu: "AMD Ryzen 9 6900HX",  gpu: "NVIDIA RTX 3080",     ram: "32 GB", storage: "1 TB SSD",    cpuScore: 78, gpuScore: 82, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 34,
    brand: "Lenovo",
    name: "Lenovo Legion 5 (2021)",
    variants: [
      { label: "Ryzen 5 5600H / GTX 1650 / 8 GB / 512 GB SSD",      cpu: "AMD Ryzen 5 5600H",   gpu: "NVIDIA GTX 1650",     ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 50, gpuScore: 40, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 5800H / RTX 3050 / 8 GB / 512 GB SSD",      cpu: "AMD Ryzen 7 5800H",   gpu: "NVIDIA RTX 3050",     ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 65, gpuScore: 52, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 5800H / RTX 3060 / 16 GB / 1 TB SSD",       cpu: "AMD Ryzen 7 5800H",   gpu: "NVIDIA RTX 3060",     ram: "16 GB", storage: "1 TB SSD",    cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 7 5800H / RTX 3070 / 16 GB / 1 TB SSD",       cpu: "AMD Ryzen 7 5800H",   gpu: "NVIDIA RTX 3070",     ram: "16 GB", storage: "1 TB SSD",    cpuScore: 65, gpuScore: 75, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 35,
    brand: "Lenovo",
    name: "Lenovo IdeaPad Gaming 3 (2021/2022)",
    variants: [
      { label: "i5-11300H / GTX 1650 / 8 GB / 512 GB SSD",          cpu: "Intel Core i5-11300H",  gpu: "NVIDIA GTX 1650",   ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 46, gpuScore: 40, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 5 5600H / RTX 3050 / 8 GB / 512 GB SSD",      cpu: "AMD Ryzen 5 5600H",     gpu: "NVIDIA RTX 3050",   ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 50, gpuScore: 52, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 6800H / RTX 3050 Ti / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 6800H",     gpu: "NVIDIA RTX 3050 Ti",ram: "16 GB", storage: "512 GB SSD",  cpuScore: 70, gpuScore: 55, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 36,
    brand: "Acer",
    name: "Acer Nitro 5 (2020-2022)",
    variants: [
      { label: "i5-10300H / GTX 1650 / 8 GB / 256 GB SSD",          cpu: "Intel Core i5-10300H",  gpu: "NVIDIA GTX 1650",   ram: "8 GB",  storage: "256 GB SSD",  cpuScore: 42, gpuScore: 40, ramScore: 53, storeScore: 50 },
      { label: "i5-11400H / RTX 3050 / 16 GB / 512 GB SSD",         cpu: "Intel Core i5-11400H",  gpu: "NVIDIA RTX 3050",   ram: "16 GB", storage: "512 GB SSD",  cpuScore: 52, gpuScore: 52, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 7 5800H / RTX 3060 / 16 GB / 1 TB SSD",       cpu: "AMD Ryzen 7 5800H",     gpu: "NVIDIA RTX 3060",   ram: "16 GB", storage: "1 TB SSD",    cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 37,
    brand: "HP",
    name: "HP Pavilion Gaming 15",
    variants: [
      { label: "Ryzen 5 4600H / GTX 1650 / 8 GB / 512 GB SSD",      cpu: "AMD Ryzen 5 4600H",   gpu: "NVIDIA GTX 1650",     ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 45, gpuScore: 40, ramScore: 53, storeScore: 60 },
      { label: "i5-10300H / GTX 1660 Ti / 8 GB / 512 GB SSD",       cpu: "Intel Core i5-10300H",gpu: "NVIDIA GTX 1660 Ti",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 42, gpuScore: 50, ramScore: 53, storeScore: 60 },
    ],
  },
  {
    id: 38,
    brand: "HP",
    name: "HP Omen 15 (2021)",
    variants: [
      { label: "Ryzen 7 5800H / RTX 3060 / 16 GB / 512 GB SSD",     cpu: "AMD Ryzen 7 5800H",   gpu: "NVIDIA RTX 3060",     ram: "16 GB", storage: "512 GB SSD",  cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "i7-10750H / RTX 3070 / 16 GB / 1 TB SSD",           cpu: "Intel Core i7-10750H",gpu: "NVIDIA RTX 3070",     ram: "16 GB", storage: "1 TB SSD",    cpuScore: 55, gpuScore: 75, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 39,
    brand: "Dell",
    name: "Dell G15 (2021/2022)",
    variants: [
      { label: "i5-11260H / RTX 3050 / 8 GB / 512 GB SSD",          cpu: "Intel Core i5-11260H",  gpu: "NVIDIA RTX 3050",   ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 48, gpuScore: 52, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 5800H / RTX 3060 / 16 GB / 1 TB SSD",       cpu: "AMD Ryzen 7 5800H",     gpu: "NVIDIA RTX 3060",   ram: "16 GB", storage: "1 TB SSD",    cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 78 },
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",        cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti",ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 40,
    brand: "MSI",
    name: "MSI GF63 Thin (2020/2021)",
    variants: [
      { label: "i5-10300H / GTX 1650 Max-Q / 8 GB / 256 GB SSD",    cpu: "Intel Core i5-10300H",  gpu: "NVIDIA GTX 1650 Max-Q", ram: "8 GB", storage: "256 GB SSD", cpuScore: 42, gpuScore: 35, ramScore: 53, storeScore: 50 },
      { label: "i7-11800H / RTX 3050 Ti / 16 GB / 512 GB SSD",      cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3050 Ti",    ram: "16 GB", storage: "512 GB SSD", cpuScore: 70, gpuScore: 55, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 41,
    brand: "MSI",
    name: "MSI Katana GF66 (2021)",
    variants: [
      { label: "i7-11800H / RTX 3060 / 16 GB / 512 GB SSD",         cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3060",   ram: "16 GB", storage: "512 GB SSD",  cpuScore: 70, gpuScore: 65, ramScore: 73, storeScore: 60 },
    ],
  },

  
  {
    id: 42,
    brand: "ASUS",
    name: "ASUS ROG Strix G17 (2022)",
    variants: [
      { label: "Ryzen 7 6800H / RTX 3060 / 16 GB / 512 GB SSD",    cpu: "AMD Ryzen 7 6800H",   gpu: "NVIDIA RTX 3060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 70, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 7 6800H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "AMD Ryzen 7 6800H",   gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 70, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "Ryzen 9 6900HX / RTX 3080 Ti / 32 GB / 1 TB SSD",  cpu: "AMD Ryzen 9 6900HX",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "1 TB SSD",    cpuScore: 78, gpuScore: 87, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 43,
    brand: "ASUS",
    name: "ASUS ROG Strix SCAR 17 (2022/2023)",
    variants: [
      { label: "Ryzen 9 6900HX / RTX 3080 Ti / 32 GB / 1 TB SSD",  cpu: "AMD Ryzen 9 6900HX",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "1 TB SSD",    cpuScore: 78, gpuScore: 87, ramScore: 92, storeScore: 78 },
      { label: "Ryzen 9 7945HX / RTX 4080 / 32 GB / 2 TB SSD",     cpu: "AMD Ryzen 9 7945HX",  gpu: "NVIDIA RTX 4080",    ram: "32 GB", storage: "2 TB SSD",    cpuScore: 90, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "Ryzen 9 7945HX / RTX 4090 / 32 GB / 2 TB SSD",     cpu: "AMD Ryzen 9 7945HX",  gpu: "NVIDIA RTX 4090",    ram: "32 GB", storage: "2 TB SSD",    cpuScore: 91, gpuScore: 98, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 44,
    brand: "ASUS",
    name: "ASUS ROG Zephyrus Duo 16 (2022/2023)",
    variants: [
      { label: "Ryzen 9 6900HX / RTX 3080 Ti / 32 GB / 2 TB SSD",  cpu: "AMD Ryzen 9 6900HX",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 78, gpuScore: 87, ramScore: 92, storeScore: 95 },
      { label: "Ryzen 9 7945HX / RTX 4090 / 64 GB / 4 TB SSD",     cpu: "AMD Ryzen 9 7945HX",  gpu: "NVIDIA RTX 4090",    ram: "64 GB", storage: "4 TB SSD",    cpuScore: 91, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },
  {
    id: 45,
    brand: "ASUS",
    name: "ASUS TUF Dash F15 (2021/2022)",
    variants: [
      { label: "i7-11370H / RTX 3050 Ti / 8 GB / 512 GB SSD",  cpu: "Intel Core i7-11370H",  gpu: "NVIDIA RTX 3050 Ti", ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 58, gpuScore: 55, ramScore: 53, storeScore: 60 },
      { label: "i7-12650H / RTX 3060 / 16 GB / 512 GB SSD",    cpu: "Intel Core i7-12650H",  gpu: "NVIDIA RTX 3060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 72, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "i7-12650H / RTX 3070 / 16 GB / 1 TB SSD",      cpu: "Intel Core i7-12650H",  gpu: "NVIDIA RTX 3070",    ram: "16 GB", storage: "1 TB SSD",    cpuScore: 72, gpuScore: 75, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 46,
    brand: "ASUS",
    name: "ASUS ROG Flow X13 (2022/2023)",
    variants: [
      { label: "Ryzen 9 6900HS / RTX 3050 Ti / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 9 6900HS",  gpu: "NVIDIA RTX 3050 Ti", ram: "16 GB", storage: "512 GB SSD",  cpuScore: 76, gpuScore: 55, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 9 7940HS / RTX 4060 / 16 GB / 512 GB SSD",     cpu: "AMD Ryzen 9 7940HS",  gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 84, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 47,
    brand: "ASUS",
    name: "ASUS ROG Flow Z13 (2023/2024)",
    variants: [
      { label: "i9-13900H / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "Intel Core i9-13900H",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 86, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "i9-13900H / RTX 4070 / 16 GB / 1 TB SSD",    cpu: "Intel Core i9-13900H",  gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 86, gpuScore: 83, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 48,
    brand: "ASUS",
    name: "ASUS ROG Zephyrus M16 (2022/2023)",
    variants: [
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",      cpu: "Intel Core i7-12700H",    gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i9-12900H / RTX 3080 Ti / 32 GB / 2 TB SSD",      cpu: "Intel Core i9-12900H",    gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 88, gpuScore: 87, ramScore: 92, storeScore: 95 },
      { label: "Core Ultra 7 155H / RTX 4090 / 32 GB / 2 TB SSD", cpu: "Intel Core Ultra 7 155H", gpu: "NVIDIA RTX 4090",    ram: "32 GB", storage: "2 TB SSD",    cpuScore: 82, gpuScore: 98, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 49,
    brand: "ASUS",
    name: "ASUS TUF Gaming A17 (2022/2023)",
    variants: [
      { label: "Ryzen 7 6800H / RTX 3060 / 8 GB / 512 GB SSD",    cpu: "AMD Ryzen 7 6800H",   gpu: "NVIDIA RTX 3060",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 70, gpuScore: 65, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 7745HX / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 7745HX",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 78, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },

  
  {
    id: 50,
    brand: "MSI",
    name: "MSI GS66 Stealth (2021/2022)",
    variants: [
      { label: "i7-11800H / RTX 3070 / 32 GB / 1 TB SSD",   cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3070",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 70, gpuScore: 75, ramScore: 92, storeScore: 78 },
      { label: "i9-12900H / RTX 3080 / 32 GB / 2 TB SSD",   cpu: "Intel Core i9-12900H",  gpu: "NVIDIA RTX 3080",  ram: "32 GB", storage: "2 TB SSD",    cpuScore: 88, gpuScore: 82, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 51,
    brand: "MSI",
    name: "MSI Pulse GL66 / GL76 (2022)",
    variants: [
      { label: "i7-12700H / RTX 3060 / 16 GB / 512 GB SSD",    cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 80, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 52,
    brand: "MSI",
    name: "MSI Sword 15 / 17 (2022/2023)",
    variants: [
      { label: "i7-12700H / RTX 3060 / 8 GB / 512 GB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3060",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 80, gpuScore: 65, ramScore: 53, storeScore: 60 },
      { label: "i7-12700H / RTX 3070 / 16 GB / 1 TB SSD",    cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 75, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 53,
    brand: "MSI",
    name: "MSI Cyborg 15 (2023/2024)",
    variants: [
      { label: "i5-12450H / RTX 4050 / 8 GB / 512 GB SSD",    cpu: "Intel Core i5-12450H",  gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 55, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "i7-13620H / RTX 4060 / 16 GB / 512 GB SSD",   cpu: "Intel Core i7-13620H",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 75, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 54,
    brand: "MSI",
    name: "MSI Creator Z16 (2021/2022)",
    variants: [
      { label: "i7-11800H / RTX 3060 / 16 GB / 1 TB SSD",     cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3060",    ram: "16 GB", storage: "1 TB SSD",    cpuScore: 70, gpuScore: 65, ramScore: 73, storeScore: 78 },
      { label: "i9-12900H / RTX 3070 Ti / 32 GB / 2 TB SSD",  cpu: "Intel Core i9-12900H",  gpu: "NVIDIA RTX 3070 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 88, gpuScore: 78, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 55,
    brand: "MSI",
    name: "MSI Raider GE67 HX (2023/2024)",
    variants: [
      { label: "i9-13980HX / RTX 4080 / 32 GB / 2 TB SSD",   cpu: "Intel Core i9-13980HX",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",    cpuScore: 94, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "i9-14900HX / RTX 4090 / 64 GB / 4 TB SSD",   cpu: "Intel Core i9-14900HX",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",    cpuScore: 95, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },
  {
    id: 56,
    brand: "MSI",
    name: "MSI Thin GF65 (2021)",
    variants: [
      { label: "i7-11800H / RTX 3060 / 8 GB / 512 GB SSD",  cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3060",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 70, gpuScore: 65, ramScore: 53, storeScore: 60 },
    ],
  },

  
  {
    id: 57,
    brand: "Lenovo",
    name: "Lenovo Legion 5i Gen 7 (2022)",
    variants: [
      { label: "i5-12500H / RTX 3060 / 16 GB / 512 GB SSD",    cpu: "Intel Core i5-12500H",  gpu: "NVIDIA RTX 3060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 58,
    brand: "Lenovo",
    name: "Lenovo Legion 5 Pro Gen 7 / Gen 8 (2022/2023)",
    variants: [
      { label: "Ryzen 7 6800H / RTX 3070 Ti / 16 GB / 1 TB SSD",  cpu: "AMD Ryzen 7 6800H",     gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 70, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i5-13500HX / RTX 4060 / 16 GB / 512 GB SSD",      cpu: "Intel Core i5-13500HX", gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 68, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 9 7945HX / RTX 4070 / 32 GB / 1 TB SSD",    cpu: "AMD Ryzen 9 7945HX",    gpu: "NVIDIA RTX 4070",    ram: "32 GB", storage: "1 TB SSD",    cpuScore: 90, gpuScore: 83, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 59,
    brand: "Lenovo",
    name: "Lenovo Legion 7 Gen 7 / Gen 8 (2022/2023)",
    variants: [
      { label: "Ryzen 9 6900HX / RTX 3080 Ti / 32 GB / 1 TB SSD",  cpu: "AMD Ryzen 9 6900HX",    gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "1 TB SSD",    cpuScore: 78, gpuScore: 87, ramScore: 92, storeScore: 78 },
      { label: "i7-13700HX / RTX 4070 Ti / 32 GB / 1 TB SSD",      cpu: "Intel Core i7-13700HX", gpu: "NVIDIA RTX 4070 Ti", ram: "32 GB", storage: "1 TB SSD",    cpuScore: 83, gpuScore: 89, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 60,
    brand: "Lenovo",
    name: "Lenovo Legion Pro 7 Gen 8 (2023/2024)",
    variants: [
      { label: "i9-13900HX / RTX 4080 / 32 GB / 1 TB SSD",   cpu: "Intel Core i9-13900HX",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 78 },
      { label: "i9-13900HX / RTX 4090 / 32 GB / 2 TB SSD",   cpu: "Intel Core i9-13900HX",  gpu: "NVIDIA RTX 4090",  ram: "32 GB", storage: "2 TB SSD",    cpuScore: 94, gpuScore: 98, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 61,
    brand: "Lenovo",
    name: "Lenovo Legion Slim 5i Gen 8 (2023)",
    variants: [
      { label: "i5-13500H / RTX 4050 / 16 GB / 512 GB SSD",  cpu: "Intel Core i5-13500H",  gpu: "NVIDIA RTX 4050",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 67, gpuScore: 62, ramScore: 73, storeScore: 60 },
      { label: "i7-13700H / RTX 4060 / 16 GB / 1 TB SSD",    cpu: "Intel Core i7-13700H",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 72, ramScore: 73, storeScore: 78 },
    ],
  },

  
  {
    id: 62,
    brand: "Acer",
    name: "Acer Predator Helios 300 (2021/2022/2023)",
    variants: [
      { label: "i7-11800H / RTX 3060 / 16 GB / 512 GB SSD",    cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 70, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i7-13700HX / RTX 4060 / 16 GB / 512 GB SSD",   cpu: "Intel Core i7-13700HX", gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "512 GB SSD",  cpuScore: 83, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 63,
    brand: "Acer",
    name: "Acer Predator Triton 300 SE (2021/2022)",
    variants: [
      { label: "i7-11375H / RTX 3060 / 16 GB / 512 GB SSD",  cpu: "Intel Core i7-11375H",  gpu: "NVIDIA RTX 3060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 61, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "i7-12700H / RTX 3060 / 16 GB / 512 GB SSD",  cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 80, gpuScore: 65, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 64,
    brand: "Acer",
    name: "Acer Predator Triton 500 SE (2022)",
    variants: [
      { label: "i7-12700H / RTX 3080 Ti / 16 GB / 1 TB SSD",  cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3080 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 87, ramScore: 73, storeScore: 78 },
      { label: "i9-12900H / RTX 3080 Ti / 32 GB / 2 TB SSD",  cpu: "Intel Core i9-12900H",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 88, gpuScore: 87, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 65,
    brand: "Acer",
    name: "Acer Nitro 16 (2023/2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8 GB / 512 GB SSD",   cpu: "AMD Ryzen 5 7535HS",  gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 63, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "Ryzen 7 7745HX / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 7745HX",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 78, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },
  {
    id: 66,
    brand: "Acer",
    name: "Acer Nitro V 16 (2024)",
    variants: [
      { label: "Ryzen 5 7535HS / RTX 4050 / 8 GB / 512 GB SSD",  cpu: "AMD Ryzen 5 7535HS",   gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 63, gpuScore: 62, ramScore: 53, storeScore: 60 },
      { label: "i5-13420H / RTX 4050 / 16 GB / 512 GB SSD",      cpu: "Intel Core i5-13420H", gpu: "NVIDIA RTX 4050",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 60, gpuScore: 62, ramScore: 73, storeScore: 60 },
    ],
  },

  
  {
    id: 67,
    brand: "HP",
    name: "HP Omen 17 (2022/2023/2024)",
    variants: [
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i9-13900HX / RTX 4080 / 32 GB / 2 TB SSD",     cpu: "Intel Core i9-13900HX", gpu: "NVIDIA RTX 4080",    ram: "32 GB", storage: "2 TB SSD",    cpuScore: 93, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 68,
    brand: "HP",
    name: "HP Omen 16 (2022/2023)",
    variants: [
      { label: "i7-12700H / RTX 3060 / 16 GB / 512 GB SSD",    cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 80, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 7 7745HX / RTX 4070 / 16 GB / 1 TB SSD", cpu: "AMD Ryzen 7 7745HX",    gpu: "NVIDIA RTX 4070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 78, gpuScore: 83, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 69,
    brand: "HP",
    name: "HP Victus 15 (2022/2023/2024)",
    variants: [
      { label: "i5-12450H / GTX 1650 / 8 GB / 256 GB SSD",       cpu: "Intel Core i5-12450H",  gpu: "NVIDIA GTX 1650",  ram: "8 GB",  storage: "256 GB SSD",  cpuScore: 55, gpuScore: 40, ramScore: 53, storeScore: 50 },
      { label: "Ryzen 5 7535HS / RTX 4050 / 8 GB / 512 GB SSD",  cpu: "AMD Ryzen 5 7535HS",    gpu: "NVIDIA RTX 4050",  ram: "8 GB",  storage: "512 GB SSD",  cpuScore: 63, gpuScore: 62, ramScore: 53, storeScore: 60 },
    ],
  },
  {
    id: 70,
    brand: "HP",
    name: "HP Victus 16 (2022/2023)",
    variants: [
      { label: "i5-12500H / RTX 3060 / 16 GB / 512 GB SSD",       cpu: "Intel Core i5-12500H",  gpu: "NVIDIA RTX 3060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 7 7745HX / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 7745HX",    gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 78, gpuScore: 72, ramScore: 73, storeScore: 60 },
    ],
  },

  
  {
    id: 71,
    brand: "Dell",
    name: "Dell Alienware m15 R5 / R6 (2021/2022)",
    variants: [
      { label: "Ryzen 7 5800H / RTX 3060 / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 5800H",    gpu: "NVIDIA RTX 3060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 65, gpuScore: 65, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 9 5900HX / RTX 3070 / 16 GB / 1 TB SSD",   cpu: "AMD Ryzen 9 5900HX",   gpu: "NVIDIA RTX 3070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 72, gpuScore: 75, ramScore: 73, storeScore: 78 },
      { label: "i7-11800H / RTX 3080 / 32 GB / 1 TB SSD",        cpu: "Intel Core i7-11800H", gpu: "NVIDIA RTX 3080",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 70, gpuScore: 82, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 72,
    brand: "Dell",
    name: "Dell Alienware x15 R2 (2022)",
    variants: [
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i9-12900H / RTX 3080 Ti / 32 GB / 2 TB SSD",   cpu: "Intel Core i9-12900H",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 88, gpuScore: 87, ramScore: 92, storeScore: 95 },
    ],
  },
  {
    id: 73,
    brand: "Dell",
    name: "Dell Alienware m18 (2023/2024)",
    variants: [
      { label: "i9-13980HX / RTX 4080 / 32 GB / 2 TB SSD",   cpu: "Intel Core i9-13980HX",  gpu: "NVIDIA RTX 4080",  ram: "32 GB", storage: "2 TB SSD",    cpuScore: 94, gpuScore: 94, ramScore: 92, storeScore: 95 },
      { label: "i9-13980HX / RTX 4090 / 64 GB / 4 TB SSD",   cpu: "Intel Core i9-13980HX",  gpu: "NVIDIA RTX 4090",  ram: "64 GB", storage: "4 TB SSD",    cpuScore: 95, gpuScore: 98, ramScore: 98, storeScore: 99 },
    ],
  },
  {
    id: 74,
    brand: "Dell",
    name: "Dell G14 (2024)",
    variants: [
      { label: "Ryzen 7 8845HS / RTX 4060 / 16 GB / 512 GB SSD",  cpu: "AMD Ryzen 7 8845HS",  gpu: "NVIDIA RTX 4060",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 82, gpuScore: 72, ramScore: 73, storeScore: 60 },
      { label: "Ryzen 9 8945HS / RTX 4070 / 32 GB / 1 TB SSD",    cpu: "AMD Ryzen 9 8945HS",  gpu: "NVIDIA RTX 4070",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 90, gpuScore: 83, ramScore: 92, storeScore: 78 },
    ],
  },

  
  {
    id: 75,
    brand: "Razer",
    name: "Razer Blade 15 (2020/2021)",
    variants: [
      { label: "i7-10875H / RTX 2070 Super / 16 GB / 512 GB SSD",  cpu: "Intel Core i7-10875H",  gpu: "NVIDIA RTX 2070 Super", ram: "16 GB", storage: "512 GB SSD",  cpuScore: 48, gpuScore: 60, ramScore: 73, storeScore: 60 },
      { label: "i7-10875H / RTX 2080 Super / 16 GB / 1 TB SSD",    cpu: "Intel Core i7-10875H",  gpu: "NVIDIA RTX 2080 Super", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 48, gpuScore: 70, ramScore: 73, storeScore: 78 },
    ],
  },
  {
    id: 76,
    brand: "Razer",
    name: "Razer Blade 15 (2021/2022)",
    variants: [
      { label: "i7-11800H / RTX 3070 / 16 GB / 1 TB SSD",  cpu: "Intel Core i7-11800H",  gpu: "NVIDIA RTX 3070",  ram: "16 GB", storage: "1 TB SSD",    cpuScore: 70, gpuScore: 75, ramScore: 73, storeScore: 78 },
      { label: "i9-11900H / RTX 3080 / 32 GB / 1 TB SSD",  cpu: "Intel Core i9-11900H",  gpu: "NVIDIA RTX 3080",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 82, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 77,
    brand: "Razer",
    name: "Razer Blade 15 (2022/2023)",
    variants: [
      { label: "i7-12800H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12800H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 82, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i9-12900H / RTX 3080 Ti / 32 GB / 1 TB SSD",   cpu: "Intel Core i9-12900H",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "1 TB SSD",    cpuScore: 88, gpuScore: 87, ramScore: 92, storeScore: 78 },
      { label: "i9-13950HX / RTX 4070 / 16 GB / 1 TB SSD",     cpu: "Intel Core i9-13950HX", gpu: "NVIDIA RTX 4070",    ram: "16 GB", storage: "1 TB SSD",    cpuScore: 93, gpuScore: 83, ramScore: 73, storeScore: 78 },
      { label: "i9-13950HX / RTX 4080 / 32 GB / 2 TB SSD",     cpu: "Intel Core i9-13950HX", gpu: "NVIDIA RTX 4080",    ram: "32 GB", storage: "2 TB SSD",    cpuScore: 94, gpuScore: 94, ramScore: 92, storeScore: 95 },
    ],
  },

  
  {
    id: 78,
    brand: "Gigabyte",
    name: "Gigabyte AORUS 15 (2022/2023)",
    variants: [
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",   cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
      { label: "i7-13700H / RTX 4060 / 16 GB / 1 TB SSD",      cpu: "Intel Core i7-13700H",  gpu: "NVIDIA RTX 4060",    ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 72, ramScore: 73, storeScore: 78 },
      { label: "i9-13980HX / RTX 4070 / 32 GB / 1 TB SSD",     cpu: "Intel Core i9-13980HX", gpu: "NVIDIA RTX 4070",    ram: "32 GB", storage: "1 TB SSD",    cpuScore: 94, gpuScore: 83, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 79,
    brand: "Gigabyte",
    name: "Gigabyte AORUS 5 SE (2022)",
    variants: [
      { label: "i7-12700H / RTX 3070 Ti / 16 GB / 1 TB SSD",  cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3070 Ti", ram: "16 GB", storage: "1 TB SSD",    cpuScore: 80, gpuScore: 78, ramScore: 73, storeScore: 78 },
    ],
  },

  
  {
    id: 80,
    brand: "Samsung",
    name: "Samsung Galaxy Book3 Ultra (2023)",
    variants: [
      { label: "i7-13700H / RTX 4050 / 16 GB / 512 GB SSD",  cpu: "Intel Core i7-13700H",  gpu: "NVIDIA RTX 4050",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 80, gpuScore: 62, ramScore: 73, storeScore: 60 },
      { label: "i9-13900H / RTX 4070 / 32 GB / 1 TB SSD",    cpu: "Intel Core i9-13900H",  gpu: "NVIDIA RTX 4070",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 86, gpuScore: 83, ramScore: 92, storeScore: 78 },
    ],
  },
  {
    id: 81,
    brand: "Samsung",
    name: "Samsung Galaxy Book4 Ultra (2024)",
    variants: [
      { label: "Core Ultra 7 155H / RTX 4050 / 16 GB / 512 GB SSD",  cpu: "Intel Core Ultra 7 155H",  gpu: "NVIDIA RTX 4050",  ram: "16 GB", storage: "512 GB SSD",  cpuScore: 82, gpuScore: 62, ramScore: 73, storeScore: 60 },
      { label: "Core Ultra 9 185H / RTX 4070 / 32 GB / 1 TB SSD",    cpu: "Intel Core Ultra 9 185H",  gpu: "NVIDIA RTX 4070",  ram: "32 GB", storage: "1 TB SSD",    cpuScore: 91, gpuScore: 83, ramScore: 92, storeScore: 78 },
    ],
  },

  
  {
    id: 82,
    brand: "LG",
    name: "LG UltraGear 17G90Q (2022)",
    variants: [
      { label: "i7-12700H / RTX 3080 Ti / 16 GB / 2 TB SSD",  cpu: "Intel Core i7-12700H",  gpu: "NVIDIA RTX 3080 Ti", ram: "16 GB", storage: "2 TB SSD",    cpuScore: 80, gpuScore: 87, ramScore: 73, storeScore: 95 },
      { label: "i9-12900H / RTX 3080 Ti / 32 GB / 2 TB SSD",  cpu: "Intel Core i9-12900H",  gpu: "NVIDIA RTX 3080 Ti", ram: "32 GB", storage: "2 TB SSD",    cpuScore: 88, gpuScore: 87, ramScore: 92, storeScore: 95 },
    ],
  },

];






window.addEventListener("DOMContentLoaded", function() {

  
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
