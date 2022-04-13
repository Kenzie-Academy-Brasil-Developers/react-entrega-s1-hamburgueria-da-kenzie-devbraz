import './App.css';
import { useState, useEffect } from 'react';
import MenuContainer from './components/MenuContainer';
import CartContainer from './components/CartContainer';
import HeaderContainer from './components/HeaderContainer';


function App() {

  const [products, setProducts] = useState(
    [
      { id: 1, name: 'Hamburguer',           category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
      { id: 2, name: 'X-Burguer',            category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
      { id: 3, name: 'Big Kenzie',           category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
      { id: 4, name: 'Fanta Guaraná',        category: 'Bebidas',    price: 5.00,  img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
      { id: 5, name: 'Coca-Cola',            category: 'Bebidas',    price: 4.99,  img: 'https://i.ibb.co/fxCGP7k/coca-cola.png' },
      { id: 6, name: 'Milkshake Ovomaltine', category: 'Bebidas',    price: 4.99,  img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
    ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const showProducts = (searchInput) => {

    const filter = products.filter((product) => product.name.toLowerCase() === searchInput.toLowerCase() || product.category.toLowerCase() === searchInput.toLowerCase())
    setFilteredProducts(filter)

  }

  const handleClick = (productId) => {

    const finded = products.find((product) => product.id === productId)
    const findsale = currentSale.find((product) => product.id === productId)
    {findsale? setCurrentSale([...currentSale]) : setCurrentSale([...currentSale, finded])}

  }

  useEffect(()=>{

    const totalPrice = currentSale.reduce((acc, product) => acc + product.price, 0)
    setCartTotal(totalPrice)

  }, [currentSale])

  const removeClick = (productId) =>{

    const removeFiltered = currentSale.filter((product) => product.id !== productId)
    setCurrentSale(removeFiltered)

  }

  const removeAllClick = () =>{

    setCurrentSale([])

  }

  return (

    <div className="App">
      <HeaderContainer showProducts={showProducts} />
      <main className='Main'>
        <MenuContainer products={products} handleClick={handleClick} filteredProducts={filteredProducts} />
        <CartContainer currentSale={currentSale} removeClick={removeClick} removeAllClick={removeAllClick} cartTotal={cartTotal}/>
      </main>
    </div>

  );

}

export default App;
