import { useEffect } from 'react';
import HomeButton from '../components/HomeButton/HomeButton';
import Logo from '../components/Logo';

/**
 * This is the PrivacyView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-9
 */
function PrivacyView() {
	useEffect(() => {
		document.title = 'BoardScoreHub';
	}, []);
	return (
		<div className="content">
			<Logo detectDarkMode />
			<h1>BoardScoreHub Privacy</h1>
			<p>
				Data is <b>only</b> kept in your browser. No data will be sent to any
				server. This guarantees your privacy, but also means that you cannot
				access your data from another device. This also does not guarantee the
				persistence of your data. If you clear your browser data, your data will
				be lost without any way to recover it.
			</p>
			<HomeButton />
		</div>
	);
}

export default PrivacyView;
