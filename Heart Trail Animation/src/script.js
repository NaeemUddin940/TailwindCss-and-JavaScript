const body = document.querySelector("body");
body.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const span = document.createElement('span');
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    const size = Math.random() * 100;
    span.style.width = size + "px";
    span.style.height = size + "px";
    body.appendChild(span);
    setTimeout(() => {
        span.remove()
    }, 3000)
})

// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", (event) => {
//   const xPos = event.offsetX;
//   const yPos = event.offsetY;
//   const spanEl = document.createElement("span");
//   spanEl.style.left = xPos + "px";
//   spanEl.style.top = yPos + "px";
//   const size = Math.random() * 100;
//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";
//   bodyEl.appendChild(spanEl);
//   setTimeout(() => {
//     spanEl.remove();
//   }, 3000);
// });