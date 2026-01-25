export async function load() {
	try {
		const response = await fetch('https://6nxnraji72.execute-api.us-east-2.amazonaws.com/gallery');
		const fetchResult = await response.json();
		return {
			albums: fetchResult,
		};
	} catch (error) {
		console.error('it broke');
	}
}

type Photo = {
	name: string;
	friendlyName: string;
	photos: string[];
	captions: string[];
}