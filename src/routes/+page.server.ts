import {
	FF_PRIVATE_IMAGES_KEY,
	FF_PRIVATE_IMAGES_VAL,
	PRIVATE_IMAGE_SOURCE,
	NON_PRIVATE_IMAGE_SOURCE,
	BUCKET_MAIN_PRIVATE,
	BUCKET_MAIN_NOT_PRIVATE
} from '$env/static/private';

export async function load({ url }) {
	const keyFromQueryParam = url.searchParams.get(FF_PRIVATE_IMAGES_KEY);

	const shouldGetPrivateImages = (keyFromQueryParam === FF_PRIVATE_IMAGES_VAL);
	return shouldGetPrivateImages
		? getFoldersPrivate()
		: getFoldersPublic();
}

async function getFoldersPrivate(){
	try {
		const response = await fetch(PRIVATE_IMAGE_SOURCE);
		const fetchResult = await response.json();
		return {
			albums: fetchResult,
			showPrivateImages: true,
			bucket: BUCKET_MAIN_PRIVATE,
		};
	} catch (error) {
		console.error('🥝 Unable to fetch private folders');
		return {
			albums: [],
			showPrivateImages: false,
			bucket: BUCKET_MAIN_PRIVATE,
		};
	}
}
async function getFoldersPublic(): Promise<FetchSuccessType> {
	try {
		const response = await fetch(NON_PRIVATE_IMAGE_SOURCE);
		const fetchResult = await response.json();
		return {
			albums: fetchResult,
			showPrivateImages: false,
			bucket: BUCKET_MAIN_NOT_PRIVATE,
		};
	} catch (error) {
		console.error('🐕 Unable to fetch public folders');
		return {
			albums: [],
			showPrivateImages: false,
			bucket: BUCKET_MAIN_NOT_PRIVATE,
		};
	}
}


type FetchSuccessType = {
	albums: any;
	showPrivateImages: boolean;
	bucket: string;
}