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

-dialog não tem activity. Tem de ir para página anterior e executar ação que exibe dialog

-run other apk ou specs... always go to wdio.conf.js

- setvalue() -> clear and type
- addvalue() -> type
- driver.back(); -> back from device

- gravar vídeo :  
await driver.startRecordingScreen();       
const videoBase64 = await driver.stopRecordingScreen();
fs.writeFileSync('./test/evidencias/LixeiraVideo.mp4', videoBase64, 'base64');

-printscreen:
await driver.saveScreenshot('./test/evidencias/lixeiraEvidencia.png')

-autocompletion to wdio:
import {$, $$, expect, driver} from '@wdio/globals'; //at the beggining of the file

--INSTALAR NOVAMENTE ESLINT