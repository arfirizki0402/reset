document.getElementById('clearCookiesBtn').addEventListener('click', clearCookies);
document.getElementById('clearDataBtn').addEventListener('click', clearSiteData);

function clearCookies() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    alert('Cookies cleared!');
}

function clearSiteData() {
    if (navigator.storage && navigator.storage.clear) {
        navigator.storage.clear().then(() => {
            alert('Site data cleared!');
        });
    } else {
        alert('Clearing site data is not supported by your browser.');
    }
}
