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


// function mode() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

const myTags = [
  'JavaScript', 'CSS', 'HTML',
  'C', 'C++', 'React',
  'Python', 'Java', 'git',
  'django', 'Flutter','MySQL'
];

// var tagCloud = TagCloud('.content', myTags);

var tagCloud = TagCloud('.content', myTags,{
  radius: 300,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true

}); 

// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];

document.querySelector('.content').style.color = "#34A853";