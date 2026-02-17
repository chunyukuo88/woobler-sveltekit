import { type Album, emptyAlbum } from './types';

export function getSelectedAlbum(albums: Album[], selectedAlbumName: string){
	const matchingAlbum = albums.find((a) => a.friendlyName === selectedAlbumName);
	const defaultAlbum = albums[0] ?? emptyAlbum;
	return (matchingAlbum !== undefined) ? matchingAlbum : defaultAlbum;
}