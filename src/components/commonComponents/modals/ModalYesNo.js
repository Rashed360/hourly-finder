import { FaTimes, FaInfoCircle } from 'react-icons/fa'

const ModalYesNo = ({ open, onAccept, onClose, data }) => {
	const temporaryData = {
		title: 'Are you sure to perform that task?',
		subTitle: '',
		body: 'Complete selected task to perform prefered task.',
		footer: '* Be Careful! Once done. It can not be undone!',
		yesText: 'Yes',
	}
	const { title, subTitle, body, footer, yesText } = data ? data : temporaryData
	const acceptAction = () => {
		onAccept()
		onClose()
	}
	const rejectAction = () => {
		onClose()
	}
	if (!open) return null
	return (
		<div onClick={onClose} className='modal-overlay'>
			<div onClick={e => e.stopPropagation()} className='modal-container'>
				<div className='modal-header'>
					<div className='info-area'>
						<FaInfoCircle />
						<div className='info-text'>{title}</div>
					</div>
					<button className='close-area' onClick={onClose}>
						<FaTimes />
					</button>
				</div>
				{subTitle !== '' && <div className='modal-sub-header'>{subTitle}</div>}
				<div className='modal-body'>{body}</div>

				<div className='modal_footer'>
					<div className='info-area'>{footer !== '' ? footer : ''}</div>
					<div className='buttons'>
						<button className='btn btn-warn' onClick={acceptAction}>
							{yesText !== '' ? yesText : 'Yes'}
						</button>
						<button className='btn btn-positive' onClick={rejectAction}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalYesNo
