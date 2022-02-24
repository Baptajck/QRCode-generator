import PropTypes from 'prop-types';
import s from './InputColor.module.scss';

const InputColor = ({ label = '', color = '', callback = () => {} }) => {
	return (
		<div className={s.input}>
			<input
				name='qrcodeColor'
				id={`qrcodeColor-${label}`}
				type='color'
				value={color}
				onChange={e => {
					console.log(e.target.value);
					callback(e.target.value);
				}}
				className={s.item}
			/>
			<label className={s.label} htmlFor={`qrcodeColor-${label}`}>
				{label}
			</label>
		</div>
	);
};

InputColor.propTypes = {
	label: PropTypes.string,
	callback: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
};

export default InputColor;
