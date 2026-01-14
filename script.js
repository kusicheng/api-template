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

async function send_request() {
    //console.log('Send request function called');
    const apiKey = apiKeyInput.value;
    const apiLink = apiLinkInput.value;
    const file = fileInput.files[0];
    if (!apiKey || !apiLink || !file) {
        alert('Missing inputs');
        return;
    }

    const formData = new FormData();
    
    if (apiKey) formData.append('apiKey', apiKey);
    if (apiLink) formData.append('apiLink', apiLink);
    if (file) formData.append('file', file);
    
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    
    try {
        const response = await fetch('http://localhost:1001/upload', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (response.ok) {
            alert(`Success! Request stored with tag: ${result.tag}. Please copy and do not share your tag for privacy.`);
            
            apiKeyInput.value = '';
            apiLinkInput.value = '';
            fileInput.value = '';
            fileInfo.textContent = '';
        } else {
            console.error('Error result:', result.message);
            alert(`Error: ${result.message}. Copy to discord admin for support.`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert(`Failed to send request: ${error.message}\nMake sure the server is running on localhost:1001`);
    } finally {
        sendButton.disabled = false;
        sendButton.textContent = 'Send request';
    }
}

sendButton.addEventListener('click', send_request);