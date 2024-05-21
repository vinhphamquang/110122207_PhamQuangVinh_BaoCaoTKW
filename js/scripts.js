/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function performSearch() {
    var searchInput = document.getElementById("o_tim_kiem").value.toLowerCase();
    // Your search logic here, this is just a dummy example
    let ten_bd_1 = "harry potter";
    let ten_bd_2 = "cuop bien caribe";
    let ten_bd_3 = "girl from nowhere";
    let ten_bd_4 = "coco";
    let ten_bd_5 = "finding nemo";
    let tach_bd_1 = ten_bd_1.split('');
    let tach_bd_2 = ten_bd_2.split('');
    let tach_bd_3 = ten_bd_3.split('');
    let tach_bd_4 = ten_bd_4.split('');
    let tach_bd_5 = ten_bd_5.split('');
    let tach_nd_tk = searchInput.split('');
    if (searchInput == "") {
        document.getElementById("hp").classList.add("d-none");
        document.getElementById("cbc").classList.add("d-none");
        document.getElementById("gfn").classList.add("d-none");
        document.getElementById("cc").classList.add("d-none");
        document.getElementById("fn").classList.add("d-none");
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_1[i]) {
            document.getElementById("hp").classList.remove("d-none");
        }
        else {
            document.getElementById("hp").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_2[i]) {
            document.getElementById("cbc").classList.remove("d-none");
        }
        else {
            document.getElementById("cbc").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_3[i]) {
            document.getElementById("gfn").classList.remove("d-none");
        }
        else {
            document.getElementById("gfn").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_4[i]) {
            document.getElementById("cc").classList.remove("d-none");
        }
        else {
            document.getElementById("cc").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_5[i]) {
            document.getElementById("fn").classList.remove("d-none");
        }
        else {
            document.getElementById("fn").classList.add("d-none");
            break;
        }
    }
}

// Event listener for input in search field
document.getElementById("o_tim_kiem").addEventListener("input", function () {
    performSearch();
});