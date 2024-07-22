import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import HarmoniesView from './games/harmonies/View';
import SevenWondersDuelView from './games/seven-wonders-duel/View';
import DorfromatikDuelView from './games/dorfromatik-duel/View';
import EverdellView from './games/everdell/View';
import ExpandableTable from './views/ExpandableTable';
import ScoutView from './games/scout/View';
import WizardView from './games/wizard/View';
import LetsGoToJapanView from './games/lets-go-to-japan/View';
function Routes() {
    return (
        <>
            <HashRouter>
                <ReactRoutes>
                    <Route
                        path="/general-table/expandable"
                        Component={ExpandableTable}
                    />
                    <Route
                        path="/game/lets-go-to-japan"
                        Component={LetsGoToJapanView}
                    />
                    <Route path="/game/wizard" Component={WizardView} />
                    <Route path="/game/scout" Component={ScoutView} />
                    <Route path="/game/everdell" Component={EverdellView} />
                    <Route
                        path="/game/dorfromatik-duel"
                        Component={DorfromatikDuelView}
                    />
                    <Route
                        path="/game/seven-wonders-duel"
                        Component={SevenWondersDuelView}
                    />
                    <Route path="/game/harmonies" Component={HarmoniesView} />
                    <Route path="/" Component={HomeView} />
                    <Route path="*" Component={HomeView} />
                </ReactRoutes>
            </HashRouter>
        </>
    );
}

export default Routes;
