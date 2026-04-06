const fs = require('fs');
const { hitungRataRata, rekapStatus } = require('./kalkulasi');

// 1. Baca data dari file JSON
const rawData = fs.readFileSync('data.json');
const sensors = JSON.parse(rawData);

// 2. Desain Header Laporan
console.log("\nSistem Monitoring IoT Industri - Node.js");
console.log("==============================================================");
console.log("                 LAPORAN DATA SENSOR");
console.log("==============================================================");

// 3. Cetak Baris per Baris dengan format rapi (padEnd untuk spasi otomatis)
sensors.forEach(s => {
    const namaPad = s.nama.padEnd(20);
    const nilaiPad = s.nilai.toString().padEnd(5);
    console.log(`[${s.id}] ${namaPad} | Nilai: ${nilaiPad} | Status: ${s.status}`);
});

console.log("==============================================================");

// 4. Cetak Statistik Hasil Kalkulasi
const rataRata = hitungRataRata(sensors);
const statusCount = rekapStatus(sensors);

console.log(`Rata-rata Nilai Sensor : ${rataRata}`);
console.log("--------------------------------------------------------------");
console.log(`Normal                 : ${statusCount.Normal} unit`);
console.log(`Warning                : ${statusCount.Warning} unit`);
console.log(`Critical               : ${statusCount.Critical} unit`);
console.log("==============================================================\n");
