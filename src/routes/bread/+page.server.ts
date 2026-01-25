export async function load() {
	// const breadImageSource = process.env.NEXT_PUBLIC_BREAD_SOURCE!;
	const breadImageSource = 'https://04i8uxhxud.execute-api.us-east-1.amazonaws.com/dev/src/getBreadPhotosAll';
	const response = await fetch(breadImageSource);
	const fetchResult = await response.json();
console.dir(fetchResult);
	return {
		breadGalleryData: fetchResult.map((image) => ({
			key: image.key,
			lastModified: image.lastModified,
			size: image.size,
			url: image.url,
		})),
	};
}