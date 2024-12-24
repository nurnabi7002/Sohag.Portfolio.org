// Blinking Animation 


  let dot = document.getElementById("dot");
  let visible = 1; 

  setInterval(function() {
    if (visible === 1) {
      dot.style.opacity = 0; 
     visible = 0;
    } else {
      dot.style.opacity = 1; 
      visible = 1; 
    }
  }, 1000); // প্





// Typing Animation 

const span = document.querySelector(".typing");
    const words = [" Digital Marketer... "," Canva Designer... ", " Logo Designer... ", " Data Entry Expert... "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];
      const displayedText = isDeleting 
        ? currentWord.substring(0, charIndex--) 
        : currentWord.substring(0, charIndex++);
      
      span.textContent = displayedText;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // পূর্ণ লেখাটি ১ সেকেন্ড থাকবে
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // পরবর্তী শব্দে যাওয়া
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }

    typeEffect();