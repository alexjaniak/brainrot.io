from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import re


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
## open selenium URL in chrome browser
driver.get('https://www.tiktok.com/foryou/?lang=en')
#gg = driver.find_element(By.CLASS_NAME, "tiktok-1anes8e-StyledIcon")
#l = driver.find_element(By.CLASS_NAME, "xgplayer-container xgplayer xgplayer-pc no-controls xgplayer-playing")
WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, "tiktok-unxpj7-DivCloseWrapper"))).click()
print("Page title is: ")
time.sleep(1)
WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, "tiktok-kd7foj-DivVideoWrapper"))).click()
time.sleep(3)
names = []
name1 = driver.find_element(By.CLASS_NAME, "tiktok-1v8b11s-PCopyLinkText").text
name1 = name1.split("/")[5].split("?")[0]
names.append(name1)
for _ in range(50):
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, "tiktok-1sltbs0-ButtonBasicButtonContainer-StyledVideoSwitch"))).click()
    time.sleep(.5)
    name1 = driver.find_element(By.CLASS_NAME, "tiktok-1v8b11s-PCopyLinkText").text
    name1 = name1.split("/")[5].split("?")[0]
    names.append(name1)
print(names)

import json

with open('tiktoks.txt', 'w') as filehandle:
    json.dump(names, filehandle)
