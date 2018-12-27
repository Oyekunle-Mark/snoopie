import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends React.Component {
	render() {
		var cards = this.props.cards.map((card, n) => {
			return <Card 	key={n}
				    id={card.id}
					title={card.title}
					description={card.description}
					tasks={card.tasks} />
		});

		return (
			<div className='list'>
				<h1>{this.props.title}</h1>
				{cards}
			</div>
		);
	}
}
                                         
List.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
}

export default List;
