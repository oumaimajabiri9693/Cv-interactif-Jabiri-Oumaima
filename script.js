document.addEventListener('DOMContentLoaded', function () {
  console.log('CV loaded with Bootstrap + Custom JS!');

  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('click', function () {
      this.style.transform = 'scale(1.15)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });

  
});