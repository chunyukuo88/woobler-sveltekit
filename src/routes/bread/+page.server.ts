type BreadImage = {
	key: string;
	lastModified: string;
	size: number;
	url: string;
};

function getBaseBreadName(key: string): string {
	return key
		.replace(/\.[^/.]+$/, "")     // remove extension
		.replace(/_[a-z0-9]+$/, "");  // remove variant suffix
}

export async function load() {
	// const breadImageSource = process.env.NEXT_PUBLIC_BREAD_SOURCE!;
	const breadImageSource = 'https://04i8uxhxud.execute-api.us-east-1.amazonaws.com/dev/src/getBreadPhotosAll';
	const response = await fetch(breadImageSource);
	const fetchResult: BreadImage[] = await response.json();

	const grouped = fetchResult.reduce<Record<string, BreadImage[]>>(
		(acc, image) => {
			const baseName = getBaseBreadName(image.key);

			if (!acc[baseName]) {
				acc[baseName] = [];
			}

			acc[baseName].push({
				key: image.key,
				lastModified: image.lastModified,
				size: image.size,
				url: image.url
			});

			return acc;
		},
		{}
	);

	return {
		breadGalleryData: grouped
	};
}
