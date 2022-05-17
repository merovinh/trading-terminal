import { css } from '@emotion/react';

export const GlobalStyles = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Lexend', 'Poppins', sans-serif;
        background-color: #2e2e2e;
        font-weight: 300;
        color: #fff;
    }
    button {
        font-weight: 300;
        font-family: 'Lexend', 'Poppins', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: normal;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;
