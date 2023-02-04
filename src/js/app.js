'use strict';
document.querySelector(".subheader_logo").addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(".header")
      .scrollIntoView({ behavior: "smooth" });
  });
