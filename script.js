window.addEventListener('DOMContentLoaded', () => {
    // Animate bars
    document.querySelectorAll('.skill').forEach(skill => {
      const target = parseInt(skill.dataset.percent);
      const barFill = skill.querySelector('.bar-fill');
      const percentageText = skill.querySelector('.percentage');
  
      let current = 0;
      const interval = setInterval(() => {
        if (current <= target) {
          barFill.style.width = `${current}%`;
          percentageText.textContent = `${current}%`;
          current++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  
    // Animate circles
    document.querySelectorAll('.circle-skill').forEach(skill => {
      const target = parseInt(skill.dataset.percent);
      const circle = skill.querySelector('.circle');
      const text = skill.querySelector('span');
  
      let current = 0;
      const interval = setInterval(() => {
        if (current <= target) {
          circle.style.background = `conic-gradient(var(--main-color) ${current}%, #000 ${current}%)`;
          text.textContent = `${current}%`;
          current++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  });
  