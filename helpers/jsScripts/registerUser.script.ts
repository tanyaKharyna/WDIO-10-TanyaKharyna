export function registerUserWithScript(data: {
    firstName: string;
    lastName: string,
    email: string,
    password: string,
    telephone: string,
    acceptTermsAndConditions: boolean}
){
    const user:any = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        telephone: data.telephone,
        acceptTermsAndConditions: data.acceptTermsAndConditions
    };

    browser.execute(function (_user) {
        console.dir(_user);

        document.querySelector('input#input-firstname').value = _user.firstName;
        document.querySelector('input#input-lastname').value = _user.lastName;
        document.querySelector('input#input-email').value = _user.email;
        document.querySelector('input#input-telephone').value = _user.telephone;
        document.querySelector('input#input-password').value = _user.password;
        document.querySelector('input#input-confirm').value = _user.password;

        if(user.acceptTermsAndConditions){
            // @ts-ignore
            document.querySelector ('input[type="checkbox"][name="agree"]').click();
        }

    }, user);


    // @ts-ignore
    document.querySelector('input[type="submit"][value="Continue"]').click();

    console.log('User was created: ', user);
}
