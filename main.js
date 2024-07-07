if( $(document).height() <= $(window).height() ){		
    $(".page-footer").addClass("fixed-bottom");
  }

function showDetails(productName) {
    alert('Вы выбрали ' + productName);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Сообщение отправлено!');
    document.getElementById('contactForm').reset();
});

document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});
window.onscroll = () => {
    const navbar = document.querySelector('.container');
    const y = window.scrollY

    if (y >100) {
        navbar.classList.add('navbar-fixed')
        
    } else if (y <100) {
        navbar.classList.remove('navbar-fixed')
    }
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }