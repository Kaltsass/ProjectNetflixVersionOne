// Function to show the sign-in modal
function showModal() {
    document.getElementById('sign-in-modal').style.display = 'block';
}

// Function to close the sign-in modal
function closeModal() {
    document.getElementById('sign-in-modal').style.display = 'none';
}

// Function to handle sign-in form submission
async function handleSignIn(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would add your authentication logic (this is a placeholder)
    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (data.success) {
            alert('Sign-in successful!');
            closeModal(); // Close the modal on successful sign-in
        } else {
            alert(data.message || 'Sign-in failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Add an event listener to the sign-in button to show the modal
document.getElementById('signInBtn').addEventListener('click', showModal);

// Optional: Add an event listener to the close button (if you want)
document.querySelector('.close').addEventListener('click', closeModal);


