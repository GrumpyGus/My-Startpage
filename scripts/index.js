function setTime(elementId, dateFormatter) {
    document.getElementById(elementId).innerHTML = dateFormatter.formatDate(new Date());
}

var formatter = new dateFormatter();
setTime('bind-header-clock', formatter); 
window.setInterval(function () {setTime('bind-header-clock', formatter)}, 1000);