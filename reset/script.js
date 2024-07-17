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
    if (window.caches) {
        // Clear caches
        caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
        });
    }

    if ('serviceWorker' in navigator) {
        // Unregister all service workers
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for (let registration of registrations) {
                registration.unregister();
            }
        });
    }

    alert('Site data cleared!');
}