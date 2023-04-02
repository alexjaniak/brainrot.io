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
driver.get('https://www.youtube.com/shorts/')
#driver.maximize_window()
#gg = driver.find_element(By.CLASS_NAME, "tiktok-1anes8e-StyledIcon")
#l = driver.find_element(By.CLASS_NAME, "xgplayer-container xgplayer xgplayer-pc no-controls xgplayer-playing")
time.sleep(1)
names = []
name1 = ""
for _ in range(50):
    name1 = driver.current_url
    name1 = name1.split("/")[4]
    names.append(name1)
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.ID, "navigation-button-down"))).click()
    time.sleep(1)
import json

with open('tiktoks.txt', 'w') as filehandle:
    json.dump(names, filehandle)

