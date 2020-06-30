const acceptbtn = document.getElementById('accept');
acceptbtn.disabled = true;
const agreedchkbx = document.getElementById('agreed');
const style = document.createElement('style');
const script = document.querySelector('script');

agreedchkbx.addEventListener('change', function() {
    if (!agreedchkbx.checked) {
        acceptbtn.disabled = true;
        style.innerHTML = ' ';
    } else {
        acceptbtn.disabled = false;
        style.innerHTML = 'button:hover {' +
            'color: white;' +
            'background-color: rgb(77, 161, 230);' +
        '}';    
        script.parentNode.insertBefore(style, script);
    }
}, false);

acceptbtn.addEventListener('click', function() {
    localStorage.setItem('inited', '1');
    alert('Нажмите на иконку расширения, чтобы начать работу.');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.remove(tabs[0].id);
    }); 
}, false);