class AddNoteScreen {
    get skipBtn() {
        return $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }
    get screenNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')
    }
    get textNoteOption() {
        return $('android=new UiSelector().text("Text")')
    }
    get editNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }
    get backBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]')
    }
    get noteDateTime() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]')
    }
    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    async saveNote() {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click()
        await driver.back();
    }
}

export default new AddNoteScreen();

