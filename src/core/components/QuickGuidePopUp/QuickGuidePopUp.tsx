import { useState } from 'react';
import {
	useGameDefinition,
	useGameSettings,
} from '../../main/GameDataProvider';
import { QuickGuideDef } from '../../types/GameDef';
import PopUp from '../PopUp/PopUp';
import './QuickGuidePopUp.scss';

/**
 * This is a QuickGuidePopUp component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-4-7
 */
function QuickGuidePopUp() {
	const settings = useGameSettings();
	const definition = useGameDefinition();

	return (
		<PopUp
			isVisible={settings.getShowQuickGuide()}
			onClose={() => settings.setShowQuickGuide(false)}
		>
			<div className="ver">
				<h2>{definition.title} Quick Guide</h2>
				{definition.quickGuide?.map((guide, index) => (
					<QuickGuide key={index} def={guide as QuickGuideDef} />
				))}
			</div>
		</PopUp>
	);
}
export default QuickGuidePopUp;

function QuickGuide({ def }: { def: QuickGuideDef }) {
	const [extended, setExtended] = useState(false);

	return (
		<div className="quick-guide">
			<button
				className="heading btn-no-hover wide inverted"
				onClick={() => setExtended(!extended)}
			>
				{def.heading}
			</button>
			{extended && (
				<ul>
					{typeof def.text === 'string' ? (
						<li>{def.text}</li>
					) : (
						def.text.map((item, index) => <li key={index}>{item}</li>)
					)}
				</ul>
			)}
		</div>
	);
}
