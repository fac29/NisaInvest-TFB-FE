import React, { useEffect, useRef } from 'react';

interface SpotifyEmbedProps {
	uri: string;
}

declare global {
	interface Window {
		onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
		SpotifyIframeApiReady?: boolean;
		SpotifyIframeApi?: any;
	}
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ uri }) => {
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
	}, [uri]);

	return <div ref={embedRef} />;
};

export default SpotifyEmbed;
