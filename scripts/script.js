const spin = document.getElementById('spin')

spin.addEventListener('command', function(ev) {
    if (ev.command == '--step-up') {
        spin.stepUp();
    } else {
        spin.stepDown();
    }
});
