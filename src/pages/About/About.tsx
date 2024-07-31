import SpotifyEmbedPlayer from '@/components/SpotifyEmbedPlayer/SpotifyEmbedPlayer';
import { podcastEpisodes } from '@/components/SpotifyList/PodcastData';

function About() {
	return (
		<div>
			{/* conditional rendering expression to render Spotify Player with the latest episode if the data is present */}
			{podcastEpisodes[0]?.uri && (
				<SpotifyEmbedPlayer
					width='700px'
					height='200px'
					uri={podcastEpisodes[0].uri}
				/>
			)}
		</div>
	);
}

export default About;
