import React, { useState, useEffect, useRef, useCallback } from 'react';

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
	const [isApiReady, setIsApiReady] = useState(false);

	const initializeSpotifyApi = useCallback(() => {
		if (window.SpotifyIframeApiReady) {
			setIsApiReady(true);
		} else if (!window.onSpotifyIframeApiReady) {
			window.onSpotifyIframeApiReady = (IFrameAPI) => {
				window.SpotifyIframeApiReady = true;
				window.SpotifyIframeApi = IFrameAPI;
				setIsApiReady(true);
			};

			const script = document.createElement('script');
			script.src = 'https://open.spotify.com/embed-podcast/iframe-api/v1';
			script.async = true;
			document.body.appendChild(script);

			return () => {
				document.body.removeChild(script);
			};
		}
	}, []);

	useEffect(() => {
		const cleanup = initializeSpotifyApi();
		return cleanup;
	}, [initializeSpotifyApi]);

	const createEmbed = useCallback(() => {
		if (embedRef.current && window.SpotifyIframeApi) {
			window.SpotifyIframeApi.createController(
				embedRef.current,
				{
					uri,
					width,
					height,
				},
				(EmbedController: any) => {}
			);
		}
	}, [uri, width, height]);

	useEffect(() => {
		if (isApiReady) {
			createEmbed();
		}
	}, [isApiReady, createEmbed]);

	return <div ref={embedRef} />;
};

export default SpotifyEmbedPlayer;
