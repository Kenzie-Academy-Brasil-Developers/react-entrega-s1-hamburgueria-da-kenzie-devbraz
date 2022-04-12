import Product from '../Product'
import './index.css'

const MenuContainer = ({ products, handleClick, filteredProducts }) => {

  return (
    
    <div className='Card-container'>
      {filteredProducts.length > 0?

      (filteredProducts.map((product) => <Product key={product.id} product={product} handleClick={handleClick} />))

      : 
      
       (products.map((product) => <Product key={product.id} product={product} handleClick={handleClick} />))
      }
      
    </div>

  )

}

export default MenuContainer