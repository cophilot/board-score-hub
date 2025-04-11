import { useMemo } from 'react';
import './PopUp.scss';
import ColorUtils from '../../utils/ColorUtils';
import { useGameDefinition } from '../../main/GameDataProvider';

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
	const definition = useGameDefinition();

	const [bgColor, textColor] = useMemo(() => {
		if (!isVisible) {
			return ['', ''];
		}
		const comb1 = [definition.primaryColor!, definition.fontColor!];
		const comb2 = [definition.primaryColor!, definition.bgColor!];

		const comb1Ratio = ColorUtils.getContrastRatio(comb1[0], comb1[1]);
		const comb2Ratio = ColorUtils.getContrastRatio(comb2[0], comb2[1]);

		return comb1Ratio > comb2Ratio ? comb1 : comb2;
	}, [
		definition.bgColor,
		definition.fontColor,
		definition.primaryColor,
		isVisible,
	]);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className="pop-up"
			style={{ backgroundColor: bgColor, color: textColor }}
		>
			<div className="content">{children}</div>
			<button onClick={onClose} className="close-btn">
				<i className="bi bi-x-circle" style={{ color: textColor }}></i>
			</button>
		</div>
	);
}
export default PopUp;
