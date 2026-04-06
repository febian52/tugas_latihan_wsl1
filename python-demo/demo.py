import requests 
response = requests.get('https://api.github.com') 
print(f"Status: {response.status_code}") 
