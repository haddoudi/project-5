const section = document.querySelector("body"),
  overlay = document.querySelector(".c2"),
  showBtn = document.querySelector("button"),
  text = document.querySelector("selected");
showBtn.addEventListener("click", () => section.classList.add("active"));
overlay.addEventListener("click", () => section.classList.remove("active"));

// nambrs2 = document.querySelector("2"),
// nambrs3 = document.querySelector("3"),
// nambrs4 = document.querySelector("4"),
// nambrs5 = document.querySelector("5")
