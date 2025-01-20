import { useNavigate } from 'react-router-dom';
import './RouteButton.scss';

interface RouteButtonProps {
	to: string;
	children: JSX.Element;
	small?: boolean;
}

/**
 * This is a RouteButton component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-9
 */
function RouteButton({ to, children, small = false }: RouteButtonProps) {
	const navigate = useNavigate();

	const className = 'btn selected ' + (small ? '' : 'wide');

	return (
		<button
			className={className}
			onClick={() => {
				navigate(to);
			}}
		>
			{children}
		</button>
	);
}
export default RouteButton;
