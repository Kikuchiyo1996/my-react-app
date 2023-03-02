import { useState } from 'react'
import type { FC } from 'react'
import { Button } from 'antd'

const Demo: FC = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const user = {
		name: 'Hello React',
	}
	const products = [
		{ title: 'Cabbage', id: 1 },
		{ title: 'Garlic', id: 2 },
		{ title: 'Apple', id: 3 },
	]
	const listItems = products.map((product) => {
		return (
			<li onClick={() => handelClick(product.id)} className={activeIndex === product.id ? 'active' : ''} key={product.id}>
				{product.title}
			</li>
		)
	})

	const handelClick = (id: number) => {
		setActiveIndex(id)
	}

	return (
		<div className='App'>
			<Button className='my-btn' type='primary'>
				{user.name}
			</Button>
			<ul>{listItems}</ul>
		</div>
	)
}

export default Demo
