// Get profile photo, modal, and close button elements
const profilePhoto = document.getElementById("profilePhoto");
const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// When the profile photo is clicked, open the modal and show the larger image
profilePhoto.onclick = function() {
    modal.style.display = "flex";
    modalImage.src = this.src; // Use the same image source for the modal
}

// Close the modal when the 'X' is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
