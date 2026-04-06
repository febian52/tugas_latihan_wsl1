import json
from kalkulasi import hitung_rata_rata, rekap_status

def main():
    # 1. Baca data dari file JSON
    try:
        with open('data.json', 'r') as file:
            sensors = json.load(file)
    except FileNotFoundError:
        print("Error: File data.json tidak ditemukan!")
        return

    # 2. Desain Header Laporan
    print("\nSistem Monitoring IoT Industri - Python")
    print("==============================================================")
    print("                 LAPORAN DATA SENSOR PABRIK")
    print("==============================================================")

    # 3. Cetak Baris per Baris dengan format rapi (f-string formatting)
    for s in sensors:
        # {s['nama']:<20} artinya string diratakan ke kiri dengan lebar 20 karakter
        print(f"[{s['id']}] {s['nama']:<20} | Nilai: {s['nilai']:<5} | Status: {s['status']}")

    print("==============================================================")

    # 4. Cetak Statistik Hasil Kalkulasi
    rata_rata = hitung_rata_rata(sensors)
    status_count = rekap_status(sensors)

    print(f"Rata-rata Nilai Sensor : {rata_rata}")
    print("--------------------------------------------------------------")
    print(f"Normal                 : {status_count['Normal']} unit")
    print(f"Warning                : {status_count['Warning']} unit")
    print(f"Critical               : {status_count['Critical']} unit")
    print("==============================================================\n")

if __name__ == "__main__":
    main()
