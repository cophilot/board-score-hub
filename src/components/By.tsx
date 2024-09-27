/**
 * This is a By component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-22
 */
function By() {
	return (
		<div
			style={{
				marginTop: '50px',
				marginBottom: '50px',
				fontSize: '16px',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div className="mb">
				by{' '}
				<a href="https://philipp-bonin.com/" target="_blank">
					Philipp B.
				</a>
			</div>
			<div className="print-hide">
				<a
					href="https://github.com/cophilot/board-score-hub"
					target="_blank"
					style={{
						cursor: 'pointer',
					}}
				>
					Contribute on{'  '}
					<i
						className="bi bi-github"
						style={{
							fontSize: '26px',
						}}
					></i>
				</a>
			</div>
		</div>
	);
}
export default By;
