import { useState } from 'react';
import './GameMenu.scss';

export type ButtonDefinition = {
	label: string;
	iconClass?: string;
	onClick: () => void;
	disabled?: boolean;
};

interface GameMenuProps {
	buttonDefinitions: ButtonDefinition[];
}

/**
 * This is a GameMenu component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-3-11
 */
export function GameMenu({ buttonDefinitions }: GameMenuProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	if (!isExpanded) {
		return (
			<div
				className="not-expanded-menu print-hide"
				onClick={() => setIsExpanded(true)}
			>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		);
	}

	const onClickWrapper = (onClick: () => void) => {
		setIsExpanded(false);
		onClick();
	};

	return (
		<div className="game-menu print-hide">
			{buttonDefinitions.map((buttonDef, index) => {
				if (buttonDef.disabled) {
					return null;
				}
				return (
					<button
						key={index}
						className="btn selected nav-btn print-hide"
						onClick={() => onClickWrapper(buttonDef.onClick)}
					>
						{buttonDef.iconClass && <i className={buttonDef.iconClass}></i>}
						{buttonDef.label}
					</button>
				);
			})}
			<button
				className="btn selected nav-btn print-hide"
				onClick={() => {
					setIsExpanded(false);
				}}
			>
				<i className="bi bi-x-lg"></i>
				Close
			</button>
		</div>
	);
}
