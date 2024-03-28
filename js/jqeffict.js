
function OneTxtOne() {
    $('.one-oneTxt-one').text('IMMERSE yourself');
    $('.one-oneTxt-one').fadeIn(2000);
}
function OneTxtTwo() {
    $('.one-oneTxt-two').text('In EXTRAORDINARY dining ambiance');
    $('.one-oneTxt-two').fadeIn(2000);
}
/*
function TwoOne() {
    $('.img-two > div').text('000000');
}
*/



$(document).ready(function () {

    OneTxtOne();
    setTimeout(() => {
        OneTxtTwo();
    }, 1500);


    TwoOne();
});


















