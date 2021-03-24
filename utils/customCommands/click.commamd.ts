export const registerClickFunction = () => {
    browser.overwriteCommand("click", function (origClick, wait = true) {
        // `this` is return value of $(selector)
        if (wait) {
            console.log('Waiting for the element!');
            expect(this).toBeDisplayed();
        }
        console.log('Clicking on the element');
        origClick();
    } as any, true);
};
