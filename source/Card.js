import React from 'react';
import PropTypes from 'prop-types';
import CheckList from './CheckList';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		};
		
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.setState({
			showDetails: !this.state.showDetails
		});
	};
	
	render() {
		let cardDetails;
			if (this.state.showDetails) {
				cardDetails = (
					<div className='card__details'>
						{this.props.description}
						<CheckList cardId={this.props.id} tasks={this.props.tasks} />
					</div>
				);
			}

		return (
			<div className='card'>
				<div className='card__title' onClick={this.clickHandler}>
					{this.props.title}
				</div>
				{cardDetails}
			</div>
		);
	}
}

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card;
