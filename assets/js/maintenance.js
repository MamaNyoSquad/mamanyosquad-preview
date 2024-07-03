// all maintenance routines are displayed here

// Japanese: https://doax-venusvacation.jp/news_list.html 
// Global: https://game.doaxvv.com/en/news_list_lp/index.html 

function showMaintenance() {

  // launch all required args here
  docModified();

}

// _main.js clock but for time/date tracking
function docModified() {
  const tD = new Date(new Date(document.lastModified).getTime() + diffOffs(11));
  let m = tD.getMonth(),
    d = tD.getDate(),
    y = tD.getFullYear(),
    hh = tD.getHours(),
    mm = tD.getMinutes(),
    ss = tD.getSeconds();
  mm = addZero(mm);
  ss = addZero(ss);
  document.getElementById("modifiedDate").innerHTML = hr12(hh) + ":" + mm + ampm(hh) + "&ensp;&#8226;&ensp;" + d + " " + monthDef(m) + " " + y + " VIT";
  setTimeout(docModified, 0);
}
function monthDef(m) {
  const mo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return m = mo[m];
}

function viewMaintenance(id, edition) {
  if (edition == "ja") {
    window.open("https://doax-venusvacation.jp/" + id + ".html", "_blank");
  } else if (edition == "gl") {
    window.open("https://game.doaxvv.com/production/html/information/" + id + ".html", "_blank");
  }
}