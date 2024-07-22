import { useEffect } from 'react';
import StyleUtils from '../utils/StyleUtils';
import { useNavigate } from 'react-router-dom';
import StringUtils from '../utils/StringUtils';
import By from '../components/By/By';
import getAllGames from '../allGames';

export default function HomeView() {
    const navigate = useNavigate();
    useEffect(() => {
        StyleUtils.setDefaultValues();
        document.title = 'BoardScoreHub';
    }, []);

    const games = getAllGames();
    games.sort((a, b) => a.localeCompare(b));

    return (
        <div>
            <h1>BoardScoreHub</h1>
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
                className="btn selected"
                href={link}
                target="_blank"
                style={{ minWidth: '250px' }}>
                {name}
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
