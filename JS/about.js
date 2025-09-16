// 🌈 Random border glow effect for each card
    const cards = document.querySelectorAll(".support-card");

    function changeColors() {
      cards.forEach(card => {
        const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
        card.style.borderColor = color;
        card.style.boxShadow = `0 4px 15px ${color}55`;
      });
    }

    setInterval(changeColors, 2000); // Change colors every 2 seconds

    // Fake chatbot alert
    function openChat() {
      alert("🤖 Chatbot coming soon! (Integrate Dialogflow, Rasa, or custom bot here)");
    }