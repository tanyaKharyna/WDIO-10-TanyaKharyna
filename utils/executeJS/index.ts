import { UserRegistrationScripts } from './userRegistration.script';


export class ExecuteJsScripts {

    get userRegistrationScripts () {
        return new UserRegistrationScripts();
    }
}
