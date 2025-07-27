document.addEventListener('DOMContentLoaded', function() {
const inputbox = document.getElementById('inputbox');
const sendBtn = document.getElementById('sendBtn');
const outputbox = document.getElementById('outputbox');

sendBtn.addEventListener('click', function() {
    const message = inputbox.value;
    outputbox.textContent = message;
});
});