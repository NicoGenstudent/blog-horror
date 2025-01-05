window.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--pointerX', e.clientX + 'px');
    document.documentElement.style.setProperty('--pointerY', e.clientY + 'px');
});

document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = form.querySelector('input[name="name"]');
        const messageTextarea = form.querySelector('textarea[name="message"]');
        
        nameInput.value = '';
        messageTextarea.value = '';
    });
});


let binaryBits = ['0', '0', '0', '0', '0', '0', '0'];
let isFirstInput = true;
function toggleBit(index) {
    binaryBits[index] = binaryBits[index] === '0' ? '1' : '0';
    
    document.getElementById('bit' + index).textContent = binaryBits[index];
}

function deleteLastCharacter() {
    const textarea = document.getElementById('comment-textarea');
    textarea.value = textarea.value.slice(0, -1);
}

function appendBinary() {
    const textarea = document.getElementById('comment-textarea');

    if(isFirstInput) {
        textarea.value = '';  
        isFirstInput = false;
    }

    const binaryString = binaryBits.join('');
    const character = String.fromCharCode(parseInt(binaryString, 2));
    textarea.value += character

    binaryBits = ['0', '0', '0', '0', '0', '0', '0'];
    resetButtons();
}


function resetButtons() {
    for (let i = 0; i < 7; i++) {
        document.getElementById('bit' + i).textContent = '0';
    }
}

