import {
	FF_PRIVATE_IMAGES_KEY,
	FF_PRIVATE_IMAGES_VAL,
	PRIVATE_IMAGE_SOURCE,
	NON_PRIVATE_IMAGE_SOURCE,
	BUCKET_MAIN_PRIVATE,
	BUCKET_MAIN_NOT_PRIVATE
} from '$env/static/private';
import { type FetchFoldersResponse, type Album } from './types';

export async function load({ url }): FetchFoldersResponse {
	const keyFromQueryParam = url.searchParams.get(FF_PRIVATE_IMAGES_KEY);
	const shouldGetPrivateImages = (keyFromQueryParam === FF_PRIVATE_IMAGES_VAL);
	return shouldGetPrivateImages
		? getFoldersPrivate()
		: getFoldersPublic();
}

async function getFoldersPrivate(): FetchFoldersResponse {
	try {
		const response = await fetch(PRIVATE_IMAGE_SOURCE);
		const fetchResult: Album[] = await response.json();
		return {
			albums: fetchResult,
			showPrivateImages: true,
			bucket: BUCKET_MAIN_PRIVATE,
		};
	} catch (error) {
		console.error('🥝 Unable to fetch private folders');
		return failToFetchResult;
	}
}

async function getFoldersPublic(): FetchFoldersResponse {
	try {
		const response = await fetch(NON_PRIVATE_IMAGE_SOURCE);
		const fetchResult: Album[] = await response.json();
		return {
			albums: fetchResult,
			showPrivateImages: false,
			bucket: BUCKET_MAIN_NOT_PRIVATE,
		};
	} catch (error) {
		console.error('🐕 Unable to fetch public folders');
		return failToFetchResult;
	}
}

const failToFetchResult = {
	albums: [],
	showPrivateImages: false,
	bucket: BUCKET_MAIN_NOT_PRIVATE,
};
