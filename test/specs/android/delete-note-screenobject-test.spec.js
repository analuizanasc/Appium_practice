import fs from 'fs';
import AddNoteScreen from '../../screenobjects/android/add-note.screen';
import EditNoteScreen from '../../screenobjects/android/edit-note.screen';
import { $, $$, expect, driver } from '@wdio/globals';

describe('note app testing', () => {

    before(async () => {
        console.log('BEFORE HOOK')

        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote('Testando 1,2,3')
    })
    after(async () => {
        console.log('AFTER HOOK - TESTE DONE!')
    })

    beforeEach(async () => {
        console.log('BEFORE EACH HOOK')
        await driver.startRecordingScreen();
    })

    it('deleting note', async () => {
        await AddNoteScreen.noteTitle.click();
        await EditNoteScreen.moreBtn.click()
        await EditNoteScreen.deleteBtn.click();

        //confirme delete
        await driver.acceptAlert();
        await EditNoteScreen.navIcon.click();
        await EditNoteScreen.trashCan.click();

        //screenshot
        await driver.saveScreenshot('./test/evidencias/lixeiraEvidencia.png')

        //asertion
        await expect(EditNoteScreen.noteTitle).toHaveText('Testando 1,2,3');
        await driver.pause(3000);
    });

    afterEach(async () => {
        console.log('AFTER EACH HOOK')
        //video 
        const videoBase64 = await driver.stopRecordingScreen();
        fs.writeFileSync('./test/evidencias/LixeiraVideo.mp4', videoBase64, 'base64');
    })

})