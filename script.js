function isInAppBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User-Agent:", ua);
    return /FBAN|FBAV|Instagram|Twitter|WhatsApp|Telegram/i.test(ua);
}

function openInDefaultBrowser() {
    let url = window.location.href;
    window.location = url; // This forces opening in the default browser
}

document.addEventListener("DOMContentLoaded", function () {
    if (isInAppBrowser()) {
        let popup = document.getElementById("popup");
        popup.style.display = "block";

        document.getElementById("openDefault").addEventListener("click", openInDefaultBrowser);
    }
});
