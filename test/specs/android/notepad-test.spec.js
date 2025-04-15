import fs from 'fs';

describe('note app testing', () => {
    it('skip tutorial', async () => {
        await driver.startRecordingScreen();
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toBeDisplayed();
        //await expect($('~Home')).toBeDisplayed();
    });

    it('create a note', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]').click();
        await $('android=new UiSelector().text("Text")').click();
        //await driver.startActivity('com.socialnmobile.dictapps.notepad.color.note','com.socialnmobile.colornote.activity.NoteEditor') 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue('Testando digitação do app')
        //verificar se teclado está aberto //FAZERRRRRRRR

        // ACEPT type
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]')).toBeDisplayed()
        //VERIFICAR SE DATA VISUALIZADA É IGUAL A DATA CRIADA
        //back to home - ONE WAY:
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();
        
        //create note
        //await $('*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        //text
        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue('segunda nota aqui')
        //back to home
        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click()
        const textoNotaLista = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        //verificar parte de texto - FAZEEEEEERRRRRRRR
        await expect(textoNotaLista).toHaveText('Testando digitação do app');
        await driver.pause(3000);
    });

    it('deleting note', async () => {
        const textoNotaLista = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        textoNotaLista.click();
        await $('~More').click()
        await $('android=new UiSelector().text("Delete")').click();
        //confirme delete
        await driver.acceptAlert();
        //await $('android=new UiSelector().resourceId("android:id/button1")').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('android= new UiSelector().text("Trash Can")').click();

        const tashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        await driver.saveScreenshot('./test/evidencias/lixeiraEvidencia.png')
        await expect (tashCanItem).toHaveText('Testando digitação do app');
        await driver.pause(3000);
        
        const videoBase64 = await driver.stopRecordingScreen();
        fs.writeFileSync('./test/evidencias/LixeiraVideo.mp4', videoBase64, 'base64');


    });
 })