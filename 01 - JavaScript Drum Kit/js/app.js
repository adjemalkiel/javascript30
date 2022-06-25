(function() {
    function animateKey(element) {
        const key = element.dataset.key; // e.g: data-key="65"
        element.classList.add('playing');
        play(key);
        setTimeout(function (){
            element.classList.remove('playing');
        }, 70); // match css transition time
    }

    function play(key) {
        const audio = document.querySelector(`audio[data-key="${key}"]`);
        audio.currentTime = 0; //rewind to start
        audio.play();
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    const kbds = Array.from(document.getElementsByTagName('kbd')); // get all kbd tags

    keys.forEach(key => key.addEventListener('click', () => animateKey(key))); // click event
    window.addEventListener('keydown', (e) => { // keydown event
        kbds.find(function(kbd) {
            if(kbd.innerText === e.key.toUpperCase()){
                animateKey(kbd.closest('div')); // animate ancestor tag to kbd tag in DOM
            }
        });
    });
}())