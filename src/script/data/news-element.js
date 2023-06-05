import $ from 'jquery';

class NewsElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>

        #berita-inter{
            display: flex;
            flex-direction: row;
        }

        .news-section {
            display: flex;
            flex-direction: column;
            align-item: center;
            content-align: center;
            height: 100%;
            padding: 50px;
            margin: 0 20px;
            font-family: 'Roboto', sans-serif;
            background: rgba(1, 1, 1, 0.66);
            border-radius: 10px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.9px);
            -webkit-backdrop-filter: blur(4.9px);
            border: 1px solid rgba(1, 1, 1, 0.68);
          }

          .news-section2 {
            width: 400px;
            height: auto;  
          }

          hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #c7c7c7, rgba(0, 0, 0, 0));
          }

          .news-section2 .news-item {
            display: flex;
            flex-direction: column;
            margin: 10px;
            background: rgba(1, 1, 1, 0.66);
            border-radius: 5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.9px);
            -webkit-backdrop-filter: blur(4.9px);
            border: 1px solid rgba(1, 1, 1, 0.68);
            max-height: 500px;
          }

          .news-section2 h3 {
            font-size: 6px;
          }
          
        .news-section h2{
            text-align: center;
            font-family: 'Orbitron', sans-serif;
            color: #ebe0e0;
            margin-bottom: 50px;
         }

         @media screen and (max-width: 768px) {
          .news-section {
              margin: 0 10px;
              padding: 20px;
              border-radius: 0;
              height: auto;
          }

          .news-item {
            align-items: center;
            content-align: center;
          }

          .news-content h3 {
            float: right;
            font-size: 12px !important;
            overflow: hidden;
            text-align: justify;
          }

          #berita-inter {
            margin: 0;
          }
          
          .news-image {
            max-width: 100px;
            max-height: 95px;
          }
          
          .news-section2 {
            display: none;
          }

          .description {
            display: none;
          }
         }


          .news-item {
            display: flex;
            padding: 5px;
            margin-bottom: 10px;
            
          }         
          .news-image {
            max-width: 100px;
            max-height: 95px;
            margin-right: 20px;
            overflow: hidden;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-repeat: no-repeat;
           background-position: 50% 50%;
          }

          .news-content h3 {
            text-align: start;
          }

          #berita-terkini > .news-item > .news-content h3{
            font-size: 12px;
          }

          h2{
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            color: #ebe0e0;
          }        

          h3{
            text-align: center;
            font-family: 'Orbitron', sans-serif;
            color: #ebe0e0;
            font-size: 28px;
          }
          
          .news-content h3 {
            font-size: 24px;
            margin-top: 0;
            font-weight: 600;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
          }
          
          .published-date {
            font-size: 14px;
            color: #999;
            margin-bottom: 10px;
          }
          
          .description {
            margin-bottom: 0;
            text-align: justify;
            padding: auto 50px ;
          }
        </style>
        <hr>  
        <h3>International News</h3>
     <div id="berita-inter">   
        <div class="news-section">
            <h2>Berita Terbaru</h2>
            <div class="news-list" id="berita-terbaru"></div>
        </div>
        <div class="news-section2">
            <h2>Berita Terkini</h2>
            <div class="news-list" id="berita-terkini"></div>
        </div>
     </div> 
      `;
    }
  
    connectedCallback() {
      const apiKey = 'f0ff6c118ab2469a93e751dbc619ee8d';
      const latestNewsUrl = 'https://newsapi.org/v2/top-headlines?' +
        `country=us&` +
        `pageSize=5`;
    
      const currentNewsUrl = 'https://newsapi.org/v2/top-headlines?' +
        `category=science&` +
        `pageSize=4`;
    
      $.when(
        $.ajax({
          url: latestNewsUrl,
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        }),
        $.ajax({
          url: currentNewsUrl,
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        })
      ).done((latestNewsResponse, currentNewsResponse) => {
          const latestNewsData = latestNewsResponse[0];
          const latestNewsArticles = latestNewsData.articles;
    
          for (const article of latestNewsArticles) {
            const title = article.title;
            const description = article.description;
            const imageUrl = article.urlToImage;
            const publishedAt = new Date(article.publishedAt).toLocaleDateString();
    
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
              <div class="news-image"><img src="${imageUrl}" alt="${title}"></div>
              <div class="news-content">
                <h3>${title}</h3>
                <p class="published-date">${publishedAt}</p>
                <p class="description">${description}</p>
              </div>
            `;
    
            this.shadowRoot.getElementById('berita-terbaru').appendChild(newsItem);
          }
    
          const currentNewsData = currentNewsResponse[0];
          const currentNewsArticles = currentNewsData.articles;
    
          for (const article of currentNewsArticles) {
            const title = article.title;
            const description = article.description;
            const imageUrl = article.urlToImage;
            const publishedAt = new Date(article.publishedAt).toLocaleDateString();
    
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
              <div class="news-image"><img src="${imageUrl}" alt="${title}"></div>
              <div class="news-content">
                <h3>${title}</h3>
                <p class="published-date">${publishedAt}</p>
              </div>
            `;
    
            this.shadowRoot.getElementById('berita-terkini').appendChild(newsItem);
          }
        }).fail((error) => {
          console.error(error);
        });
    }}

  customElements.define('news-element', NewsElement);
