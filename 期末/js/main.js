$(document).ready(function() {
    TweenMax.to(".card2", 0, {x:1000,ease:Linear.easeNone});
TweenMax.to(".card3", 0, {x: 1000, ease:Linear.easeNone
});
TweenMax.to(".card4", 0, {x: 500, ease:Linear.easeNone});
TweenMax.to(".progress-bar", 0, {
width: 250,
 ease:Linear.easeNone});
});

$('.card1 .btn-next').click(function(event) {
    turnNext(1);
});
$('.card2 .btn-next').click(function(event) {
    turnNext(2);
});
$('.card3 .btn-next').click(function(event) {
    turnNext(3);
});
$('.card4 .btn-prev').click(function(event) {
    turnPrev(4);
});
$('.card3 .btn-prev').click(function(event) {
    turnPrev(3);
});
$('.card2 .btn-prev').click(function(event) {
    turnPrev(2);
});

function turnNext(n){
    TweenMax.to(".progress-bar",0, {
        width: (1000/4)*(n+1)
    });
    TweenMax.to(".card"+n, 0.5, {
        x: -1000
    });
    TweenMax.to(".card"+(n+1), 0.5, {
        x: 0
    });
}
function turnPrev(n){
    TweenMax.to(".progress-bar", 0, {
        width: 250*n, ease:Linear.easeNone
    });
    TweenMax.to(".card"+n, 0.5, {
       x:1000, ease:Linear.easeNone
    });
    TweenMax.to(".card"+(n-1), 0.5, {
        x: 0
    });
}
