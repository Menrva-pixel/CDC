window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }
}