function RedirectionJavascript(){
    document.location.href="http://manouvellepage.com"; 
;}

function mobilecheck() {
    var device = (typeof window.orientation !== "undefined") 
        || (navigator.userAgent.indexOf('IEMobile') !== -1
        );
    if (device == True){
        document.location.href="test.html"
    }
};