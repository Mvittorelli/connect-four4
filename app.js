document.querySelector(".modal-menu").showModal();
document.querySelector("main").style.display = "none";
document.querySelector("header").style.display = "none";

document.querySelector(".play-cpu").onclick = () => {
  document.querySelector(".modal-menu").close();
  document.querySelector("main").style.display = "flex";
  document.querySelector("header").style.display = "flex";
};

document.querySelector(".play-human").onclick = () => {
  document.querySelector(".modal-menu").close();
  document.querySelector("main").style.display = "flex";
  document.querySelector("header").style.display = "flex";
};

// règles
document.querySelector(".rules-btn").onclick = () => {
  document.querySelector(".modal-menu").close();
  document.querySelector(".modal-rules").showModal();
};

document.querySelector(".close-rules").onclick = () => {
  document.querySelector(".modal-rules").close();
  document.querySelector(".modal-menu").showModal();
};
