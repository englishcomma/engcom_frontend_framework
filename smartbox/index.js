//Example jquery

$('#smart-btn1').on('smartclick', function(e) {
    console.log(e.target.id + ' is clicked!')
});

$('#smart-btn2').on('smartclick', function(e) {
    console.log(e.target.id + ' is clicked!')
});

$('#smart-btn3').on('smartclick', function(e) {
    console.log(e.target.id + ' is clicked!')
});

$('#smart-btn4').on('smartclick', function(e) {
    console.log(e.target.id + ' is clicked!')
});

$('#smart-btn5').on('smartclick', function(e) {
    console.log(e.target.id + ' is clicked!')
});

//cancel event

$('#smart-btn1').on('smartclickcancel', function(e) {
    console.log(e.target.id + ' is canceled!')
});

$('#smart-btn2').on('smartclickcancel', function(e) {
    console.log(e.target.id + ' is canceled!')
});

$('#smart-btn3').on('smartclickcancel', function(e) {
    console.log(e.target.id + ' is canceled!')
});

$('#smart-btn4').on('smartclickcancel', function(e) {
    console.log(e.target.id + ' is canceled!')
});

$('#smart-btn5').on('smartclickcancel', function(e) {
    console.log(e.target.id + ' is canceled!')
});
