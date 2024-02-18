const ele = document.getElementById("ele1")

const pintar = (element, color) => (element.style.color = color)


ele.addEventListener("click", () => {
    pintar(ele, 'yellow')
});
