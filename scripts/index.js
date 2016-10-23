document.addEventListener("DOMContentLoaded", function(event) {
    setTime('bind-header-clock'); 
    window.setInterval(function () {setTime('bind-header-clock')}, 1000);
});


function setTime(elementId) {
    var formatter = new dateFormatter();
    document.getElementById(elementId).innerHTML = formatter.formatDate(new Date());
}