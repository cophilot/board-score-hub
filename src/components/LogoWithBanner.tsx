import Logo from './Logo';

interface LogoWithBannerProps {
	logoBgColor?: string;
	banner?: string;
	title: string;
}

/**
 * This is a LogoWithBanner component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-1-27
 */
function LogoWithBanner({ logoBgColor, banner, title }: LogoWithBannerProps) {
	return (
		<>
			<Logo
				size={100}
				bgColor={logoBgColor || '#fff'}
				style={{
					zIndex: 11,
				}}
			/>
			{banner && (
				<img
					className="image-transparency-gradient"
					src={banner}
					alt={title}
					style={{
						width: '100%',
						height: 'auto',
						maxWidth: '600px',
						marginTop: '-150px',
						opacity: 0.8,
						zIndex: 10,
					}}
				/>
			)}
		</>
	);
}
export default LogoWithBanner;
