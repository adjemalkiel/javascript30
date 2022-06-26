(function(){
    const base = document.getElementById('base');
    const blur = document.getElementById('blur');
    const spacing = document.getElementById('spacing');
    const root = document.documentElement;

    root.oninput = function(){
        root.style.setProperty(`--${base.name}`, base.value); // e.g: --base: #ffc600
        root.style.setProperty(`--${blur.name}`, blur.value + (blur.dataset.sizing || 'px')); // e.g: --blur: 0px
        root.style.setProperty(`--${spacing.name}`, spacing.value + (spacing.dataset.sizing || 'px')); // e.g: --spacing: 10px
    };
}())