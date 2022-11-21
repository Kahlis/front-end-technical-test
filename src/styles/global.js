import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    li, ul, ol {
        list-style: none;
    }
    body {
        background: #f5f7fa;
    }
`