const userObj = {name: 'abby.faker@gmail.com', password: 'faker2021'};

export function shared(user: any = userObj) {
    describe('User', function () {
        it('can login', function () {
            browser.url('https://app.simplenote.com/login/');
            browser.pause(2000);
            $('#email').setValue(userObj.name);
            browser.pause(1000);
            $('#password').setValue(userObj.password);
            browser.pause(1000);
            $(' input[type="submit"][value="Log in"]').click();
            browser.pause(4000);
            const allTitles = $('div.notes-title');
            allTitles.waitForExist({ timeout: 5000 });
        });
    });


    const x = () => {
        console.log('Kerem');
    };

    setTimeout(x, 3000);
}
