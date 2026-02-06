import { type FetchFoldersResponse, type Album } from './types';

export async function load({ url }): FetchFoldersResponse {
	const keyFromQueryParam = url.searchParams.get(import.meta.env.VITE_FF_PRIVATE_IMAGES_KEY);
	const shouldGetPrivateImages = (keyFromQueryParam === import.meta.env.VITE_FF_PRIVATE_IMAGES_VAL);
	return shouldGetPrivateImages
		? getFoldersPrivate()
		: getFoldersPublic();
}

async function getFoldersPrivate(): FetchFoldersResponse {
	try {
		const response = await fetch(import.meta.env.VITE_PRIVATE_IMAGE_SOURCE);
		const fetchResult: Album[] = await response.json();
		return {
			albums: fetchResult,
			showPrivateImages: true,
			bucket: import.meta.env.VITE_BUCKET_MAIN_PRIVATE,
		};
	} catch (error) {
		console.error('🥝 Unable to fetch private folders');
		return failToFetchResult;
	}
}

async function getFoldersPublic(): FetchFoldersResponse {
	try {
		const response = await fetch(import.meta.env.VITE_NON_PRIVATE_IMAGE_SOURCE);
		const fetchResult: Album[] = await response.json();
		return {
			albums: fetchResult,
			showPrivateImages: false,
			bucket: import.meta.env.VITE_BUCKET_MAIN_NOT_PRIVATE,
		};
	} catch (error) {
		console.error('🐕 Unable to fetch public folders');
		return failToFetchResult;
	}
}

const failToFetchResult = {
	albums: [],
	showPrivateImages: false,
	bucket: import.meta.env.VITE_BUCKET_MAIN_NOT_PRIVATE,
};
