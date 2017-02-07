import React from 'react';
import './ItemPage.css';
import Item from './Item';

function ItemPage({ items, onAddToCart }){
	return(<ul className='itemPage-items'>
		{items.map(item=>
			<li key={item.id}  className='ItemPage-item'>
			 <Item item={item}>
			 	<button className='Item-addToCart' onClick={onAddToCart.bind(null, item)}>Add To Cart</button>
			 </Item>
			</li>
		)}
		
		</ul>)

}
ItemPage.propTypes = {
	items: React.PropTypes.array.isRequired,
	onAddToCart: React.PropTypes.func.isRequired
};
export default ItemPage;