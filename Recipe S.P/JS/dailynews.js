// news.js

const apiKey = '67835cb17e8b44d68320acf8ab6f21d2'; // actual NewsAPI key

document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('news-list');

    // Fetching hotel industry news
    fetch(`https://newsapi.org/v2/everything?q=hotel+industry&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(news => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <a href="${news.url}" target="_blank">${news.title}</a> 
                        <span>(${new Date(news.publishedAt).toLocaleDateString()})</span>
                    `;
                    newsList.appendChild(li);
                });
            } else {
                newsList.innerHTML = "<li>No news articles found for the hotel industry.</li>";
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsList.innerHTML = "<li>Failed to load news articles. Please try again later.</li>";
        });
});
