// Update price when an item is selected
document.getElementById('item').addEventListener('change', function() {
  const selectedItem = this.options[this.selectedIndex];
  const price = selectedItem.getAttribute('data-price');
  document.getElementById('priceDisplay').innerText = `Price: $${price}`;
});

// Show KBZ Pay button if selected
document.getElementById('payment_method').addEventListener('change', function() {
  const paymentMethod = this.value;
  if (paymentMethod === 'KBZ Pay') {
    document.getElementById('kbz-pay-btn').style.display = 'block';
  } else {
    document.getElementById('kbz-pay-btn').style.display = 'none';
  }
});

// Handle KBZ Pay Payment Logic
document.getElementById('payWithKBZ').addEventListener('click', function() {
  const formData = new FormData(document.getElementById('transferForm'));

  const paymentDetails = {
    item: formData.get('item'),
    sender_name: formData.get('sender_name'),
    sender_phone: formData.get('sender_phone'),
    id_last5: formData.get('id_last5'),
    payment_method: 'KBZ Pay',
  };

  // Send to the backend for payment processing
  fetch('/initiate-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentDetails),
  })
  .then(response => response.json())
  .then(data => {
    if (data.redirect_url) {
      window.location.href = data.redirect_url; // Redirect to KBZ Pay
    } else {
      alert('Payment initiation failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred.');
  });
});
