const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

// ハンバーガークリック
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // クリック伝播防止
  nav.classList.toggle("active");
});

// メニュー内クリックでは閉じない
nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 画面のどこかをクリックしたら閉じる
document.addEventListener("click", () => {
  nav.classList.remove("active");
});
