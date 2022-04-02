import { Field } from 'formik'

const FormField = ({ title, place, type, name, value, change, touch, error }) => {
	return (
		<div className='form-field'>
			<label htmlFor={name}>{title}</label>
			<Field
				name={name}
				type={type}
				className={touch ? (error ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
				value={value}
				onChange={change}
				placeholder={place}
			/>
			{touch && error ? (
				<div className='invalid-feedback'>{error}</div>
			) : (
				<div className='valid-feedback'>Looks good!</div>
			)}
		</div>
	)
}

export default FormField
