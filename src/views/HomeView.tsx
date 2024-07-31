import { useEffect } from 'react';
import StyleUtils from '../api/utils/StyleUtils';
import { useNavigate } from 'react-router-dom';
import StringUtils from '../utils/StringUtils';
import By from '../components/By';
import getAllGames from '../allGames';
import Logo from '../components/Logo';
import DevMessage from '../components/DevMessage';

export default function HomeView() {
    const navigate = useNavigate();
    useEffect(() => {
        StyleUtils.setDefaultValues();
        document.title = 'BoardScoreHub';
    }, []);

    const games = getAllGames().map((game) => game.definition.title);
    games.sort((a, b) => a.localeCompare(b));

    return (
        <div>
            <Logo />
            <DevMessage />
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
            <h2>Games</h2>
            <div className="ver">
                {games.map((game) => (
                    <LinkGameButton key={game} game={game} />
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
                <LinkGameButton game="Cascadia$x$https://cascoria.philipp-bonin.com/#/" />
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
            <By />
        </div>
    );
}

function LinkGameButton({ game }: { game: string }) {
    const navigate = useNavigate();
    if (game.includes('$x$')) {
        const [name, link] = game.split('$x$');
        return (
            <div className="btn selected" style={{ width: '250px' }}>
                <a
                    className=""
                    href={link}
                    target="_blank"
                    style={{ color: 'white' }}>
                    {name} <i className="bi bi-arrow-up-right-square"></i>
                </a>
            </div>
        );
    }

    return (
        <button
            className="btn selected wide"
            onClick={() => {
                navigate(`/game/${StringUtils.gameNameToPath(game)}`);
            }}>
            {game}
        </button>
    );
}
