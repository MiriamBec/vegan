'use strict'

var theme = document.getElementById('theme');
var theme_inf = document.getElementById('theme-inf-vegano');
var theme_postres = document.getElementById('theme-postres');
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
        theme_postres.setAttribute('href', 'css/postres-dark.css')
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
    var lal = document.getElementsByClassName('recomen-postres-p');
    

    for(var i = 0; i < lal.length; i++) {
        lal[i].addEventListener('mouseover', function () {
            this.style.background = 'rgba(8, 243, 231, 0.5)';
            this.getElementsByClassName('sd')[0].style.display = 'block';
        });

        lal[i].addEventListener('mouseout', function () {
            this.style.background = 'none';
            this.getElementsByClassName('sd')[0].style.display = 'none';
        });
    }
   
}







