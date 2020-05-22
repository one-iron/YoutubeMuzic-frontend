import { createGlobalStyle } from "styled-components";
export const clientId =
  "563882109051-1vm6nvau748so36gdmpkjm028h2247as.apps.googleusercontent.com";
export const API = "http://13.209.85.9:8000";
const URL = "http://13.209.85.9:8000";
export const googleLogin = `${URL}/user/signin`;
export const getLike = `${URL}/user/like?media_id=`;
export const pushLike = `${URL}/user/like`;
export const postRecentPlayList = `${URL}/user/recent/playlist`;
export const playListPageData = `${URL}/music/list/`;
export const homeData = `${URL}/music/main`;
export const getHotListData = `${URL}/music/hot`;

//글로벌 스타일
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    background-color: #000000;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
input {
    all: unset;
}
a {
    all: unset;
}
a {
	all: unset;
}
`;
