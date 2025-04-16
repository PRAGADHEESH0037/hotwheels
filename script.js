function buyNow(toyName, price) {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = `Hi, I'm interested in the Hot Wheels toy: ${toyName} for ₹${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}