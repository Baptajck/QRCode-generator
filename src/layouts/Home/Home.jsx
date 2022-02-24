import s from './Home.module.scss';
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

import Input from '../../components/Input/Input';
const Home = () => {
	const [value, setValue] = useState('');

	return (
		<div className={s.home}>
			<div className={s.card}>
				<div className={s.qrCode}>
					<QRCode
						value={value}
						size={200}
						bgColor='#2b7dfa'
						level='H'
						fgColor='#fff'
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
			<Input value={value} callback={setValue} />
		</div>
	);
};

export default Home;
