$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });
  
 
      $(document).ready(function(){
          $('.top-sales-slider').slick({
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: true,
              dots: true,
              responsive: [
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          // Repeat initialization for other sliders if needed
      });
  
      document.addEventListener('DOMContentLoaded', function() {
        const cartButtons = document.querySelectorAll('.add-to-cart-btn');
        const totalCartCount = document.getElementById('total-cart-count');
        let totalItems = 0;
    
        cartButtons.forEach(button => {
            button.addEventListener('click', function() {
                totalItems += 1;
                totalCartCount.textContent = totalItems;
            });
        });
    });
    