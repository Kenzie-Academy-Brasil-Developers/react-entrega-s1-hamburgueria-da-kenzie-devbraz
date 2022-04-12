import './index.css'
import Buttons from '../Buttons'

const Product = ({ handleClick, product }) => {

	return (

		<div className='Card-box'>
			<div className='Img-box'>
				<img className='Img-card' src={product.img} alt={product.name} />
			</div>
			<div className='Information-box'>
				<h3 className='Snack-name'> {product.name}</h3>
				<h4 className='Snack-class'>{product.category}</h4>
				<h4 className='Snack-value'>R$ {product.price.toFixed(2)}</h4>
				<Buttons onClick={() => handleClick(product.id)} classname='Snack-button'>Adicionar</Buttons>
			</div>
		</div>

	)

}

export default Product