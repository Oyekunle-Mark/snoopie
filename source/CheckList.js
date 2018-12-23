import React from 'react';

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

export default CheckList;
