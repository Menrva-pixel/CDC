class MenuMakanan extends HTMLElement {
    constructor() {
      super();
      
      // Buat objek ShadowRoot dan masukkan template HTML
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = `
        <style>
          /* Definisikan style untuk komponen */
          .menu {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 20px;
          }
          
          .menu-item {
            width: calc(33.33% - 20px);
            margin-bottom: 20px;
            background-color: #eee;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .menu-item:hover {
            transform: translateY(-5px);
          }
          
          .menu-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          
          .menu-item h3 {
            margin: 10px;
          }
        </style>
        <div class="menu"></div>
      `;
  
      shadow.innerHTML = template;
      this._menuList = shadow.querySelector('.menu');
    }
  
    connectedCallback() {
      // Ambil data dari API menggunakan metode AJAX
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.example.com/menus');
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.response);
          this._renderMenuList(data.slice(0, 6));
        } else {
          console.error('Gagal mengambil data dari API');
        }
      };
      xhr.send();
    }
  
    _renderMenuList(menus) {
      // Tampilkan data menu pada elemen <div> dengan class "menu"
      menus.forEach((menu) => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `
          <img src="${menu.image}">
          <h3>${menu.name}</h3>
        `;
        this._menuList.appendChild(div);
      });
    }
  }
  
  customElements.define('menu-makanan', MenuMakanan);
  