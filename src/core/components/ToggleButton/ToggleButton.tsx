import { useState } from 'react';
import './ToggleButton.scss';

interface ToggleButtonProps {
	label?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

/**
 * This is a ToggleButton component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-3-21
 */
function ToggleButton({ label, checked = false, onChange }: ToggleButtonProps) {
	const [blocked, setBlocked] = useState(false); // Prevents automated double clicks

	const onChangeInternal = () => {
		if (!onChange || blocked) {
			return;
		}
		onChange(!checked);
		setBlocked(true);
		setTimeout(() => {
			setBlocked(false);
		}, 10);
	};

	return (
		<div className="toggle-button-container" onClick={onChangeInternal}>
			<label className="toggle-button">
				<input type="checkbox" checked={checked} />
				<span className="slider round"></span>
			</label>
			{label && <span className="label">{label}</span>}
		</div>
	);
}
export default ToggleButton;
