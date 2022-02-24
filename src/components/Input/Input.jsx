import PropTypes from 'prop-types';
import s from './Input.module.scss';

const Input = ({ value = '', callback = () => {} }) => {
	return (
		<div className={s.input}>
			<label className={s.label} htmlFor='qrcode'>
				Enter your URL here
			</label>
			<input
				name='qrcode'
				id='qrcode'
				type='url'
				value={value}
				onChange={e => callback(e.target.value.toLowerCase())}
				placeholder='Enter your URL for the QR code'
				className={s.item}
			/>
		</div>
	);
};

Input.propTypes = {
	callback: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
