const click = document.getElementById("click")
const content = document.getElementById("section")

click.addEventListener("click" , function() {
    content.classList.toggle("none")
    click.classList.toggle("none")
})