class BackToTop extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = `
      <style>
        #back-to-top-btn {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          font-size: 16px;
          padding: 10px 20px;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 25px;
          cursor: pointer;
          z-index: 9999;
          width: auto;
          height: auto;
        }
        
        #back-to-top-btn:hover {
          background-color: #0069d9;
        }
      </style>
      <button id="back-to-top-btn"><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Arrow_Up_MD"> <path id="Vector" d="M12 19V5M12 5L6 11M12 5L18 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></button>
    `;

    const button = shadow.querySelector('#back-to-top-btn');

    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });

    button.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
}

customElements.define('back-to-top', BackToTop);
