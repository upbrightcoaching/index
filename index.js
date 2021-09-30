const inputs = document.querySelectorAll("input");
const selecter = document.querySelectorAll("select");
// alert(selecter.value.length)

var length = inputs.length;
for (let index = 0; index < inputs.length; index++) {
  const element = inputs[index];
  element.addEventListener("blur", function () {
    if (element.value) {
      element.classList.add("dirty");
    } else {
      element.classList.remove("dirty");
    }
  });
}

// for (let index = 0; index < selecter.length; index++) {
//     const element = selecter[index];
//     element.addEventListener('blur' , function(){
//         if (element.value){
//     element.classList.add('dirty');}
//     else{
//         element.classList.remove('dirty');
//     }

//     });
// }

// foreach version of for loop selecter mathod

selecter.forEach((element) => {
  element.addEventListener("blur", function () {
    if (element.value) {
      element.classList.add("dirty");
    } else {
      element.classList.remove("dirty");
    }
  });
});

const bars = document.querySelector(".bars");
// const blue          =  document.querySelector('div');
const menuContainer = document.querySelector(".shift");
// const menu          =  document.querySelector('.menu');
// const nameLogo      =  document.querySelector('.name-logo');
var clickEvent = 0;

bars.addEventListener("click", () => {
  if (clickEvent === 0) {
    menuContainer.classList.add("shift-menu");

    clickEvent++;
  } else {
    menuContainer.classList.remove("shift-menu");
    clickEvent--;
  }
});
