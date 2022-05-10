// 공통 js

// 전체 카테고리 드롭다운 버튼
const btn = document.querySelector('.category__button');
const list = document.querySelector('.category-container');
btn.addEventListener('click', () => {
  btn.classList.toggle('on');
  list.style.display = "block";
});
btn.addEventListener('blur', () => {
  btn.classList.remove('on');
  list.style.display = "none";
});
list.addEventListener('click', (event) => {
  if (event.target.nodeName === "BUTTON") {
    btn.classList.remove('on');
    list.style.display = "none";
  }
});

// 햄버거 메뉴 누르면 모바일 버전에서 열리기
$(document).ready(function () {
  $(".slide-menu__sign").on("click", function () {
    $(".slide-menu__sign-container").addClass("on");
    $(".dim").show();
  });
  $(".slide-menu__sign-container .sign-panel__icon--close").on("click", function () {
    $(".slide-menu__sign-container").removeClass("on");
    $(".dim").hide();
  });
});

// 검색 버튼 누르면 모바일 버전에서 열리기
$(document).ready(function () {
  $(".slide-menu__search").on("click", function () {
    $(".slide-menu__search-container").addClass("on");
    $(".dim").show();
  });
  $(".slide-menu__search-container .search-panel__icon").on("click", function () {
    $(".slide-menu__search-container").removeClass("on");
    $(".dim").hide();
  });
});