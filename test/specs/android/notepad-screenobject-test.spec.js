import fs from 'fs';
import AddNoteScreen from '../../screenobjects/android/add-note.screen';
import EditNoteScreen from '../../screenobjects/android/edit-note.screen';

describe('note app testing', () => {
    it('skip tutorial', async () => {
        await driver.startRecordingScreen();
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.screenNote).toBeDisplayed();
    });

    it('create a note', async () => {
        await AddNoteScreen.screenNote.click();
        await AddNoteScreen.textNoteOption.click();
        //text note
        await AddNoteScreen.editNote.setValue('Testando digitação do app')

        // save note
        //await AddNoteScreen.backBtn.click();
        //await AddNoteScreen.backBtn.click();
        await AddNoteScreen.saveNote();

         //verificar texto 
        await expect(await AddNoteScreen.noteTitle).toHaveText('Testando digitação do app');
        await driver.pause(3000);
    });

    it('deleting note', async () => {
        AddNoteScreen.noteTitle.click();
        await EditNoteScreen.moreBtn.click()
        await EditNoteScreen.deleteBtn.click();
        //confirme delete
        await driver.acceptAlert();
        await EditNoteScreen.navIcon.click();
        await EditNoteScreen.trashCan.click();

        const tashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        await driver.saveScreenshot('./test/evidencias/lixeiraEvidencia.png')
        await expect (EditNoteScreen.noteTitle).toHaveText('Testando digitação do app');
        await driver.pause(3000);
        
        const videoBase64 = await driver.stopRecordingScreen();
        fs.writeFileSync('./test/evidencias/LixeiraVideo.mp4', videoBase64, 'base64');


    });
 })