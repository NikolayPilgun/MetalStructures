// export async function getServerData<T>(url: string): Promise<T> {
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	return data;
// }

// export const getServerData = async <T>(url: string): Promise<T> => {
// 	try {
// 		const response = await fetch(url);
// 		if (response.ok) {
// 			const data = await response.json();
// 			return data;
// 		} else {
// 			throw new Error(`Network response was not ok for ${url}`);
// 		}
// 	} catch (error) {
// 		throw new Error(`Error fetching data from ${url}`);
// 	}
// };

export const getServerData = async <T>(
	url: string
): Promise<Array<T> | string | undefined> => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		// if (error instanceof Error) {
		// 	return error.message;
		// }
		// if (error) {
		// 	const result = (error as Error).message;
		// 	return result;
		// }

		if (typeof error === "string") {
			return error;
		} else if (error instanceof Error) {
			return error.message;
		}
	}
};
