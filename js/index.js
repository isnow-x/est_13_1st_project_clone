const popup = document.querySelector("#popup");
const popupCloseBtn = document.querySelector("#popupCloseBtn");
const agree = document.querySelector("#agree");

if (document.cookie.includes("popup=팝업")) {
  popup.close();
} else {
  popup.showModal();
}

popupCloseBtn.addEventListener("click", () => {
  popup.close();
  if (agree.checked) {
    createCookie("popup", "팝업", 1);
  } else {
    createCookie("popup", "팝업", -1);
  }
});

function createCookie(name, value, expire) {
  let today = new Date();
  today.setDate(today.getDate() + expire);
  document.cookie = `${name}=${value};Expires=${today.toString()}`;
}
