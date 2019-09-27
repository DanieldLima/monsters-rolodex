import React from 'react'

import './card.styles.scss'

export const Card = (props) => (
	<div className='card-container '>
		<img
			className='card-container__image'
			src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}
			alt="monster"
		/>
		<h2> {props.monster.name} </h2>
		<p> {props.monster.email} </p>
	</div>
);
