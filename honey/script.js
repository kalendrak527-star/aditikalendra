// Handle click or keypress on the heart to go to page2.html
const heart = document.getElementById('heart');
if (heart) {
  const navigate = () => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'page2.html';
    }, 400);
  };

  heart.addEventListener('click', navigate);
  heart.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate();
    }
  });
}

// Handle button click on page2.html
const loveButton = document.getElementById('loveButton');
const loveMessage = document.getElementById('loveMessage');

if (loveButton && loveMessage) {
  loveButton.addEventListener('click', () => {
    loveMessage.classList.add('show');
  });
}

/* Optional fade effect when leaving the page */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});
