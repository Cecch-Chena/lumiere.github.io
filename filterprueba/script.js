document.addEventListener("DOMContentLoaded", function () {
    const categoryOptions = document.querySelectorAll(".category-option");
    const boxes = document.querySelectorAll(".box");

    categoryOptions.forEach(function (option) {
        option.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedCategory = option.getAttribute("data-category");

            boxes.forEach(function (box) {
                if (selectedCategory === "all" || box.classList.contains(selectedCategory)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });
});