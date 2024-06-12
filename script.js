// root javascript

// global init
function init() {
  triggerResponsive();
  showVersion();
  venusIslandTimeInit();
  start(); // per page
}

function showVersion() {
  document.getElementById("siteVersion").innerHTML = "v20240518.4.9-20240612_preview";
}

// js clock code adapted from https://jsfiddle.net/mplungjan/mQrJn 
// and https://geeksforgeeks.org/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format 
var VIT,
  timeZone = 11.00,
  dt = new Date(),
  tzDiff = timeZone * 60 + dt.getTimezoneOffset(),
  diffOffs = tzDiff * 60 * 1000;
function jsClock() {
  var tD = new Date(new Date().getTime() + diffOffs),
    hh = tD.getHours(),
    mm = tD.getMinutes(),
    ss = tD.getSeconds();
  let ampm = hh >= 12 ? "pm" : "am";
  hh = hh % 12;
  hh = hh ? hh : 12;
  mm = mm < 10 ? "0" + mm : mm;
  document.getElementById("footTime").innerHTML = hh + ":" + mm + ampm + "&ensp;&#8226;&ensp;VIT (UTC +11)";
}
function venusIslandTimeInit() {
  VIT = setInterval(jsClock, 500);
}
function venusIslandTimeClr() {
  clearTimeout(VIT);
}