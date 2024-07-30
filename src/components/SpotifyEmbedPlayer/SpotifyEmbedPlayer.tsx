import React, { useEffect, useRef } from 'react';

interface SpotifyEmbedProps {
	uri: string;
	width?: string;
	height?: string;
}

declare global {
	interface Window {
		onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
		SpotifyIframeApiReady?: boolean;
		SpotifyIframeApi?: any;
	}
}

const SpotifyEmbedPlayer: React.FC<SpotifyEmbedProps> = ({
	uri,
	width = '100%',
	height = '350px',
}) => {
	const embedRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.SpotifyIframeApiReady) {
			createEmbed();
		} else if (!window.onSpotifyIframeApiReady) {
			window.onSpotifyIframeApiReady = (IFrameAPI) => {
				window.SpotifyIframeApiReady = true;
				window.SpotifyIframeApi = IFrameAPI;
				createEmbed();
			};

			const script = document.createElement('script');
			script.src = 'https://open.spotify.com/embed-podcast/iframe-api/v1';
			script.async = true;
			document.body.appendChild(script);
		}

		function createEmbed() {
			if (embedRef.current && window.SpotifyIframeApi) {
				window.SpotifyIframeApi.createController(
					embedRef.current,
					{
						uri,
						width,
						height,
					},
					(EmbedController: any) => {
						console.log('Spotify Embed created successfully');
					}
				);
			}
		}

		return () => {
			// Cleanup if necessary
		};
	}, [uri, width, height]);

	return <div ref={embedRef} />;
};

export default SpotifyEmbedPlayer;
