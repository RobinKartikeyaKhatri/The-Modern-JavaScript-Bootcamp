const allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(function(paragraph) {
    if (paragraph.textContent.includes("the")) {
        paragraph.remove();
    }
});