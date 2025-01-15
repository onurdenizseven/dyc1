function loadFooter() {
    const footer = `
        <footer class="modern-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>HAKKIMIZDA</h4>
                    <ul>
                        <li><a href="/about.html">Hakkımızda</a></li>
                        <li><a href="/online-katalog">Online Katalog</a></li>
                        <li><a href="/referanslar">Referanslar</a></li>
                        <li><a href="/haberler">Haberler</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>ÜRÜNLER</h4>
                    <ul>
                        <li><a href="/products/digital">Dijital</a></li>
                        <li><a href="/products/blockchain">Blok Zincir</a></li>
                        <li><a href="/products/quantum">Kuantum</a></li>
                        <li><a href="/products/ai">Yapay Zeka</a></li>
                        <li><a href="/products/cloud">Bulut Sistem</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>İLETİŞİM</h4>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i>DYS Merkez Binası</li>
                        <li>E-5 Caddesi No:50 Kat:4, 34854</li>
                        <li>Kartal/İstanbul</li>
                        <li><i class="fas fa-phone"></i>+90 212 555 55 55</li>
                        <li><i class="fas fa-envelope"></i>info@dys.com</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>E-BÜLTEN KAYIT</h4>
                    <div class="newsletter-form">
                        <input type="email" placeholder="E-mail adresiniz...">
                        <button type="submit"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="e-catalog-section">
                <div class="catalog-content">
                    <div>
                        <i class="fas fa-book catalog-icon"></i>
                        E-KATALOG
                    </div>
                    <div>
                        Broşür ve Fiyatlar için Online Kataloglarımızı İnceleyin
                    </div>
                    <div>
                        <i class="fas fa-qrcode"></i>
                        Mağazalar Ambalajı 2020
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>Copyright 2024 DYS™. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    `;
    
    const footerPlaceholder = document.createElement('div');
    footerPlaceholder.id = 'footer-placeholder';
    footerPlaceholder.innerHTML = footer;
    document.body.appendChild(footerPlaceholder);
}

document.addEventListener('DOMContentLoaded', loadFooter); 