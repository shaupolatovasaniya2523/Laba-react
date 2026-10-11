import { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';

const API_URL = 'http://localhost:3000/api';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(`${API_URL}/products`);

        if (!response.ok) {
          throw new Error('Ошибка загрузки товаров');
        }

        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Не удалось загрузить товары:', error);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header cartCount={0} />

      <main className="page catalog">
        <section id="catalog">
          <div className="catalog-toolbar">
            <h2>Каталог</h2>

            <input
              type="text"
              placeholder="Поиск товара..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        <aside id="delivery" className="sidebar">
          <h3>Доставка</h3>

          <ul>
            <li>Астана — на следующий день</li>
            <li>Акмолинская область — 2–3 дня</li>
            <li>Бесплатно от 2 220 000 тг</li>
          </ul>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default App;
