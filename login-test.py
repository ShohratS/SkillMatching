from selenium import webdriver


driver = webdriver.Chrome("/usr/local/bin/chromedriver")


driver.get("https://seahorse-app-pi3di.ondigitalocean.app/login")


login_form = driver.find_element_by_class_name("auth-form.login")


email_input = login_form.find_element_by_xpath("//input[@type='email']")
email_input.send_keys("example@email.com")
password_input = login_form.find_element_by_xpath("//input[@type='password']")
password_input.send_keys("password123")


login_button = login_form.find_element_by_xpath("//button[@type='button']")
login_button.click()

driver.quit()
