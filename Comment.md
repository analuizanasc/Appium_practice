- Usar acessibility ID - add no projeto - mais confiável e alterações 
- usar class - 

- WEBDRIVER IO:
- usar multiples elements - $$
- usar single element - $

- The error  "Pixel Launcher isn't responding" happend during test . The reason: the emulator it wasn´t answring. The solution: close the emulator and open it.

- It´s possible to acess a screen directly from the activity . Advantage: save time + helps test stabilization
- appPackage: full name of the app - official
- appActivity: certain screen/functionality of the aplication

- to change the spec you want to run the tests, change it on the wdio.conf.js (ex.: './test/specs/android-native*.js')

-driver.pause(3000); for pause test. Important: 1000ms - 1seg