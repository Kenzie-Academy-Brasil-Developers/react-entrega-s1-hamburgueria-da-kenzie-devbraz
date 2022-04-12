import './index.css'
import ProductCart from '../ProductCart'
import Buttons from '../Buttons'

const CartContainer = ({ product, currentSale, removeClick, removeAllClick, cartTotal }) => {

	return (

		<div className='Cart-box'>

			<div className='Cart-top' >
				<h3 className='Cart-top-name'>Carrinho de Compras</h3>
			</div>

			{currentSale.length > 0 ? 

				<>
					<div className='Div-cart-botton'>
						{currentSale.map((product, index) => {
							return <ProductCart key={index} product={product} removeClick={removeClick}/>
						})}
					</div>
					<div className='Div-total-remove'>
						<div className='Div-total'>
							<p className='Total'>Total</p>
							<p className='Total-value'>R$ {cartTotal.toFixed(2)}</p>
						</div>
						<div className='Div-remove'>
							<Buttons onClick={() => removeAllClick(product)} removeAllClick={removeAllClick} classname='Remove-button'>Remover todos</Buttons>
						</div>
					</div>
				</>
			:
				<>
					<div className='Div-cart-botton'>
						<h3 className='Cart-botton-h3'>Sua sacola está vazia</h3>
						<h4 className='Cart-botton-h4'>Adicione itens</h4>
					</div>
				</>
			}

		</div>

	)

}

export default CartContainer