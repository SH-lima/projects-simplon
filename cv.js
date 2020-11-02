
$(document).on('click', 'section', function(){
    $(this).addClass('active').siblings().removeClass('active')
})
// ------------------------------------------
const sr=ScrollReveal( {
    
    duration : 2000 ,

 } );
 ScrollReveal().reveal( 'h2 ',{
        delay : 10
 });
 ScrollReveal().reveal( 'h3 ', {
     delay : 300
 }, 100 );

ScrollReveal().reveal( 'section ul li ' , {
    delay : 400
}, 500 );
ScrollReveal().reveal( 'h4 ',{
    delay: 350
}, 200 );