export function SongCard({ track }) {
  return (
    <li key={track.id} className='track-card'>
      <p>
        Artist: {track.name} - {track.artist}
      </p>
      <p>Album: {track.album}</p>
      <p>Duration: {track.duration}</p>
    </li>
  );
}
