document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  document.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });