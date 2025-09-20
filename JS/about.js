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
        document.addEventListener('DOMContentLoaded', function() {
      const modal = document.getElementById('reportModal');
      const openBtns = [document.getElementById('ctaReport'),document.getElementById('reportNow'),document.getElementById('finalReport')];
      const closeBtns = [document.getElementById('modalClose'),document.getElementById('modalCancel')];
      const form = document.getElementById('reportForm');
      const formMsg = document.getElementById('formMsg');
      function openModal(){modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
      function closeModal(){modal.setAttribute('aria-hidden','true');document.body.style.overflow='';form.reset();formMsg.textContent=''}
      openBtns.forEach(b=>b&&b.addEventListener('click',openModal));
      closeBtns.forEach(b=>b&&b.addEventListener('click',closeModal));
      modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
      form.addEventListener('submit',e=>{
        e.preventDefault();formMsg.textContent='Submitting...';
        setTimeout(()=>{
          formMsg.textContent='Thank you! Your report has been received. (Demo)';
          const r=document.getElementById('statReports');
          if(r){let n=parseInt(r.textContent.replace(/,/g,''))||0;r.textContent=(n+1).toLocaleString('en-IN')}
          setTimeout(closeModal,1400);
        },900);
      });
      // small reveal
      document.querySelectorAll('.feature,.step,.impact-card,.hero-card,.card-content').forEach((el,i)=>{
        el.style.opacity=0;el.style.transform='translateY(10px)';
        setTimeout(()=>{el.style.transition='all 600ms';el.style.opacity=1;el.style.transform='none'},120*i);
      });
    });