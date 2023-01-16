$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});


function mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const myTags = [
  'JavaScript', 'CSS', 'HTML',
  'C', 'C++', 'React',
  'Python', 'Java', 'git',
  'django', 'Node.js', 'OpenCV',
  'GCP', 'MySQL', 'jQuery',
];

// var tagCloud = TagCloud('.content', myTags);

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true

}); 

var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;