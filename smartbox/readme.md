# Smartbar
Provide smart toggle button group for flexible user action and an easy-to-use smart button javascript-event.

## Needs
* Bootstrap (current-version is 3.5.1)
* Font awesome icon

It can be used like below

```html
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>

<body>
    <!--
        your document
    -->

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="smartbar.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
</body>
</html>
```

## Smart Buttons
Smartbar are available for no matter how many buttons, as well as Smartbar can change the color (e.g. primary, secondary, success, danger, info, dark)

<iframe
  src="smartbar.example.html"
  style="min-width:100%; min-height:300px;"
></iframe>

```html
    <div class="pt-3">
        <div class="btn-toolbar smart-bar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" active="off" class="btn btn-primary" title="smart-btn1" id="smart-btn1">
                    <i class="fas fa-plus"></i>
                </button>
                <button type="button"  active="off" class="btn btn-primary" title="smart-btn2" id="smart-btn2">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button"  active="off" class="btn btn-primary" title="smart-btn3" id="smart-btn3">
                    <i class="fas fa-bars"></i>
                </button>
                <button type="button"  active="off" class="btn btn-primary" title="smart-btn4" id="smart-btn4">
                    <i class="fas fa-arrows-alt"></i>
                </button>
                <button type="button"  active="off" class="btn btn-primary" title="smart-btn5" id="smart-btn5">
                    <i class="fas fa-ad"></i>
                </button>
            </div>
        </div>
    </div>
```

## Disable Button
If you want to disable the function of the button, you have to remove attribute of action. (e.g. action="on|off")
To disable attribute of action can be used, when you want to use modal.
See below code.

```html
    ...
<button type="button" class="btn btn-primary" title="smart-btn1" id="smart-btn1">
    ...
```

## Events
All buttons are had an easy-to-use event and can be used as jquery or basic javascript. Each button should have a different tag id.
If the id is the same, it doesn't work.

It can be used like below

```javascript
//Example jquery
//click evnet

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

```