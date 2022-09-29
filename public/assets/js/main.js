// remove loader on load
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".Loader").style.display = "none";
  }, 1);
};

function showMenu() {
  document.querySelector(".navigation").classList.add("showNav");
}
function hideMenu() {
  document.querySelector(".navigation").classList.remove("showNav");
}

// nav bar added
window.onscroll = function () {
  let POS_Y = window.pageYOffset;
  const navi = document.querySelector(".navigation");
  let height = window.pageYOffset;
  if (height >= 50) navi.classList.add("afterScroll");
  else navi.classList.remove("afterScroll");
  document.querySelector(".straight-line").style.height = POS_Y + "px";
};
