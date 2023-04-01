import webdriver from selenium;
import By from selenium.webdriver.common.by; 
import WebDriverWait from selenium.webdriver.support.ui; 
import expected_conditions from selenium.webdriver.support; 
import webdriver from selenium;
import Service from selenium.webdriver.chrome.service; 
import ChromeDriverManager from webdriver_manager.chrome; 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }

//set chromodriver.exe path
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()));
driver.get('https://www.tiktok.com/foryou/?lang=en');
WebDriverWait(driver, 20).until(expected_conditions.element_to_be_clickable((By.CLASS_NAME, "tiktok-unxpj7-DivCloseWrapper"))).click();
print("Page title is: ");
sleep(1000);
WebDriverWait(driver, 20).until(expected_conditions.element_to_be_clickable((By.CLASS_NAME, "tiktok-kd7foj-DivVideoWrapper"))).click();
sleep(1000);
names = new Queue();
let name1 = driver.find_element(By.CLASS_NAME, "tiktok-1v8b11s-PCopyLinkText").text;
name1 = name1.split("/")[5].split("?")[0];
names.enqueue(name1);
for (let i = 0; i < 10; i++) {
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, "tiktok-1sltbs0-ButtonBasicButtonContainer-StyledVideoSwitch"))).click()
    time.sleep(.5)
    name1 = driver.find_element(By.CLASS_NAME, "tiktok-1v8b11s-PCopyLinkText").text
    name1 = name1.split("/")[5].split("?")[0]
    names.enqueue(name1)
}
console.log(names)
