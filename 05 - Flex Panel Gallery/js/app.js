(function(){
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => panel.classList.toggle('open')),
        panel.addEventListener('transitionend', (e) => {
            if (e.propertyName.includes('flex')) { // event.propertyName === 'flex' || 'flex-grow'
                panel.classList.toggle('open-active');
            }
        })
    });
}())