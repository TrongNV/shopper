import React from 'react';
import './ItemPage.css';

let Item = ({item, children }) => 
		(<div className='Item'>
				<div className='Item-left'>
					<div className='Item-image'></div>
					<div className='Item-title'>{item.name}</div>
					<div className='Item-title'>{item.description}</div>
				</div>
				<div className='Item-right'>
					<div className='Item-price'>{item.price}</div>
					{children}
				</div>
		</div>);
Item.propTypes = {
	item: React.PropTypes.object.isRequired,
	children: React.PropTypes.node.isRequired
};

export default Item;