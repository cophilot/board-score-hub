import { useEffect } from 'react';
import StyleUtils from '../api/utils/StyleUtils';
import { useNavigate } from 'react-router-dom';
import StringUtils from '../utils/StringUtils';
import By from '../components/By';
import getAllGames from '../allGames';
import Logo from '../components/Logo';

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
            <h2>General</h2>
            <div className="ver">
                <button
                    className="btn selected wide"
                    onClick={() => {
                        navigate('/general-table/expandable');
                    }}>
                    Expandable Table
                </button>
                <button className="btn selected wide">Fix size Table</button>
            </div>
            <h2>Games</h2>
            <div className="ver">
                {games.map((game) => (
                    <LinkGameButton key={game} game={game} />
                ))}
            </div>
            <h2>External</h2>
            <LinkGameButton game="Cascadia$x$https://cascoria.philipp-bonin.com/#/" />
            {/*             <h2>Custom</h2>
             */}{' '}
            <By />
        </div>
    );
}

function LinkGameButton({ game }: { game: string }) {
    const navigate = useNavigate();
    if (game.includes('$x$')) {
        const [name, link] = game.split('$x$');
        return (
            <a
                className="btn selected mb"
                href={link}
                target="_blank"
                style={{ minWidth: '350px' }}>
                {name} <i className="bi bi-arrow-up-right-square"></i>
            </a>
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
