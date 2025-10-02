function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("October 6, 2025 07:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "🎉 Picnic Time! 🎉";

      // Trigger confetti
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((distance % 1000));

    countdownElement.innerHTML = 
      `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
  }, 50);
}

startCountdown();
