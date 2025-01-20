//your JS code here. If required.
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalButton = document.getElementById("openModal");

// Get the <span> element that closes the modal
const closeModalButton = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
