class ContactSection extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        const template = `
        <style>
        .contact-container {
            font-family: 'Roboto', sans-serif;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            margin: 20px auto;
            max-width: 100%;
            gap: 90px;
            padding: 40px;   
            background: rgba(1, 1, 1, 0.66);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.9px);
            -webkit-backdrop-filter: blur(4.9px);
            border: 1px solid rgba(1, 1, 1, 0.68);
          }
          
          /* Footer styles */

          footer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 40px 0;
            background-color: #f5f5f5;
          }

          hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #c7c7c7, rgba(0, 0, 0, 0));
          }
          
          .social-media-links,
          .social-media-container,
          .support-container,
          .about-container,
          .email-form-container {
            flex-basis: calc(25% - 20px);
            margin-bottom: 30px;
          }
          
          .social-media-container h2,
          .support-container h2,
          .about-container h2,
          .email-form-container h2 {
            margin-bottom: 10px;
            font-family: 'Orbitron', sans-serif;
          }
          
          .support-links,
          .about-links {
            list-style: none;
            margin: 0;
            padding: 0;
            font-weight: 600;
            color: #fff;
          }
          
          .social-media-links li,
          .support-links li,
          .about-links li {
            margin-bottom: 20px;
            list-style-type: none;
          }

          .social-media-links {
            padding-left: 0px;
            
          }
          
          .social-media-links a,
          .support-links a,
          .about-links a {
            position: relative;
            color: #646464;
            text-decoration: none;
            font-size: 14px;
            margin: 5px auto
            margin-bottom: 10px;
          }

          .social-media-links li img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\
            width: 30px;
            height: 30px;
          }
          
          .social-media-links li a {
            font-size: 14px;
            color: #646464;
            text-decoration: none;
          }
          
          .social-media-links li a:hover,
          .support-links a:hover,
          .about-links a:hover {
            color: #007bff;
          }
          
          .email-form-container form {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 50px;
          }
          
          .email-form-container label {
            margin-right: 10px;
          }
          
          .email-form-container input[type="email"] {
            flex-grow: 1;
            padding: 5px 10px;
            font-size: 14px;
            border: none;
            border-bottom: 2px solid #ccc;
            background: transparent;
            color: #03a1fc;
          }

          .email-form-container input[type="email"]:focus {
            outline: none;
          }
          
          
          .email-form-container button[type="submit"] {
            position: relative;
            background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 5px #eee;
            border-radius: 10px;
            display: block;
          }

          .email-form-container button[type="submit"]:hover {
            background-position: right center; 
            color: #fff;
            text-decoration: none;
          }
                 
          .email-form-container button[type="submit"] svg {
            position: absolute;
            width: 25px;
            height: 25px;
            top: 50%;
            right: 10px; 
            transform: translateY(-50%);
          }
                 
          .email-form-container button[type="submit"]:hover {
            background-color: #555;
          }

          @media screen and (max-width: 768px) {
            .contact-container {
              display: block;
            }
          
            .social-media-container,
            .support-container,
            .about-container,
            .email-form-container {
              flex-basis: 100%;
              text-align: center;
              margin-bottom: 40px;
            }


            .social-media-links,
            .support-links,
            .about-links {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          
            .social-media-links li,
            .support-links li,
            .about-links li {
              margin-bottom: 15px;
            }
          
            .email-form-container form {
              align-items: center;
            }
          
            .email-form-container label {
              margin-right: 0;
              margin-bottom: 10px;
            }
          
            .email-form-container input[type="email"] {
              max-width: 100%;
            }
          }
          
        </style>
        <div id="contact" class="contact-container">
            <div class="social-media-container">
                <h2>C.D.C.</h2>
                <ul class="social-media-links">
                  <li>
                    <img src="https://img.icons8.com/dotty/80/null/facebook-new.png"/>
                    <a href="https://www.facebook.com">Facebook</a>
                  </li>
                  <li>
                    <img src="https://img.icons8.com/dotty/80/null/instagram-new.png"/> 
                    <a href="https://www.facebook.com">Instagram</a>
                  </li>
                  <li>
                    <img src="https://img.icons8.com/dotty/80/null/linkedin.png"/>
                    <a href="https://www.facebook.com">LinkedIn</a>
                  </li>
                  <li>
                  <img src="https://img.icons8.com/wired/64/null/github.png"/>
                  <a href="https://www.facebook.com">GitHub</a>
                </li>
                </ul>              
                </div>
            <div class="support-container">
            <h2>Support</h2>
                <ul class="support-links">
                    <li><a href="https://www.example.com/support/faq">FAQ</a></li>
                    <li><a href="https://www.example.com/support/contact">Contact Us</a></li>
                    <li><a href="https://www.example.com/support/help">Help Center</a></li>
                </ul>
            </div>

            <div class="about-container">
                <h2>About Us</h2>
                <p>We are a company that specializes in providing high-quality products and services to our customers.</p>
                <ul class="about-links">
                    <li><a href="https://www.example.com/about/mission">Our Mission</a></li>
                    <li><a href="https://www.example.com/about/team">Our Team</a></li>
                    <li><a href="https://www.example.com/about/careers">Careers</a></li>
                </ul>
            </div>

            <div class="email-form-container">
                <h2>Get in Touch</h2>
                <form>
                    <label for="email">Enter Your Email:</label>
                    <input type="email" id="email" name="email" required>
                    <button type="submit">Subscribe <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="Arrow / Arrow_Up_Right_MD">
                        <path id="Vector" d="M7 17L17 7M17 7H9M17 7V15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </svg></button>
                </form>
            </div>
          </div>
          <hr>
        </div>
      `;

        shadowRoot.innerHTML = template;
    }
}

customElements.define('contact-section', ContactSection);