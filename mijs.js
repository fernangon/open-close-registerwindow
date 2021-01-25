
// Al hacer click en el botón inicial, poner la clase "active" 
document.querySelector(".open-login-btn").addEventListener("click", function() {
    document.querySelector(".open-login-btn").classList.add("active");
    document.querySelector(".login-form").classList.add("active");
});

// Al hacer click en el botón X, quitar la clase "active"
document.querySelector(".login-form .close-btn").addEventListener("click", function() {
    document.querySelector(".open-login-btn").classList.remove("active");
    document.querySelector(".login-form").classList.remove("active");
});























