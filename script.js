const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const sendButton = document.getElementById('sendRequest');
const apiKeyInput = document.getElementById('apiKey');
const apiLinkInput = document.getElementById('apiLink');

fileInput.addEventListener('change', function(event) {
    const files = event.target.files;
    
    if (files.length > 0) {
        const file = files[0];
        const fileName = file.name;
        const fileType = file.type || 'Unknown type';
        fileInfo.textContent = `File: ${fileName} (${fileType})`;
    } else {
        fileInfo.textContent = '';
    }
});

//add later
function send_request() {
    console.log('Send request function called');
}

sendButton.addEventListener('click', send_request);
