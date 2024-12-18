// Get the popup elements
const popupContainer = document.getElementById('popupContainer');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');

// Open the popup
openPopup.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
});

// Close the popup
closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// Close the popup by clicking outside the modal
popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});
