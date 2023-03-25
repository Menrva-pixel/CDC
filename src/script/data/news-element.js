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
          }

          .news-section2 .news-item {
            margin: 10px;
            background: rgba(1, 1, 1, 0.66);
            border-radius: 5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.9px);
            -webkit-backdrop-filter: blur(4.9px);
            border: 1px solid rgba(1, 1, 1, 0.68);
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
          .news-item {
            display: flex;
            padding: 5px;
            margin-bottom: 10px;
            
          }         
          .news-image {
            max-width: 240px;
            max-height: 240px;
            margin-right: 20px;
            overflow: hidden;
            object-fit: contain;
          }

          .news-content h3 {
            text-align: start;
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
            font-size: 18px !important;
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
  
    async connectedCallback() {

      const apiKey = 'f0ff6c118ab2469a93e751dbc619ee8d';
      const latestNewsUrl = 'https://newsapi.org/v2/top-headlines?' +
        `country=us&` +
        `pageSize=5&` +
        `apiKey=${apiKey}`;

      const currentNewsUrl = 'https://newsapi.org/v2/top-headlines?' +
        `category=science&` +
        `pageSize=5&` +
        `apiKey=${apiKey}`;
      
  
        try {
            /* ----------------------------untuk berita terbaru---------------------------------- */
            const latestNewsResponse = await fetch(latestNewsUrl);
            const latestNewsData = await latestNewsResponse.json();
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
          
            /* ----------------------------untuk berita terkini---------------------------------- */
            const currentNewsResponse = await fetch(currentNewsUrl);
            const currentNewsData = await currentNewsResponse.json();
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
                  <p class="description">${description}</p>
                </div>
              `;
  
          this.shadowRoot.getElementById('berita-terkini').appendChild(newsItem);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  customElements.define('news-element', NewsElement);
  
  async function getNewsApiKey() {
    const response = await fetch('news-api-key.txt');
    const apiKey = await response.text();
    return apiKey.trim();
  }
  