// var backgroundImageIndex = 0;
// var backgroundImages = ['background1.jpg', 'background2.jpg', 'background3.jpg']; // add your background images here

function updateClock() {
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hou = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var session = "AM";

    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
        session = "PM";
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), session];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).innerHTML = values[i];
}

// function changeBackground() {
//     backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
//     document.body.style.backgroundImage = 'url(\'' + backgroundImages[backgroundImageIndex] + '\')';
// }

function initClock() {
    updateClock();
    window.setInterval(updateClock, 1000);
}
initClock();