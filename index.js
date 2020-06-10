function an(s){
    $(s).addClass('animate');
                //wait for animation to finish before removing class
                $(s).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
                  $(s).removeClass('animate')
                });
}

function playSounds(){
    $(document).on('keydown',function(e){
        switch(e.which){
            case 65:
                new Audio('sounds/bubbles.mp3').play();
                an("#A");
                break;
            case 83:
                new Audio('sounds/clay.mp3').play();
                an("#S");
                break;
            case 68:
                new Audio('sounds/confetti.mp3').play();
                an("#D");
                break;
            case 70:
                new Audio('sounds/corona.mp3').play();
                an("#F");
                break;
            case 71:
                new Audio('sounds/dotted-spiral.mp3').play();
                an("#G");
                break;
            case 72:
                new Audio('sounds/flash-1.mp3').play();
                an("#H");
                break;
            case 74:
                new Audio('sounds/flash-2.mp3').play();
                an("#J");
                break;
            case 75:
                new Audio('sounds/flash-3.mp3').play();
                an("#K");
                break;
            case 76:
                new Audio('sounds/glimmer.mp3').play();
                an("#L");
                break;
                
        }
    })
}

playSounds();
