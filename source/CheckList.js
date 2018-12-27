import React from 'react';
import PropTypes from 'prop-types';

class CheckList extends React.Component {
	render() {
		let tasks = this.props.tasks.map((tasks, n) => (
			<li className='checklist__task' key={n}>
				<input type='checkbox' defaultChecked={tasks.done} />
				{tasks.name}
				<a href='#' className='checklist__task--remove' />
			</li>
		));

		return (
			<div className='checklist'>
				<ul>{tasks}</ul>
			</div>
		);
	}
}

CheckList.propTypes = {
    id: PropTypes.number,
    tasts: PropTypes.string
}

export default CheckList;
