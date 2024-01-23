

$('.fa-bars').click(function () {
    $('.styleUl').animate({width : '400px'} ,1000);
    $('#markMove').animate({marginLeft : '400px'} ,1000);
    $('#Egyption').animate({marginLeft : '400px'} ,1000);
})
$('.fa-xmark').click(function () {
    $('.styleUl').animate({width : '0'} ,1000);
    $('#markMove').animate({marginLeft : '0'} ,1000);
    $('#Egyption').animate({marginLeft : '0'} ,1000);
})


$('#unstyled a').click(function (e) {
    let getattr = $(this).attr('href');
    let getOffset = $(getattr).offset().top;
    $('html,body').animate({scrollTop :getOffset },1000);
    $(this).css({color:'red'});
    $(this).siblings().css({color:'#fff'});
})




$('#gettingStarted').countdown('2015/01/01', function(event) {
    // $(this).html(event.strftime('%d days %H:%M:%S'));
    $(this).html(event.strftime(`
    <div class="border border-1 border-white w-25 h-25 mx-5 d-flex justify-content-center align-items-center">
    <p class="text-info">%d days</p>
    </div>
    <div class="border border-1 border-white w-25 h-25 mx-5 d-flex justify-content-center align-items-center">
    <p>%H:</p>
    </div>
    <div class="border border-1 border-white w-25 h-25 mx-5 d-flex justify-content-center align-items-center">
    <p>%M:</p>
    </div>
    <div class="border border-1 border-white w-25 h-25 mx-5 d-flex justify-content-center align-items-center">
    <p>%S</p>
    </div>
    
    `));
  });


  








$('.singerToggle').click(function (e) {
    
   $('.disignLorem').not($(e.target).next()).slideUp(1000);
   $(e.target).next().slideToggle(1000)
    
})

$('#getting-started').countdown(`2024/12/13`, function(event) {
    $(this).html(event.strftime(`
    <div class="col-md-3 ">
    <section class="border border-1 border-white ">
    <p class="">%D days </p>
    </section>
    </div>
    <div class="col-md-3 ">
    <section class="border border-1 border-white ">
    <p> %H Hours</p>
    </section>
    </div>
    <div class="col-md-3 ">
    <section class="border border-1 border-white ">
    <p>%M Minutes</p>
    </section>
    </div>
    <div class="col-md-3 ">
    <section class="border border-1 border-white ">
    <p>%S seconde</p>
    </section>
    </div>
    
    `));
  })
let greetNumber = 100;
$('textarea').keyup(function () {
    let getchar = $(this).val().length
    let countLenght =  greetNumber - getchar ;
    document.getElementById('counter').innerHTML=countLenght;
    if (countLenght <= 0) {
    document.querySelector('textarea').setAttribute('disabled' , ' ');

    document.getElementById('counter').innerHTML= `your available character finished`;

    clrTextArea();
    }
    console.log(countLenght);
})
function clrTextArea(params) {
    document.querySelector('textarea').value = '' 
}
