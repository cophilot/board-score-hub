import RouteButton from '../RouteButton/RouteButton';
import './HomeButton.scss';

/**
 * This is a HomeButton component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-9
 */
function HomeButton() {
	return (
		<RouteButton to="/" small>
			Home
		</RouteButton>
	);
}
export default HomeButton;
