import './PopUp.scss';

interface PopUpProps {
	children?: JSX.Element;
	onClose?: () => void;
	isVisible?: boolean;
}

/**
 * This is a PopUp component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-3-30
 */
function PopUp({ children, onClose, isVisible = true }: PopUpProps) {
	if (!isVisible) {
		return null;
	}

	return (
		<div className="pop-up">
			{children}
			<button onClick={onClose} className="close-btn">
				<i className="bi bi-x-circle"></i>
			</button>
		</div>
	);
}
export default PopUp;
