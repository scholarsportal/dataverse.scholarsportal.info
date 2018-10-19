// Detect the browser language, and take the user to the french page if applicable
var currentLocation = window.location.href.replace(/\/$/, '');
var lastPart = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
var lang = navigator.language.substr(0,2);

if ((lang === 'fr') && (getCookie("first_visit") != "true") && lastPart !== "fr") {
    document.cookie = "first_visit=true";
    window.location.href = "/fr";
};

// from http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
};