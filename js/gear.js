const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', function() {
    const infoId = this.getAttribute('data-info');
    const info = document.getElementById(infoId);
    
    if (info.style.display === 'block') {
      info.style.display = 'none';
    } else {
      info.style.display = 'block';
    }
  });
});

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const image = box.querySelector('img');

  image.addEventListener('click', function() {
    box.classList.toggle('expanded');
  });
});