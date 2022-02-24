import s from './Home.module.scss';
import { useState } from 'react';
import QRCode from 'react-qr-code';

import Input from '../../components/Input/Input';
import InputColor from '../../components/InputColor/InputColor';

const Home = () => {
	const [value, setValue] = useState('');
	const [bgcColor, setBgcColor] = useState('#2b7dfa');
	const [qrCodeColor, setQrCodeColor] = useState('#ffffff');

	return (
		<div className={s.home}>
			<div className={s.card}>
				<div className={s.qrCode} style={{ backgroundColor: bgcColor }}>
					<QRCode
						value={value}
						size={200}
						bgColor={bgcColor}
						fgColor={qrCodeColor}
						level='H'
						title={value}
					/>
				</div>
				<div className={s.text}>
					<h1 className={s.title}>
						Improve your front-end skills by building projects
					</h1>
					<p className={s.description}>
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</div>
			<div className={s.change}>
				<Input value={value} callback={setValue} />
				<InputColor
					label='Change background color'
					color={bgcColor}
					callback={setBgcColor}
				/>
				<InputColor
					label='Change QR Code color'
					color={qrCodeColor}
					callback={setQrCodeColor}
				/>
			</div>
		</div>
	);
};

export default Home;
