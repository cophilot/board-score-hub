import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import By from '../components/By';
import { getSortedGameNames } from '../allGames';
import Logo from '../components/Logo';
import DevMessage from '../components/DevMessage';
import GameButton from '../components/GameButton/GameButton';
import FavoriteGameSection from '../components/FavoriteGameSection/FavoriteGameSection';
import RouteButton from '../components/RouteButton/RouteButton';
import {
    useIsDarkModeEnabled,
    useToggleTheme,
} from '../providers/ThemeProvider';
import StyleUtils from '../api/utils/StyleUtils';

export default function HomeView() {
    const navigate = useNavigate();
    const toggleTheme = useToggleTheme();
    const isDarkModeEnabled = useIsDarkModeEnabled();
    useEffect(() => {
        document.title = 'BoardScoreHub';
        StyleUtils.setDefaultValues(isDarkModeEnabled());
    }, []);

    const games = getSortedGameNames();
    return (
        <div>
            <Logo detectDarkMode />
            <DevMessage />
            <i
                className={
                    'bi icon ' +
                    (isDarkModeEnabled()
                        ? 'bi-brightness-high-fill'
                        : 'bi-moon-fill')
                }
                onClick={toggleTheme}></i>
            <h2>General</h2>
            <div className="ver">
                <button
                    className="btn selected wide"
                    onClick={() => {
                        navigate('/general-table/expandable');
                    }}>
                    Expandable Table
                </button>
                {/* <button className="btn selected wide">Fix size Table</button> */}
            </div>
            <h2>Favorites</h2>
            <FavoriteGameSection />
            <h2>Games</h2>
            <div className="ver">
                {games.map((game) => (
                    <GameButton key={game} game={game} />
                ))}
            </div>
            <p>
                <i>Missing a game? </i>
            </p>
            <p>
                <b>
                    <a href="mailto:info@philipp-bonin.com?subject=BoardScoreHub%20Game%20Request&body=Please%20add%20the%20game%20%22GameName%22%20to%20BoardScoreHub.">
                        Contact me
                    </a>
                </b>
            </p>
            <h2>External</h2>
            <div className="ver">
                <GameButton
                    game="Cascadia"
                    asLink
                    link="https://cascoria.philipp-bonin.com/#/"
                />
            </div>
            <h2>Custom</h2>
            <div className="msg">
                <i>Coming soon...</i>
            </div>
            {/*  <button
                className="btn selected wide"
                onClick={() => {
                    navigate('/custom/create');
                    }}>
                    Create <i className="bi bi-plus-circle"></i>
                    </button> */}
            <h2>Other</h2>
            <RouteButton to="privacy">Privacy</RouteButton>
            <By />
        </div>
    );
}
