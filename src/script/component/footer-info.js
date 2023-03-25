class FooterInfo extends HTMLElement {
    constructor() {
      super();

      this.shadowDOM = this.attachShadow({ mode: 'open' });
    
  
      this.shadowRoot.innerHTML = `
        <style>
          /* CSS Style */
          footer {
            background: #03a1fc00;
            padding: 1rem;
          }
          
          .social-media {
            display: flex;
            justify-content: center;
          }
          
          .social-media a {
            color: #333;
            font-size: 1.2rem;
            margin-right: 1rem;
          }
          
          .social-media a:hover {
            color: #03a1fc;
          }
          
          .sources {
            text-align: center;
            margin: 1rem 0;
          }
          
          .sources a {
            color: #333;
            font-size: 0.8rem;
            margin-right: 1rem;
          }
          
          .sources a:hover {
            color: #03a1fc;
          }
          h3 {
            font-family: 'Orbitron', sans-serif;
            font-size: 28px;
            text-align: center;
          }
          
          .sponsors {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            justify-items: center;
            align-items: center;
            margin: 50px auto;
            max-width: 800px;
          }
          
          .sponsor-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .sponsor-name {
            margin-top: 10px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            color: #03a1fc;
          }
          
          .sponsors img {
            height: 50px;
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
          }

          @media (max-width: 768px) {

            h3 {
                text-align: center;
            }

            .sponsors {
                display: flex;
            }
            
            .sponsor-container {
                 margin-bottom: 20px;
            }
            
            .sponsor-name {
                margin-top: 5px;
                font-size: 18px;
                color: #03a1fc;
            }
            
            .sponsors img {
                 height: 40px;
             }
            }
          
        </style>
        <footer>
          <div class="social-media">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
            <hr>
            <h3>Partners</h3>
            <div class="sponsors">
                <div class="sponsor-container">
                    <img src="https://img.icons8.com/dotty/80/null/globe.png" alt="fake-sponsor1"/>
                    <p class="sponsor-name">SonarLint</p>
                </div>
                <div class="sponsor-container">
                    <img src="https://img.icons8.com/ios/50/null/rocket--v1.png" alt="fake-sponsor2"/> 
                    <p class="sponsor-name">Rodudance</p>
                </div>
                <div class="sponsor-container">
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/null/external-coding-online-learning-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="fake-sponsor3"/>
                    <p class="sponsor-name">SoliCode</p>
                </div>
            </div>
        </footer>
      `;
    }
  }

  customElements.define("footer-info", FooterInfo);
  