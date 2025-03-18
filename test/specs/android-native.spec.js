describe('Android native feature', () => {

    it('Acess an Activity directly', async () => {
        //start the activity - (package, package.activity)
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.HelloWorld');

        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Activity/Hello World"]')).toBeDisplayed();
    });

    it('Dialog/Alert testing', async () => {

        //CONTINUAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRRRRRR
        //go to page
        await driver.startActivity()
        
    });
    
});