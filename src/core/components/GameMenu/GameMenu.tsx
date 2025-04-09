import { useMemo, useState } from 'react';
import './GameMenu.scss';
import IconButton from '../IconButton/IconButton';

export type ButtonDefinition = {
	label: string;
	iconClass?: string;
	onClick: () => void;
	disabled?: boolean;
	quickMenu?: boolean;
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
	const definitions = useMemo(() => {
		return buttonDefinitions.filter((def) => !def.disabled);
	}, [buttonDefinitions]);

	const [isExpanded, setIsExpanded] = useState(false);

	const onClickWrapper = (onClick: () => void) => {
		setIsExpanded(false);
		onClick();
	};

	return (
		<>
			<QuickGameMenu definitions={definitions.filter((def) => def.quickMenu)} />
			{isExpanded ? (
				<div className="game-menu print-hide">
					{definitions.map((buttonDef, index) => {
						return (
							<IconButton
								key={index}
								icon={buttonDef.iconClass}
								onClick={() => onClickWrapper(buttonDef.onClick)}
							>
								{buttonDef.label}
							</IconButton>
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
			) : (
				<div
					className="not-expanded-menu print-hide"
					onClick={() => setIsExpanded(true)}
				>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			)}
		</>
	);
}

function QuickGameMenu({ definitions }: { definitions: ButtonDefinition[] }) {
	return (
		<div className="quick-game-menu">
			{definitions.map((buttonDef, i) => (
				<i
					key={i}
					className={'bi ' + buttonDef.iconClass}
					onClick={() => buttonDef.onClick()}
					title={buttonDef.label}
				></i>
			))}
		</div>
	);
}
