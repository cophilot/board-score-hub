import { useEffect } from 'react';
import StyleUtils from '../utils/StyleUtils';
import { useNavigate } from 'react-router-dom';
import StringUtils from '../utils/StringUtils';

export default function HomeView() {
    const navigate = useNavigate();
    useEffect(() => {
        StyleUtils.setDefaultValues();
        document.title = 'BoardScoreHub';
    }, []);

    const games = ['Harmonies', 'Seven Wonders: Duel', 'Dorfromatik: Duel'];
    games.sort((a, b) => a.localeCompare(b));

    return (
        <div>
            <h1>BoardScoreHub</h1>
            <div className="ver games">
                {games.map((game) => (
                    <button
                        key={game}
                        className="btn selected"
                        style={{ minWidth: '300px' }}
                        onClick={() => {
                            navigate(
                                `/game/${StringUtils.gameNameToPath(game)}`
                            );
                        }}>
                        {game}
                    </button>
                ))}
            </div>
            <div
                style={{
                    marginTop: '20px',
                    marginBottom: '50px',
                    fontSize: '16px',
                }}>
                by <a href="https://philipp-bonin.com/">Philipp B.</a>
            </div>
        </div>
    );
}
