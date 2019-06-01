'use strict'

var theme = document.getElementById('theme');
var theme_inf = document.getElementById('theme-inf-vegano');
var theme_postres = document.getElementById('theme-postres');
var theme_tartas = document.getElementById('theme-tartas');
var theme_receta_tarta = document.getElementById('theme-receta-tarta');
var facebookC = document.getElementById('facebookC');
var instagramC = document.getElementById('instagramC');
var twitterC = document.getElementById('twitterC');
var emailkC = document.getElementById('emailC');
var imgLFooter = document.getElementById('img-l-footer');
var imgLogo = document.getElementById('img_l');



// SUBMENU

var lirecetas = document.getElementById('lirecetas');
lirecetas.addEventListener('mouseover', function () {
    document.getElementById('submenu').style.display = 'block';
});

lirecetas.addEventListener('mouseout', function () {
    document.getElementById('submenu').style.display = 'none';
});

// CAMBIO DE COLOR

var darkMode = document.getElementById('dark-mode');
darkMode.onchange = function () {
    if (this.checked) {
        localStorage.setItem('darkModeEnabled', 'on');
        setDarkMode();
    } else {
        localStorage.setItem('darkModeEnabled', 'off')
        setLightMode();
    }
}

function setDarkModeCheckbox() {
    if (localStorage.getItem('darkModeEnabled') !== null) {
        if (localStorage.getItem('darkModeEnabled') === 'on') {
            darkMode.checked = true;
            setDarkMode();
        } else {
            darkMode.checked = false;
            setLightMode();
        }
    }
}
function setDarkMode() {
    theme.setAttribute('href', 'css/dark.css');
    if (window.location.href.indexOf('inf-vegano') > -1) {
        theme_inf.setAttribute('href', 'css/inf-vegano-dark.css');
    }
    if (window.location.href.indexOf('postres') > -1) {
        theme_postres.setAttribute('href', 'css/postres-dark.css');
    }
    if (window.location.href.indexOf('tartas') > -1 || window.location.href.indexOf('comidas') > -1) {
        theme_tartas.setAttribute('href', 'css/tartas-dark.css');
    }
    if (window.location.href.indexOf('tarta-chocolate') > -1
        || window.location.href.indexOf('tarta-chocolate-nuez') > -1
        || window.location.href.indexOf('tarta-platano') > -1
        || window.location.href.indexOf( 'camote-relleno') > -1 ) {
        theme_receta_tarta.setAttribute('href', 'css/receta-tarta-dark.css');
    }
    facebookC.setAttribute('src', 'imagenes/facebookC.png');
    instagramC.setAttribute('src', 'imagenes/instagramC.png');
    twitterC.setAttribute('src', 'imagenes/twitterC.png');
    emailC.setAttribute('src', 'imagenes/emailC.png');
    imgLFooter.setAttribute('src', 'imagenes/logo-vida-n.png');
    imgLogo.setAttribute('src', 'imagenes/logo-vida-lb.png');
}

function setLightMode() {
    theme.setAttribute('href', 'css/light.css');
    if (window.location.href.indexOf('inf-vegano') > -1) {
        theme_inf.setAttribute('href', 'css/inf-vegano.css');
    }
    if (window.location.href.indexOf('postres') > -1) {
        theme_postres.setAttribute('href', 'css/postres.css')
    }
    if (window.location.href.indexOf('tartas') > -1 || window.location.href.indexOf('comidas') > -1) {
        theme_tartas.setAttribute('href', 'css/tartas.css')
    }
    if (window.location.href.indexOf('tarta-chocolate') > -1
    || window.location.href.indexOf('tarta-chocolate-nuez') > -1
    || window.location.href.indexOf('tarta-platano') > -1
    || window.location.href.indexOf( 'camote-relleno') > -1 ) {
    theme_receta_tarta.setAttribute('href', 'css/receta-tarta.css');
}
    facebookC.setAttribute('src', 'imagenes/facebook1.png');
    instagramC.setAttribute('src', 'imagenes/instagram1.png');
    twitterC.setAttribute('src', 'imagenes/twitter.png');
    emailC.setAttribute('src', 'imagenes/email.png');
    imgLFooter.setAttribute('src', 'imagenes/log-vida-b.png');
    imgLogo.setAttribute('src', 'imagenes/log-vida.png');
}

setDarkModeCheckbox();


// EN POSTRES

if (window.location.href.indexOf('postres') > -1) {
    var recomen_postres = document.getElementsByClassName('recomen-postres-p');
    

    for(var i = 0; i < recomen_postres.length; i++) {
        recomen_postres[i].addEventListener('mouseover', function () {
            this.style.background = 'rgba(8, 243, 231, 0.5)';
            this.getElementsByClassName('img-over')[0].style.display = 'block';
        });

        recomen_postres[i].addEventListener('mouseout', function () {
            this.style.background = 'none';
            this.getElementsByClassName('img-over')[0].style.display = 'none';
        });
    }
   
}

// TARTAS

if(window.location.href.indexOf('tartas') > -1) {
    var las_tartas2 = document.getElementsByClassName('las-tartas-2');

    for(var i = 0; i < las_tartas2.length; i++) {
        las_tartas2[i].addEventListener('mouseover', function() {
            this.style.background = 'rgba(95, 207, 4, 0.5)';
            this.getElementsByClassName('img-over')[0].style.display = 'block';
        });

        las_tartas2[i].addEventListener('mouseout', function () {
            this.style.background = 'none';
            this.getElementsByClassName('img-over')[0].style.display = 'none';
        });
    }
}

//comidas

if(window.location.href.indexOf('comidas') > -1) {
    var las_tartas2 = document.getElementsByClassName('las-tartas-2');

    for(var i = 0; i < las_tartas2.length; i++) {
        las_tartas2[i].addEventListener('mouseover', function() {
            this.style.background = 'rgba(95, 207, 4, 0.5)';
            this.getElementsByClassName('img-over')[0].style.display = 'block';
        });

        las_tartas2[i].addEventListener('mouseout', function () {
            this.style.background = 'none';
            this.getElementsByClassName('img-over')[0].style.display = 'none';
        });
    }
}







