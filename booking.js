document.getElementById("submit").addEventListener("click", function() {
    const form = document.getElementById('booking-form');
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }
    
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (checkin && checkout && new Date(checkout) < new Date(checkin)) {
        alert("Check-out date must be after the check-in date.");
        return; 
    }

    // Collect form data
    const bookingData = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        aadhaar: document.getElementById('aadhaar').value,
        roomType: document.getElementById('room-type').value,
        people: document.getElementById('people').value,
        checkin: checkin,
        checkout: checkout,
        extraServices: document.getElementById('extra-services').value,
        paymentMethod: document.getElementById('payment-method').value
    };

    // Store data in localStorage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Show confirmation message
    alert("Your room is booked!");

    // Redirect to the Bill Page
    window.location.href = 'bill.html';
});
