"use strict";

(function show() {
    document.getElementsByTagName("form")[0].addEventListener("input", result);
    function result() {
        const firstNumber = document.getElementsByTagName("input")[0].value;
        const secontNumber = document.getElementsByTagName("input")[1].value;
        const res = document.getElementById("res");
        return res.innerHTML = firstNumber * secontNumber;
    }
})()