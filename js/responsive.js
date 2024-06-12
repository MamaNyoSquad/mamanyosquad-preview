// base trigger
function triggerResponsive() {
  footerResponsive(665);
}

// footer
function footerResponsive(ftt) {
  if (window.innerWidth <= ftt) {
    footerMobile();
  }
  else {
    footerDesktop();
  }
}
function footerDesktop() {
  document.getElementById("footPage").style.float = "right";
  document.getElementById("footPage").style.margin = "0";
  document.getElementById("footPage").style.textAlign = "right";
}
function footerMobile() {
  document.getElementById("footPage").style.float = "unset";
  document.getElementById("footPage").style.margin = "0 auto";
  document.getElementById("footPage").style.textAlign = "center";
}