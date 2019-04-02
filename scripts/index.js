let textArea = document.getElementById('text-area');
let clickMeBtn = document.getElementById('click-me');

clickMeBtn.addEventListener('click', function() {
    textArea.innerText = 'Hello World!';
});