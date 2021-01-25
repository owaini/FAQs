const toggleFaq = document.querySelectorAll('.faq-toggle');


  toggleFaq.forEach(toogle => {
    toogle.addEventListener('click', () => {
          toogle.parentNode.classList.toggle('active');
    })
})


