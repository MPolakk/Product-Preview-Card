
const App = () => {
   return ( 
      <div className="product">
         <div className="product__img" ></div>
         <section className="product__2nd">
            <div className="product__desc">

               <label>Perfume</label>

               <h1>Gabrielle Essence Eau De Parfum</h1>

               <p>A floral, solar, and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>

            </div>

            <div className="product__price">

               <h1 className="price__current">$149.99</h1>

               <span className="price__prev">$169.99</span>

               <button className="price__button">
                  <img src="./images/icon-cart.svg"></img>
                  Add to Cart
               </button>

            </div>
         </section>
      </div>
    );
}


      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(
      <App/>);