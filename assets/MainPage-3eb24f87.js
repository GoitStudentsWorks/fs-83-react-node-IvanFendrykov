import{s as t,j as e}from"./index-6bd703c5.js";const i="/fs-83-react-node-IvanFendrykov/assets/right-animals-ce7dfe95.png",o=t.div`
    display: flex;
    justify-content:center;
    height: 100vh;
    background-image: url(${i});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  


    @media (min-width: 586px) {
        align-items: normal;
        background-position: center bottom 0;
        background-image: url(${i});
        background-size: 70%;
    }

    @media (min-width: 1024px) {    
        background-size: 70%; 
        background-position: right 0 bottom 0;
        justify-content: left;
    }

`,a=t.h1`
    display: block;
    margin-top:50%;
    color: var(--primary-text-color);
    word-spacing: 5px;
    font-family: var(--main-font);
    font-weight: 700;

    font-size: 2.3rem;
    line-height: 3rem;
    text-shadow: none;


    @media (min-width: 586px) {
            margin-top: 20%;
            font-size: 4rem;
            line-height: 5rem;
    }

    @media (min-width: 768px) {
        font-size: 4rem;
        line-height: 5rem;
        font-weight: 700;
        text-shadow: none;
        margin-top:10%;

    }

    @media (min-width: 1024px) {
        margin-top: 5%;
        font-size: 6rem;
        line-height: 7.5rem;
        font-weight: 700;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

`,n=t.br`
    @media (max-width: 1024px) {
        display: none;
    }
`,r=t.br`
    display: none;

    @media (max-width: 1024px) {
        display: inline-block;
    }
    @media (max-width: 568px) {
        display: none;
    }
`,d=()=>e.jsx(e.Fragment,{children:e.jsx(o,{children:e.jsxs(a,{children:["Take good care ",e.jsx(n,{}),"of",e.jsx(r,{})," your small",e.jsx(n,{})," pets"]})})});export{d as default};
