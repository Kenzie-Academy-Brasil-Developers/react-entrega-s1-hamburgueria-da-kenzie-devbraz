import './index.css'
import Buttons from '../Buttons'

const ProductCart = ({ product, currentSale, removeClick }) => {

	return (

		<div className='Cart-botton' >
			<div className='Cart-itens'>
				<div className='Div-img-cart'>
					<img className='Img-cart' src={product.img} alt={product.img} />
				</div>
				<div className='Div-cart-item-name'  >
					<p className='Cart-item-name'>{product.name}</p>
					<p className='Cart-item-class'>{product.category}</p>
				</div>
				<div className='Div-cart-item-button'>
					<Buttons onClick={() => removeClick(product.id)} classname='Cart-item-button'> Remover</Buttons>
				</div>
			</div>
		</div>

	)

}

export default ProductCart 