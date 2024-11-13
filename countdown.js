// Set the target date and time for November 30, 12:00 AM
const targetDate = new Date('November 30, 2024 00:00:00').getTime();

// Function to update the countdown
function updateCountdown() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the difference in time between now and the target date
  const difference = targetDate - now;

  // Calculate days, hours, minutes, and seconds left
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the countdown in the #countdown element with colons between each unit
  document.getElementById('countdown').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

  // If the countdown is over, display a message
  if (difference < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'The event has started!';
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
