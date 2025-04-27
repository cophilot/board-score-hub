import { useEffect } from 'react';
import Logo from '../components/Logo';
import HomeButton from '../components/HomeButton/HomeButton';

/**
 * This is the ConceptView
 * @author cophilot
 * @version 1.0.0
 * @created 2025-1-26
 */
function ConceptView() {
	useEffect(() => {
		document.title = 'BoardScoreHub';
	}, []);
	return (
		<div className="content">
			<Logo detectDarkMode />
			<h1>BoardScoreHub Concept</h1>
			<p>
				<b>BoardScoreHub</b> is a web application that provides online
				scoresheets for your favorite board games. It is designed to be easy to
				use and should mimic the atmosphere of the board game as much as
				possible.
			</p>
			<HomeButton />
		</div>
	);
}

export default ConceptView;
