import { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import HomeButton from '../../components/HomeButton/HomeButton';
import './ContributorsView.scss';

/**
 * This is the ContributorsView
 * @author cophilot
 * @version 1.0.0
 * @created 2025-1-26
 * @modified 2025-8-21
 */

interface Contributor {
	login: string;
	avatar_url: string;
	html_url: string;
	type: string;
}

function ContributorsView() {
	const [contributors, setContributors] = useState<Contributor[]>([]);
	useEffect(() => {
		document.title = 'BoardScoreHub';
		const controller = new AbortController();

		async function fetchContributors() {
			try {
				const res = await fetch(
					'https://api.github.com/repos/cophilot/board-score-hub/contributors',
					{ signal: controller.signal },
				);
				if (!res.ok) throw new Error('Failed to fetch contributors');
				const data: Contributor[] = await res.json();
				setContributors(
					// Filter out bots and cophilot
					data.filter((c) => c.type === 'User' && c.login !== 'cophilot'),
				);
			} catch (err: unknown) {
				if (err instanceof Error && err.name !== 'AbortError') {
					console.error('Error fetching contributors:', err);
				}
			}
		}

		fetchContributors();
		return () => controller.abort();
	}, []);

	return (
		<div className="content">
			<Logo detectDarkMode />
			<h1>BoardScoreHub Contributors</h1>
			<div className="contributors">
				<p>
					Special thanks to the following people for their contributions to
					BoardScoreHub 🙌
				</p>
				<div className="contributors-list">
					{contributors.map((contributor) => (
						<div key={contributor.login} className="contributor-card">
							<a
								href={contributor.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="contributor-avatar-link"
							>
								<img
									src={contributor.avatar_url}
									alt={contributor.login}
									className="contributor-avatar"
								/>
							</a>
							<br />
							<a
								href={contributor.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="contributor-name"
							>
								{contributor.login}
							</a>
						</div>
					))}
				</div>
			</div>
			<HomeButton />
		</div>
	);
}

export default ContributorsView;
