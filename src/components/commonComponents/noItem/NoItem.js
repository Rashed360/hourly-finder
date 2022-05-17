import { FaBoxOpen } from 'react-icons/fa'

const NoItem = ({ text }) => {
	return (
		<div className='no-item'>
			<div className='content'>
				<FaBoxOpen />
				<p>{text}</p>
			</div>
		</div>
	)
}

export default NoItem
