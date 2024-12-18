const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('responseMessage'); 

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        countryCode: document.getElementById('countryCode').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://localhost:3000/save-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            responseDiv.innerHTML = `Thanks for reaching out to us, <strong>${formData.firstName}</strong>!`;
            responseDiv.style.display = 'block';
            form.reset(); 
        } else {
            alert('Failed to submit data.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Server error. Please try again later.');
    }
});
