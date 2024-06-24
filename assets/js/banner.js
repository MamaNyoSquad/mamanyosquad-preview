function startBanner() {

  var bnrStyle = document.getElementById("specialBanner").style;
  var bnrHTML = document.getElementById("specialBanner");

  bnrStyle.display = "none"; // "block" if ready to show the banner, "none" if otherwise

  bnrStyle.fontFamily = "'Poppins', 'Noto Serif JP', sans-serif !important";
  bnrStyle.backgroundImage = "url(/assets/images/background/nyoBG.png)";

  bnrHTML.innerHTML = `
  This is a test notification. Current notification will be posted here.
  <a rel="noopener noreferrer" href="https://youtube.com/@MamaNyoSquad" target="_blank">Test URL</a>
  `;

}