class BackToTop extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({
      mode: 'open'
    });

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
          background-color: #00000000;
          color: #fff;
          border-radius: 25px;
          cursor: pointer;
          z-index: 9999;
          width: auto;
          height: auto;
          transition: all 0.3s ease;
          transform: translateY(-10px);
          animation: bounce 1s infinite;
          animation-fill-mode: both;
        }

        @media only screen and (max-width: 768px) {
            #back-to-top-btn {
            bottom: 70px;
            right: -17px;
          }
        }
        
        #back-to-top-btn:hover {
          transform: translateY(-10px);
          animation: bounce 1s;
          animation-fill-mode: both;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }

      </style>
      <button id="back-to-top-btn"><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Arrow_Circle_Up"> <path id="Vector" d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></button>
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