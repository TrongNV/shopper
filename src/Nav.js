import React, {Component} from 'react';
import './index.css';

class Nav extends Component{

	render(){
		let {selectedTab, onTabChange, total, itemCnt} = this.props;
		return(
			<nav className='App-nav'>
				<div className='Nav-Div'>
				<ul>
					<li className={`App-nav-item ${selectedTab===0 && 'selected'}`}>
					<a onClick={onTabChange.bind(this,0)}>Items</a>
					</li>
					<li className={`App-nav-item ${selectedTab===1 && 'selected'}`}>
					<a onClick={onTabChange.bind(this,1)}>Cart</a>
					</li>
				</ul>
				<div className='Nav-Span'>{itemCnt} items ({total})</div>
				</div>
			</nav>
			);
	}

}
Nav.propTypes={
	selectedTab: React.PropTypes.number.isRequired,
	onTabChange: React.PropTypes.func.isRequired,
	total: React.PropTypes.number.isRequired,
	itemCnt: React.PropTypes.number.isRequired
}

export default Nav;