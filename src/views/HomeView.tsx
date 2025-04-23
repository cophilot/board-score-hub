import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import By from '../components/By';
import { getGameOfTheDay, getSortedGames } from '../allGames';
import Logo from '../components/Logo';
import DevMessage from '../components/DevMessage';
import {
	GameButton,
	GameWithViewButton,
} from '../components/GameButton/GameButton';
import FavoriteGameSection from '../components/FavoriteGameSection/FavoriteGameSection';
import RouteButton from '../components/RouteButton/RouteButton';
import {
	useIsDarkModeEnabled,
	useToggleTheme,
} from '../providers/ThemeProvider';
import StyleUtils from '../core/utils/StyleUtils';
import GameFilter from '../components/GameFilter/GameFilter';
import GameSearch from '../components/GameSearch/GameSearch';
import GameButtonList from '../components/GameButtonList';

export default function HomeView() {
	const navigate = useNavigate();
	const toggleTheme = useToggleTheme();
	const isDarkModeEnabled = useIsDarkModeEnabled();
	useEffect(() => {
		document.title = 'BoardScoreHub';
		StyleUtils.setDefaultValues(isDarkModeEnabled());
	}, [isDarkModeEnabled]);

	const [games, setGames] = useState(getSortedGames());
	return (
		<div>
			<Logo detectDarkMode />
			<DevMessage />
			<i
				className={
					'bi icon ' +
					(isDarkModeEnabled() ? 'bi-brightness-high-fill' : 'bi-moon-fill')
				}
				onClick={toggleTheme}
			></i>
			<h2>General</h2>
			<div className="ver">
				<button
					className="btn selected wide"
					onClick={() => {
						navigate('/general-table/expandable');
					}}
				>
					Expandable Table
				</button>
				{/* <button className="btn selected wide">Fix size Table</button> */}
			</div>
			<h2>Game of the Day</h2>
			<GameWithViewButton game={getGameOfTheDay()} />
			<h2>Search</h2>
			<GameSearch />
			<h2>Favorites</h2>
			<FavoriteGameSection />
			<h2>Games</h2>
			<GameFilter allGames={getSortedGames()} setGames={setGames} />
			<GameButtonList games={games} />
			<p>{games.length} Games</p>
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
			<h2>Other Tools</h2>
			<div className="ver">
				<GameButton
					game="TapOrder"
					asLink
					link="https://tap-order.philipp-bonin.com/"
				/>
				<GameButton
					game="Next Station: Helper"
					asLink
					link="https://next-station.philipp-bonin.com/"
				/>
			</div>
			<h2>Infos</h2>
			<div className="ver">
				<RouteButton to="concept">Concept</RouteButton>
				<RouteButton to="privacy">Privacy</RouteButton>
				{/*<RouteButton to="contributors">Contributors</RouteButton>*/}
			</div>
			<By />
		</div>
	);
}
