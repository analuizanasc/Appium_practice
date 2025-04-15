import AddNoteScreen from "./add-note.screen"

class EditNoteScreen {

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.screenNote).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading) {
        await AddNoteScreen.screenNote.click();
        await AddNoteScreen.textNoteOption.click();
        //text note
        await AddNoteScreen.editNote.setValue(noteHeading)

        // save note
        await AddNoteScreen.saveNote();

        //verificar texto 
        await expect(await AddNoteScreen.noteTitle).toHaveText(noteHeading);
        await driver.pause(3000);
    }
    get moreBtn() {
        return $('~More')
    }
    get deleteBtn() {
        return $('android=new UiSelector().text("Delete")')
    }
    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
    get trashCan() {
        return $('android= new UiSelector().text("Trash Can")')
    }
    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

}

export default new EditNoteScreen(); 