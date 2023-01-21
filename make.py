import os
import sys
import re

print("[*] GPH-frontend docker making program")
ver = ""
try:
    with open('./version.txt', 'r') as f:
        ver = f.read()
except:
    with open('./version.txt', 'w') as f:
        ver = "0.0.1"
        f.write(ver)
print("[*] Current Version: "+ver)
print("")
print("[*] Version Example : 0.0.1, 1.2.3, 3.2.3, 4.5.2, ...")
p = re.compile('[0-9]+[.][0-9]+[.][0-9]+')
version = ""
while True:
    v = input("[*] Enter the Version : ")
    if re.match(p, v):
        version = v
        break
with open('./version.txt', 'w') as f:
    f.write(version)
os.system("docker build -t brighthonor/gph-frontend:"+version+" .")
os.system("docker build -t brighthonor/gph-frontend:latest .")
os.system("docker push brighthonor/gph-frontend:"+version)
os.system("docker push brighthonor/gph-frontend:latest")
