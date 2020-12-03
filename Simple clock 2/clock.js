const svg = document.querySelector('svg');
const currentTime = new Date();

svg.style.setProperty('--start-minutes', currentTime.getMinutes());
svg.style.setProperty('--start-hours', currentTime.getHours() % 12);
