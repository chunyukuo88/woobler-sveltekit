export type FetchFoldersResponse = Promise<{
	albums: Album[];
	bucket: string;
	showPrivateImages: boolean;
}>;

export type Album = {
	captions: string[];
	friendlyName: string;
	name: string;
	photos: string[];
};

export const emptyAlbum = {
	captions: [],
	friendlyName: '',
	name: '',
	photos: [],
};
