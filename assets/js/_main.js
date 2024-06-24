// root javascript

// global init
function init() {
  previewRibbon(); // remove if migrating to prod
  triggerResponsive();
  showVersion();
  viClock(); // js clock
  start(); // per page
}

function showVersion() {
  document.getElementById("siteVersion").innerHTML = "v20240518.4.32-20240625_preview";
}

// js clock code adapted from w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
// with some improvisations to convert to am/pm format. initially used in G.Mgr's streams.
function viClock() {
  const tD = new Date(new Date().getTime() + diffOffs(11));
  let hh = tD.getHours(),
    mm = tD.getMinutes(),
    ss = tD.getSeconds();
  mm = addZero(mm);
  ss = addZero(ss);
  document.getElementById("footTime").innerHTML = hr12(hh) + ":" + mm + ampm(hh) + "&ensp;&#8226;&ensp;VIT (UTC +11)";
  setTimeout(viClock, 0);
}
function addZero(z) {
  if (z < 10) { z = "0" + z };
  return z;
}
function diffOffs(tz) {
  const dt = new Date();
  let tzDiff = tz * 60 + dt.getTimezoneOffset(),
    diff = tzDiff * 60 * 1000;
  return diff;
}
function hr12(hr) {
  const hrs = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  for (let a = hr; a <= 23; a++) {
    if (hr <= 11) {
      return hr = hrs[a];
    } else if (hr <= 23) {
      ind = a - hrs.length;
      return hr = hrs[ind];
    }
  }
}
function ampm(ap) {
  const apD = ["am", "pm"];
  for (let p = ap; p <= 23; p++) {
    if (ap <= 11) {
      return ap = apD[0];
    } else if (ap <= 23) {
      return ap = apD[1];
    }
  }
}

function previewRibbon() {

  var bannerPrv = document.createElement("link");
  bannerPrv.type = "text/css"
  bannerPrv.rel = "stylesheet";
  bannerPrv.href = "https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css";

  document.head.appendChild(bannerPrv);

  const previewBanner = `<a rel="noopener noreferrer" id="bannerClr" class="github-fork-ribbon left-top" href="https://github.com/MamaNyoSquad/mamanyosquad-preview" target="_blank" data-ribbon="Preview Release">Preview Release</a>`;
  document.body.insertAdjacentHTML("afterbegin", previewBanner);

}