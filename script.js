function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("October 6, 2025 07:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "🎉 00:00:00:00 🎉";

      // Confetti
      confetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.6 }
      });
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format as DD:HH:MM:SS
    countdownElement.innerHTML =
      `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);
}

startCountdown();
