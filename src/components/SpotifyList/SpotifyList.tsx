import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '../ui/button';

export interface EpisodeProp {
	name: string;
	uri: string;
	date: string | Date;
}

declare global {
	interface Window {
		onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
		SpotifyIframeApi?: any;
	}
}

function SpotifyList({ episodes }: { episodes: EpisodeProp[] }) {
	const [currentEpisode, setCurrentEpisode] = useState<EpisodeProp | null>(
		episodes[0] || null
	);
	const embedRef = useRef<HTMLDivElement>(null);
	const [embedController, setEmbedController] = useState<any>(null);
	const [isApiReady, setIsApiReady] = useState(false);

	const initializeSpotifyApi = useCallback(() => {
		if (!window.SpotifyIframeApi) {
			window.onSpotifyIframeApiReady = (IFrameAPI) => {
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
		} else {
			setIsApiReady(true);
		}
	}, []);

	useEffect(() => {
		const cleanup = initializeSpotifyApi();
		return cleanup;
	}, [initializeSpotifyApi]);

	useEffect(() => {
		if (isApiReady && embedRef.current && !embedController) {
			window.SpotifyIframeApi.createController(
				embedRef.current,
				{ width: '100%', height: '200px' },
				(controller: any) => {
					setEmbedController(controller);
					if (currentEpisode) {
						controller.loadUri(currentEpisode.uri);
					}
				}
			);
		}
	}, [isApiReady, currentEpisode, embedController]);

	useEffect(() => {
		if (embedController && currentEpisode) {
			embedController.loadUri(currentEpisode.uri);
		}
	}, [currentEpisode, embedController]);

	const playEpisode = (episode: EpisodeProp) => {
		setCurrentEpisode(episode);
	};

	return (
		<div className='flex flex-col max-w-3xl mx-auto p-4 font-source-sans text-primaryBlack'>
			<div ref={embedRef}></div>
			<div className='h-[400px] overflow-y-auto bg-offWhite rounded-lg shadow-inner p-4 border-solid border-2 border-lilac'>
				{episodes.map((episode, index) => (
					<div
						key={index}
						className='flex justify-between items-center mb-4 bg-white rounded-lg shadow-md p-4'
					>
						<div>
							<h3 className='text-lg font-semibold mb-2'>{episode.name}</h3>
							<p className='text-sm mb-2'>
								{new Date(episode.date).toLocaleDateString()}
							</p>
						</div>
						<Button onClick={() => playEpisode(episode)}>Play Episode</Button>
					</div>
				))}
			</div>
		</div>
	);
}

export default SpotifyList;
