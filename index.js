const left = document.querySelector(".left")
const right = document.querySelector(".right")

left.addEventListener("mouseenter", () => left.classList.add("left-split"))
left.addEventListener("mouseleave", () => left.classList.remove("left-split"))

right.addEventListener("mouseenter", () => right.classList.add("right-split"))
right.addEventListener("mouseleave", () => right.classList.remove("right-split"))