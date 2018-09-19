// Detect the browser language, and take the user to the french page if applicable
var currentLocation = window.location.href.replace(/\/$/, '');
var lastPart = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
var lang = navigator.language.substr(0,2);

if ((lang === 'fr') && lastPart !== "fr") {
    window.location.href = "/fr";
};