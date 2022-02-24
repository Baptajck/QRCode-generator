import s from './Home.module.scss';
import QRCode from 'react-qr-code';

const Home = () => {
	return (
		<div className={s.home}>
			<div className={s.card}>
				<div className={s.qrCode}>
					<QRCode
						value='baptjack.fr'
						size='200'
						bgColor='#2b7dfa'
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
		</div>
	);
};

export default Home;
