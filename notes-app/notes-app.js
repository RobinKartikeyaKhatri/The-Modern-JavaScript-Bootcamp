// Query and remove
// const p = document.querySelector("p");
// p.remove();

// Query all and remove
const ps = document.querySelectorAll("p");

ps.forEach(function (paragraph) {
    paragraph.textContent = "******";
    // console.log(paragraph.textContent);
    // paragraph.remove();
});