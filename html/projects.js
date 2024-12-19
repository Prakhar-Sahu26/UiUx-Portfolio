// Get the popup elements
const popupContainer = document.getElementById('popupContainer');
const popupTitle = document.getElementById('popupTitle');
const videoSource = document.getElementById('videoSource');
const popupVideo = document.getElementById('popupVideo');
const openPopup = document.getElementById('openPopup');
const openPopup1 = document.getElementById('openPopup1');
const openPopup2 = document.getElementById('openPopup2');
const closePopup = document.getElementById('closePopup');

// Open the popup with different content
openPopup.addEventListener('click', () => {
  popupTitle.textContent = 'Shoping Website';
  Image.src = '../public/projectimg3.jpg' // Add your video path here
  popupVideo.load(); // Reload the video with the new source
  popupContainer.style.display = 'flex';
});

openPopup1.addEventListener('click', () => {
  popupTitle.textContent = 'Fashion Website';
  videoSource.src = '../video3.mp4'; // Add your video path here
  popupVideo.load(); // Reload the video with the new source
  popupContainer.style.display = 'flex';
});

openPopup2.addEventListener('click', () => {
  popupTitle.textContent = 'Fashion Landing Page';
  videoSource.src = '../video1.mp4' // Add your video path here
  popupVideo.load(); // Reload the video with the new source
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
