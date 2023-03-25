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
            background-color: #f2f2f200;
          }
          
          /* Footer styles */

          footer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 40px 0;
            background-color: #f5f5f5;
          }
          
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
          
          .social-media-links,
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
            margin-bottom: 5px;
          }
          
          .social-media-links a,
          .support-links a,
          .about-links a {
            color: #333;
            text-decoration: none;
            font-size: 14px;
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
          }
          
          
          .email-form-container button[type="submit"] {
            padding: 5px 10px;
            font-size: 14px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          
          .email-form-container button[type="submit"]:hover {
            background-color: #555;
          }
          
        </style>
        <hr>
        <div id="contact" class="contact-container">
            <div class="social-media-container">
                <h2>C.D.C. Network</h2>
                    <ul class="social-media-links">
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
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
                    <button type="submit">Subscribe</button>
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