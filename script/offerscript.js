//Slajdy
$('.slide-presentation').each(function() {
    var $this   = $(this);
    var $group  = $this.find('.slide-group');
    var $slides = $this.find('.slide');
    var buttonArray  = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      // If it is the current slide / animating do nothing
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      buttonArray[currentIndex].removeClass('active');
      buttonArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      // Position new slide to left (if less) or right (if more) of current
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

      $group.animate( {left: animateLeft}, function() {
        $slides.eq(currentIndex).css( {display: 'none'} );
        $slides.eq(newIndex).css( {left: 0} );
        $group.css( {left: 0} );
        currentIndex = newIndex;
      });
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }

    $.each($slides, function(index) {

      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide-buttons');
      buttonArray.push($button);
    });

  advance();

});

var test = document.querySelectorAll('.photo-box');
console.log(test.length);
/*/close
function closeInfo(position){
  test[position].classList.add('photo-box');
  var object = document.querySelector('.photo-active');
  object.classList.add("photo-box");
  object.classList.remove("photo-active");
}
//open
function openInfo(position){
  var object = document.querySelector('.photo-box');
  object.classList.add('photo-active');
  object.classList.remove('photo-box');
}*/

function openDescription(position){
  test[position].classList.add('photo-active');
  test[position].classList.remove('photo-box');
}

function closeDescryption(){
  var temp = document.getElementsByClassName('photo-active');
  console.log(temp);
  temp[0].classList.add('photo-box');
  temp[0].classList.remove('photo-active');
}


