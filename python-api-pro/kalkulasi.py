def hitung_rata_rata(data):
    if not data:
        return 0
    total = sum(item["nilai"] for item in data)
    return round(total / len(data), 2)

def rekap_status(data):
    # Siapkan wadah untuk menghitung jumlah status
    rekap = {"Normal": 0, "Warning": 0, "Critical": 0}
    
    for item in data:
        status = item["status"]
        if status in rekap:
            rekap[status] += 1
            
    return rekap
