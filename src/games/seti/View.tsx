import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SetiView() {
	return (
		<GameView
			definition={getDefinition()}
			afterTabelElement={<IndexButton />}
		/>
	);
}

const IndexButton = () => {
	return (
		<a
			href="https://seti-solarsystem.czechgames.com/"
			target="_blank"
			rel="noreferrer"
		>
			<button className="btn selected nav-btn print-hide">
				<i className="bi bi-globe-americas"></i>
				Randomizer
			</button>
		</a>
	);
};
