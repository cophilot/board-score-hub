import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import ExpandableTable from './views/ExpandableTable';
import getAllGames from './allGames';
import StringUtils from './utils/StringUtils';
import CreateCustomView from './views/CreateCustomView/CreateCustomView';

function Routes() {
    const games = getAllGames();
    return (
        <>
            <HashRouter>
                <ReactRoutes>
                    <Route
                        path="/general-table/expandable"
                        Component={ExpandableTable}
                    />
                    {games.map((game) => (
                        <Route
                            key={game.definition.title}
                            path={`/game/${StringUtils.gameNameToPath(
                                game.definition.title
                            )}`}
                            Component={game.view}
                        />
                    ))}
                    <Route path="/custom/create" Component={CreateCustomView} />
                    <Route path="/" Component={HomeView} />
                    <Route path="*" Component={HomeView} />
                </ReactRoutes>
            </HashRouter>
        </>
    );
}

export default Routes;
