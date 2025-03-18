describe('Android Elements Tests', ()=> {
    it('Find element by acessibility id', async () => {
        //find element
        const appOption = $('~App')
        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find Element by Class', async () => {
        const className = await $('android.widget.TextView')

        console.log(await className.getText())  

        await expect(className).toHaveText("API Demos")   
    })

    xit('Find Elements by Xpath', async () => {
        // x-path -> ('//tagname[@attribute=value]')
        // pode ser usado como tagname o *. * é um curinga que significa qualquer tag. ficaria:
        // ('//*[@attribute=value]')

        //find by content description
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class - assertion
        const textAssertion = await $('//android.widget.TextView')

        await expect(textAssertion).toHaveText("You selected: 1 , Command two")
    });

    it('Find elements by UIAutomator', async () => {
        //find by text contains

        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('verify if the app is hybrid', async () => {
        
        //verify if the app is hybrid -> that is not a test!!!! 
        // just for me to know!
        const contexts = await driver.getContexts();
        console.log(contexts);
    });

    it('Find multiple elements', async () => {
        // LIsts
        const expectedList = ['API Demos',"Acess'ibility", 'Acessibility', 'Animation', 
            'App', 'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'];

        const actualList = [];

        //find element
        const textList = await $$('android.widget.TextView');

        //add at list
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        //assertion
        await expect(actualList).toEqual(expectedList)
    });

    it('write in a text field', async () => {
        const text = $('~Views')
        await text.click();

        const autoComplete = $('~Auto Complete')
        await autoComplete.click();

        const screenTop = $('~1. Screen Top')
        await screenTop.click();

        const countryField = $('android.widget.AutoCompleteTextView')
        const textEntry = 'Brazil'
        await countryField.setValue(textEntry)

        //assertion
        await expect(countryField).toHaveText(textEntry)

    });

    it.only('write in a text field - other way', async () => {
        
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const countryField = $('android.widget.AutoCompleteTextView')
        const textEntry = 'Brazil'
        await $('android.widget.AutoCompleteTextView').setValue(textEntry)

        //assertion
        await expect(countryField).toHaveText(textEntry)
    });

})