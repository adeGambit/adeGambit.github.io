    .main
.footer
    .bubbles
        - for (var i = 0; i < 128; i++) //Small numbers looks nice too
            .bubble(
                style=`--size:${2 + Math.random() * 4}rem; --distance:${6 + Math.random() * 4}rem; --position:${-5 + Math.random() * 110}%; --time:${2 + Math.random() * 2}s; --delay:${-1 * (2 + Math.random() * 2)}s;`
            )
    .content
        div
            div
            div
                b Bucky..
                a(href="#") Longing 
                a(href="#") Rusted 
                a(href="#") Furnace 
                a(href="#") Daybreak 
                a(href="#") Seventeen 
                a(href="#") Benign 
                a(href="#") Nine
                a(href="#") Homecoming 
                a(href="#") One 
                a(href="#") Freight Car
        div
            a.image(
                href="https://adegambit.github.io/favicon.ico",
                target="_blank",
                style="background-image: url(\"https://adegambit.github.io/favicon.ico\")"
            )
            p ©1996 Not Reallyish
svg(style="position: fixed; top: 100vh")
    defs
        filter#blob
            feGaussianBlur(
                in="SourceGraphic",
                stdDeviation="10",
                result="blur"
            )
            feColorMatrix(
                in="blur",
                mode="matrix",
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
                result="blob"
            )
