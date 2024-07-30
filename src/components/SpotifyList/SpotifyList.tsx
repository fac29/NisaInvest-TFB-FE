import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';

export interface EpisodeProp {
	name: string;
	uri: string;
	date: string | Date;
}

// Extend the global Window interface to include onSpotifyIframeApiReady
declare global {
	interface Window {
		onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
		SpotifyIframeApi?: any;
	}
}

function PodcastEpisodes({ episodes }: { episodes: EpisodeProp[] }) {
	const [currentEpisode, setCurrentEpisode] = useState<EpisodeProp | null>(
		episodes[0] || null
	);
	const embedRef = useRef<HTMLDivElement>(null);
	const [embedController, setEmbedController] = useState<any>(null);

	useEffect(() => {
		if (!window.onSpotifyIframeApiReady) {
			window.onSpotifyIframeApiReady = (IFrameAPI) => {
				window.SpotifyIframeApi = IFrameAPI;
				if (embedRef.current) {
					IFrameAPI.createController(
						embedRef.current,
						{ width: '100%', height: '200px' }, // Set width and height here
						(controller: any) => {
							setEmbedController(controller);
							if (currentEpisode) {
								controller.loadUri(currentEpisode.uri);
							}
						}
					);
				}
			};

			const script = document.createElement('script');
			script.src = 'https://open.spotify.com/embed-podcast/iframe-api/v1';
			script.async = true;
			document.body.appendChild(script);
		} else if (embedController && currentEpisode) {
			embedController.loadUri(currentEpisode.uri);
		}
	}, [currentEpisode, embedController]);

	const playEpisode = (episode: EpisodeProp) => {
		setCurrentEpisode(episode);
		if (embedController) {
			embedController.loadUri(episode.uri);
		}
	};

	return (
		<div className='flex flex-col max-w-3xl mx-auto p-4 font-source-sans text-offWhite'>
			<div ref={embedRef}></div>
			<div className='h-[400px] overflow-y-auto bg-offWhite rounded-lg shadow-inner p-4 border-solid border-2 border-lilac'>
				{episodes.map((episode, index) => (
					<div
						key={index}
						className='flex justify-between items-center mb-4 bg-lilac rounded-lg shadow-md p-4'
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

export default PodcastEpisodes;
