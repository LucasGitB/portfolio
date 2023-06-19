/*!
 * Start Bootstrap - Full Width Pics v5.0.5 (https://startbootstrap.com/template/full-width-pics)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project




let block = document.querySelector(".background")
let ball = document.querySelector(".ball")
let darkMode = false

function maFunction4() {
    if (darkMode) {
        ball.classList.add("activatedBack")
        ball.classList.remove("activated")
        document.body.style.background = "white"
        document.body.style.color = "black"
        darkMode = false

    } else {
        ball.classList.add("activated")
        ball.classList.remove("activatedBack")
        document.body.style.background = "#121212"
        document.body.style.color = "white"
        darkMode = true
    }
}
block.addEventListener("click", function () {
    maFunction4()
})