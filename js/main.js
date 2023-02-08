window.onload = function () {
  let innerClient = document.querySelector(".text");
  let cursorElem = document.querySelector(".cursor-item");
  window.addEventListener("mousemove", moveFunc);

  function moveFunc(e) {
    cursorElem.style.transform = `translate(${e.clientX - 20}px,${
      e.clientY - 20
    }px)`;
    innerClient.innerHTML = `x:${e.clientX} y:${e.clientY}`;
    console.log(e.clientX, e.clientY);
  }
};
