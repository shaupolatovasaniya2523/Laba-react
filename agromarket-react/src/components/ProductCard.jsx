function ProductCard({ product, onAdd, featured }) {
   return (
    <article className={featured ? 'card card--featured' : 'card'}>
      {featured && <span className="badge">Товар недели</span>}
      <img src="https://www.svgrepo.com/show/313583/book-solid.svg" alt="Универ"></img>
      {/* используйте product.image и product.name (для alt) */}
 
      <h3>{product.name}</h3>
      <p>{product.price} тг</p>
      <button>В корзину</button>
    </article>
    );
}
 
export default ProductCard;
