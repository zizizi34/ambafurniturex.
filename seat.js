document.querySelector('.cart-btn').addEventListener('click', () => {
  const paymentContainer = document.querySelector('.payment-container');
  
  // Tampilkan pesan
  paymentContainer.classList.add('active');
  
  // Hilangkan pesan setelah 3 detik
  setTimeout(() => {
      paymentContainer.classList.remove('active');
  }, 3000);
});
