import { useState, useEffect } from "react"
import './index.css'
import Buttons from "../Buttons"
import Inputs from "../Inputs"

const HeaderContainer = ({ showProducts }) => {

	const [searchInput, setSearchInput] = useState('')

	return (

		<header className="App-header">
			<div className='Div-logo'>
				<h2 className='Logo-burguer'>Burguer</h2>
				<h3 className='Logo-kenzie'>Kenzie</h3>
			</div>
			<div className='Div-input'>
				<Inputs classname='Input-header' type="text" placeholder="Digitar Pesquisa" value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>  
				<Buttons classname='Button-header' onClick={() => showProducts(searchInput)}>Pesquisar</Buttons>
			</div>
		</header>

	)

}

export default HeaderContainer


