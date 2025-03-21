import { useEffect, useState } from 'react';
import './Timer.scss';
import GameStorage from '../../utils/GameStorage';

interface TimerProps {
	gameTitle: string;
}

/**
 * This is a Timer component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-2-3
 */
function Timer({ gameTitle }: TimerProps) {
	const [time, setTime] = useState(GameStorage.getGameTimer(gameTitle));
	const [timer, setTimer] = useState<number | null>(null);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		GameStorage.setGameTimer(gameTitle, time);
	}, [gameTitle, time]);

	const startTimer = () => {
		setIsRunning(true);
		const timer = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
		setTimer(timer);
	};

	const stopTimer = () => {
		setIsRunning(false);
		if (timer) {
			clearInterval(timer);
		}
	};

	const resetTimer = () => {
		stopTimer();
		setTime(0);
		GameStorage.setGameTimer(gameTitle, 0);
	};

	const getTimeString = () => {
		if (time === 0 && !isRunning) {
			return '';
		}
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<div className="timer">
			<span className="time">{getTimeString()}</span>
			{isRunning ? (
				<i className="bi bi-pause-circle" onClick={stopTimer}></i>
			) : (
				<i className="bi bi-play-circle" onClick={startTimer}></i>
			)}
			{(time > 0 || isRunning) && (
				<i className="bi bi-arrow-clockwise" onClick={resetTimer}></i>
			)}
		</div>
	);
}
export default Timer;
