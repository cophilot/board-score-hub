import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function ForestShuffleDartmoorView() {
	return (
		<GameView
			definition={getDefinition()}
			afterTableElement={<IndexButton />}
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
