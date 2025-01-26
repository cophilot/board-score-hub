import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import ExpandableTable from './views/ExpandableTable';
import { getAllGames } from './allGames';
import StringUtils from './utils/StringUtils';
import CreateCustomView from './views/CreateCustomView/CreateCustomView';
import PrivacyView from './views/PrivacyView';
import ConceptView from './views/ConceptView';

function Routes() {
	const games = getAllGames();
	return (
		<>
			<HashRouter>
				<ReactRoutes>
					<Route path="/general-table/expandable" Component={ExpandableTable} />
					{games.map((game) => (
						<Route
							key={game.definition.title}
							path={`/game/${StringUtils.gameNameToPath(
								game.definition.title,
							)}`}
							Component={game.view}
						/>
					))}
					<Route path="/custom/create" Component={CreateCustomView} />
					<Route path="/privacy" Component={PrivacyView} />
					<Route path="/concept" Component={ConceptView} />
					<Route path="/" Component={HomeView} />
					<Route path="*" Component={HomeView} />
				</ReactRoutes>
			</HashRouter>
		</>
	);
}

export default Routes;
