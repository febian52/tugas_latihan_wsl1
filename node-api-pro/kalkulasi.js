// Fungsi mencari rata-rata
function hitungRataRata(data) {
    const total = data.reduce((sum, item) => sum + item.nilai, 0);
    return (total / data.length).toFixed(2);
}

// Fungsi menghitung jumlah status
function rekapStatus(data) {
    const rekap = { Normal: 0, Warning: 0, Critical: 0 };
    data.forEach(item => {
        if (rekap[item.status] !== undefined) {
            rekap[item.status]++;
        }
    });
    return rekap;
}

module.exports = { hitungRataRata, rekapStatus };
