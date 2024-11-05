let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let images = document.querySelectorAll(".grid-item img");
let closeModal = document.getElementsByClassName("close")[0];

images.forEach(function (image) {
    image.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}