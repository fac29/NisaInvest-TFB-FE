import { podcastEpisodes } from '@/components/SpotifyList/PodcastData';
import SpotifyList from '@/components/SpotifyList/SpotifyList';

function Podcast() {
	return (
		<div className='min-h-screen flex flex-col justify-center'>
			<SpotifyList episodes={podcastEpisodes}></SpotifyList>
		</div>
	);
}

export default Podcast;
