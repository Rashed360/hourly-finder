import { Form, Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import FormField from '../../../commonComponents/formik/FormField'
import { profileAddressUpdate } from '../../../../redux/actionCreators/userActionCreators'

const EditAddress = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)
	const profile = useSelector(state => state.user.profile)
	const { address } = profile !== null ? profile : { address: '...*_*...*_*...*_*...' }
	const address_data = address.split('*_*')

	const initialValues = {
		zip: address_data[0] || '',
		state: address_data[1] || '',
		district: address_data[2] || '',
		address: address_data[3] || '',
	}
	const onSubmitHandle = async values => {
		if (
			values.zip !== initialValues.zip ||
			values.state !== initialValues.state ||
			values.district !== initialValues.district ||
			values.address !== initialValues.address
		) {
			const full_address =
				values.zip + '*_*' + values.state + '*_*' + values.district + '*_*' + values.address
			console.log('Login', full_address)
			dispatch(profileAddressUpdate(user.user_type, profile.id, full_address))
		}
	}
	const validateHandle = values => {
		const errors = {}
		return errors
	}

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Edit Address</h3>
			<div className='dashboard-content'>
				<div className='edit-profile-area content'>
					<Formik
						enableReinitialize
						initialValues={initialValues}
						onSubmit={onSubmitHandle}
						validate={validateHandle}
					>
						{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
							<Form onSubmit={handleSubmit} onReset={handleReset} style={{ overflow: 'hidden' }}>
								<div className='edit-organization-address'>
									<h5 className='edit-title'>Your Address</h5>
									<div className='edit-basic-form'>
										<div className='row'>
											<div className='col-lg-9'>
												<div className='row'>
													<div className='col-lg-6'>
														<FormField
															title='State'
															name='state'
															type='text'
															place='e.g. Dhaka'
															change={handleChange}
															value={values.state}
															touch={touched.state}
															error={errors.state}
														/>
													</div>

													<div className='col-lg-6'>
														<FormField
															title='District'
															name='district'
															type='text'
															place='e.g. South Dhaka'
															change={handleChange}
															value={values.district}
															touch={touched.district}
															error={errors.district}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6'>
														<FormField
															title='Full Address'
															name='address'
															type='text'
															place='e.g. 37/B, Lake Circus Road, Kalabagan'
															change={handleChange}
															value={values.address}
															touch={touched.address}
															error={errors.address}
														/>
													</div>
													<div className='col-lg-6'>
														<FormField
															title='Zip Code'
															name='zip'
															type='text'
															place='e.g. 1207'
															change={handleChange}
															value={values.zip}
															touch={touched.zip}
															error={errors.zip}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='save-all-change mt-10'>
									<div className='row'>
										<div className='col-lg-4 offset-lg-4'>
											<input type='submit' className='btn btn-main' value='Save Change' />
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default EditAddress
