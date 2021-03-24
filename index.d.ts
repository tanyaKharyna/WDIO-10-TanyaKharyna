declare global {
    namespace WebdriverIO {

        interface Element {
            click: (wait?: boolean) => void
        }

        interface ClickOptions {
            click: (clickOptions: any, waitOptions:any) => void
        }
    }
}

export {};
