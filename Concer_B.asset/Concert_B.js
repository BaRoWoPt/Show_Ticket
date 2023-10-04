const closeSideBar = document.getElementById("icon_close_sidebar");
const sidebar = document.querySelector(".sidebar");
const openSideBar = document.getElementById("icon_open_sidebar");
const pages_close = document.querySelector(".pages");
var column_up_1 = $(".column_up.up_1");

// var column_up_2 = $(".column_up.up_2");
// // var child_up_2 = $(".column_up.up_2 .ntpmm_show");

// var column_down = $(".column_down");
// var child_down = $(".column_down .ntpmm_show");

// // process close
function ShowSideBar() {
  sidebar.classList.add("open");
}
openSideBar.addEventListener("click", ShowSideBar);

// //////////////////////////////////////////////////////////////////////////////////////////
// function NewImg(num) {
//   var string_element_column_up = ".column_up.up_" + num;
//   var column_up_num = $(string_element_column_up);
//   var string_element_child_up = ".column_up.up_" + num + " .ntpmm_show";
//   var child_up_num = $(string_element_child_up);
//   // get imf source before remove
// var oldImgSrc = $(child_up_num[0]).attr("src");
//   //add new img to array
// var new_img = '<img src="' + oldImgSrc + '" alt="" class="ntpmm_show">';
// $(column_up_num).append(new_img);
//   //remove first img out array
// $(child_up_num[0]).remove();
// }
// setInterval(NewImg, 4000, 1);
// // setInterval(NewImg, 15000, 2);

// // function AddImgDown() {
// //   var new_img = '<img src="./img/ntpmm_6.jpeg" alt="" class="ntpmm_show">';
// //   $(column_down).prepend(new_img);
// // }
// // AddImgDown();

// //////////////////////////////////////////////////////////////////////////////////////////

function HiddenSideBar() {
  sidebar.classList.remove("open");
}
closeSideBar.addEventListener("click", HiddenSideBar);

pages_close.addEventListener("click", function (event) {
  sidebar.classList.remove("open");
});
const container = document.querySelectorAll(".column_up");
const images = container.querySelectorAll(".ntpmm_show");
let currentImageIndex = 0;

function hideImage(index) {
  images[index].style.display = "none";
}

function showImage(index) {
  images[index].style.display = "block";
}

function updateImageOrder() {
  images.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.style.transform = "translate3d(0, 0, 0)";
    } else {
      const translatePercentage = (index - currentImageIndex) * 100;
      image.style.transform = `translate3d(${translatePercentage}%, 0, 0)`;
    }
  });

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(updateImageOrder, 1000);
