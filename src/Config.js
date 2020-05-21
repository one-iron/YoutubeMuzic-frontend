import { createGlobalStyle } from "styled-components";
export const clientId =
  "563882109051-1vm6nvau748so36gdmpkjm028h2247as.apps.googleusercontent.com";
//진현님 API
const JHurl = "http://10.58.0.33:8000";
export const googleLogin = `${JHurl}/user/signin`;
export const getLike = `${JHurl}/user/like?media_id=`;
export const pushLike = `${JHurl}/user/like`;
export const postRecentPlayList = `${JHurl}/user/recent/playlist`;

//호준님 APU
const HJurl = "http://10.58.3.243:8000";
export const playListPageData = `${HJurl}/music/list/`;
export const homeData = `${HJurl}/music/main`;
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
