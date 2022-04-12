import 'styled-components'
declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,

    colors: {
        red: string,
        green: string,
        blue: string,
        blueLight: string,
        textTitle: string,
        textBody: string,
        background: string,
        shape: string,
        inputText:string,
        text:string,
        inputBackground:string,
        inputBorder:string,
    }
    }
}