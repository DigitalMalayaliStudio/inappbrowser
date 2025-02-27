function isInAppBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User-Agent:", ua);

    return /FBAN|FBAV|Instagram|Twitter|WhatsApp|Telegram|Snapchat/i.test(ua);
}

function openInDefaultBrowser() {
    let url = window.location.href;

    // For Android: Use intent:// to open the default browser
    if (/android/i.test(navigator.userAgent)) {
        window.location = "intent://" + url.replace(/^https?:\/\//, "") + "#Intent;scheme=https;package=com.android.chrome;end;";
    } 
    // For iOS: Use Safari redirection
    else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = "googlechrome://" + url.replace(/^https?:\/\//, "");
    } 
    // Fallback for unknown cases
    else {
        window.open(url, "_blank");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (isInAppBrowser()) {
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        document.getElementById("openDefault").addEventListener("click", openInDefaultBrowser);
    }
});