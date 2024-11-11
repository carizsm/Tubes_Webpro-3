/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function success(page) {
    const fullName = document.getElementById("name").value;
    const idNumber = document.getElementById("idNumber").value;
    const position = document.getElementById("position").value;
    const major = document.getElementById("number").value;
    const year = document.getElementById("year").value;
    const photo = document.getElementById("photo").value;

    var part = "";
    if (page=="member") {
        part = "member";
    } else if (page=="act") {
        part = "activities";
    } else {
        part = "publications"
    }
    
    if (!fullName || !idNumber || position === "Choose Position" || !major || !year || !photo) {
        alert("Data " + part + " masih belum lengkap!");
        return;
    }

    
    alert('Data ' + part + ' berhasil ditambahkan!')
}