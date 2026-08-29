import { useState } from 'react';
import GameView from '../../components/GameView';
import { getDefinitionByKind, ForestShuffleDartmoorKind } from './definition';

const KIND_LS_KEY = 'forest-shuffle-dartmoor-kind';

export default function ForestShuffleDartmoorView() {
	const [kind, setKindI] = useState(
		(localStorage.getItem(KIND_LS_KEY) as ForestShuffleDartmoorKind) ||
			ForestShuffleDartmoorKind.DEFAULT,
	);

	const setKind = (newKind: ForestShuffleDartmoorKind) => {
		setKindI(newKind);
		localStorage.setItem(KIND_LS_KEY, newKind);
	};

	return (
		<GameView
			definition={getDefinitionByKind(kind)}
			afterTableElement={<IndexButton />}
			beforeTableElement={
				<div className="btn-group kind-btn-group">
					<button
						className={`btn ${kind === ForestShuffleDartmoorKind.DEFAULT ? 'selected' : ''}`}
						onClick={() => setKind(ForestShuffleDartmoorKind.DEFAULT)}
					>
						Default
					</button>
					<button
						className={`btn ${kind === ForestShuffleDartmoorKind.BY_ICON ? 'selected' : ''}`}
						onClick={() => setKind(ForestShuffleDartmoorKind.BY_ICON)}
					>
						By Icon
					</button>
				</div>
			}
		/>
	);
}

const IndexButton = () => {
	return (
		<a
			href="https://www.lookout-spiele.de/upload/en_dartmoor.html_ForestShuffeDartmoor_0156_Appendix_EN_DSV9.pdf"
			target="_blank"
			rel="noreferrer"
		>
			<button className="btn selected nav-btn print-hide">
				<i className="bi bi-list-columns-reverse"></i>
				Appendix
			</button>
		</a>
	);
};
