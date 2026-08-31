import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EmberleafView() {
	return (
		<GameView
			definition={getDefinition()}
			beforeTableElement={<RandomizerBtn />}
		/>
	);
}
const RandomizerBtn = () => {
	return (
		<a
			href="https://cophilot.github.io/emberleaf-randomizer/"
			target="_blank"
			rel="noreferrer"
		>
			<button className="btn selected nav-btn print-hide">
				<i className="bi bi-shuffle"></i>
				Randomizer
			</button>
		</a>
	);
};
