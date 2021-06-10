let isChrome = navigator.userAgent.toLowerCase().match(/chrome/);
let doodle = document.querySelector('css-doodle');
if (doodle && isChrome) {
    doodle.use = 'var(--rule)';
}