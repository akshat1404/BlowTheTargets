let points=0,startTime,elapsedTime,startGame=false;
let audio=new Audio('dunkirk.mp3');
let endAudio=new Audio('inception.mp3');
let x=Math.random()*1280;
let y=Math.random()*400;

$('.btn').css('left',x);
$('.btn').css('top',y);

$('.btn').click(function(){
      // $('h1').text('SHOOT THE CIRCLE');
      let audio=new Audio('gun.mp3');
      audio.play();
      if(startGame)      points++;
      $('.number').text(points);
})

$(document).keypress(function(){
      //$('h1').after().hide();
      startGame=true;
      points=0;
      $('.middle').slideDown(1000);
      $('.lower').slideDown(1000);
      $('.timer').text('Start');
      $('.number').text('Score');
})

$('.btn').hide();

$('.timer').click(function(){
      $('.btn').show();
      $(document).scrollTop($(document).height());//To scroll down page automatically after clicking on start.
      startGame=true;
      startTime=Date.now();
      myInt=setInterval(function(){
            elapsedTime=Math.round((Date.now()-startTime)/1000);
            if(elapsedTime<60){
                  audio.play();
                  $('.timer').text(elapsedTime);
                  x=Math.random()*1280;
                  y=Math.random()*400;
                  $('.btn').css('left',x);
                  $('.btn').css('top',y);
            }else if(elapsedTime==60){
                  audio.pause();
                  //startTime=0;
                  endAudio.play();
                  $(document).scrollTop(0);
                  $('.timer').text('Time Out');
                  if($('.number').text()=="Score")    $('.number').text(0);
                  $('h1').text('Game Over ! Your Score : '+$('.number').text()+' Press Any Key To Reset');
                  // $('h1').after('<h4>Press Any Key To Reset</h4>');
                  $('.btn').hide();
                  $('.middle').slideUp(1000);
                  $('.lower').slideUp(1000);
                  startGame=false;
                  //startTime=0;
                  clearInterval(myInt);
            }
      },1000)   
            // setInterval(function(){
            //       x=Math.random()*1280;
            //       y=Math.random()*400;
      
            //       $('.btn').css('left',x);
            //       $('.btn').css('top',y);
            // },1000)
})

