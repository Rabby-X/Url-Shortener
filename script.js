document.getElementById('shortenButton').addEventListener('click', function() {
    shortenUrl();
});

function shortenUrl() {
    var originalUrl = document.getElementById("urlInput").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    var shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            shortenedUrlTextarea.value = data;
            document.getElementById('output').style.display = 'block'; // Show output after shortening
        })
        .catch(error => {
            shortenedUrlTextarea.value = "Error: Unable to shorten URL!";
        });
}

document.getElementById('copyButton').addEventListener('click', function() {
    const shortenedUrlField = document.getElementById('shortenedUrl');
    shortenedUrlField.select();
    document.execCommand('copy');
    alert('URL copied to clipboard!');
});

// Update the contact button function
document.getElementById('contactButton').addEventListener('click', function() {
    window.open('https://t.me/Rabbyxyz'); // Replace with your desired link
});