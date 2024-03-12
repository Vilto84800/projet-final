function openMenu() {
    document.getElementById('side-menu').style.width = '200px';
    document.getElementById('main-content').style.marginLeft = '200px';
}

function closeMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main-content').style.marginLeft = '0';
}

function mobilecheck() {
    var device = (typeof window.orientation !== "undefined") 
        || (navigator.userAgent.indexOf('IEMobile') !== -1
        );
    if (device == true){
        document.location.href="test.html"
    }
};

function slidingMenu() {
    document.getElementById('slide-menu').style.height = '400px'
}