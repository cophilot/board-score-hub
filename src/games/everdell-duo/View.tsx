import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EverdellDuoView() {
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
			href="https://cdn.shopify.com/s/files/1/0559/8245/6947/files/Duo-Complete_Card_Index-V03-Web.pdf?v=1723217153"
			target="_blank"
			rel="noreferrer"
		>
			<button className="btn selected nav-btn print-hide">
				<i className="bi bi-list-columns-reverse"></i>
				Index
			</button>
		</a>
	);
};
