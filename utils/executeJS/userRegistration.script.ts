export class UserRegistrationScripts {

    registerUserWithScript(data: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    telephone: string,
    acceptTermsAndConditions: boolean,
}){
        browser.url('/index.php?route=account/register');

        const user = new function(){
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.email = data.email;
            this.password = data.password;
            this.telephone = data.telephone;
            this.acceptTermsAndConditions= data.acceptTermsAndConditions;
        };

        browser.execute(function (_user) {
            console.dir(_user);

            document.querySelector('input#input-firstname').value = _user.firstName;
            document.querySelector('input#input-lastname').value = _user.lastName;
            document.querySelector('input#input-email').value = _user.email;
            document.querySelector('input#input-telephone').value = _user.telephone;
            document.querySelector('input#input-password').value = _user.password;
            document.querySelector('input#input-confirm').value = _user.password;

            if (_user.acceptTermsAndConditions) {
            // @ts-ignore
                document.querySelector('input[type="checkbox"][name="agree"]').click();
            }
            // @ts-ignore
            document.querySelector('input[type="submit"][value="Continue"]').click();

        }, user);

        console.log('User was created: ', user);

    }

}
