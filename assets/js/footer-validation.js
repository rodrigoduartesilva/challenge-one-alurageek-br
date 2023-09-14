let inputName = document.querySelector('#name-input');
let nameErrorMsg = document.querySelector('#name-error');
let msg = document.querySelector('#msg');
let taErrorMsg = document.querySelector('#ta-error-msg');
let formBtn = document.querySelector('#footer-sup-btn');

inputName.addEventListener('blur', () => {
    if(!inputName.validity.valid) {
        nameErrorMsg.style.display = 'inline-block';
    } else {
        nameErrorMsg.style.display = 'none';
    }
});

msg.addEventListener('blur', () => {
    if(!msg.validity.valid) {
        taErrorMsg.style.display = 'inline-block';
    } else {
        taErrorMsg.style.display = 'none';
    }
});

document.addEventListener('input', () => {
    if(inputName.validity.valid && msg.validity.valid) {
        formBtn.removeAttribute('disabled');
    } else {
        formBtn.setAttribute('disabled', 'disabled');
    }
});