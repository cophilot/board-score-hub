import { useState } from 'react';
import './CookieMessage.scss';

/**
 * This is a CookieMessage component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-22
 */
function CookieMessage() {
	const lsKey = 'cookie-accepted';
	const [visible, setVisible] = useState(
		localStorage.getItem(lsKey) !== 'true',
	);
	return (
		<>
			{visible && (
				<div className="cookie-message">
					<h2>
						This website uses cookies to ensure you get the best experience on
						our website.
					</h2>
					<button
						className="btn"
						onClick={() => {
							setVisible(false);
							localStorage.setItem(lsKey, 'true');
						}}
					>
						Okay
					</button>
				</div>
			)}
		</>
	);
}
export default CookieMessage;
