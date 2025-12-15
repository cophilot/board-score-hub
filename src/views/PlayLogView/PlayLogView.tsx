import { useEffect, useState } from 'react';
import HomeButton from '../../components/HomeButton/HomeButton';
import Logo from '../../components/Logo';
import './PlayLogView.scss';
import IndexedDBService from '../../core/utils/IndexedDBService';
import { PlayLogEntry, playLogEntryToString } from '../../core/types/PlayLog';

/**
 * This is the PlayLogView
 * @author cophilot
 * @version 1.0.0
 * @created 2025-12-14
 */
function PlayLogView() {
	const [data, setData] = useState<PlayLogEntry[]>([]);

	useEffect(() => {
		document.title = 'BoardScoreHub';
		IndexedDBService.getAllPlayLogEntries().then((entries) => {
			setData(entries);
		});
	}, []);

	return (
		<div className="content">
			<Logo detectDarkMode />
			<h1>BoardScoreHub Play Log</h1>
			{data.map((entry, index) => (
				<div key={index} className="play-log-entry">
					{playLogEntryToString(entry)
						.split('\n')
						.map((line, lineIndex) => (
							<p key={lineIndex}>{line}</p>
						))}
				</div>
			))}
			<HomeButton />
		</div>
	);
}

export default PlayLogView;
