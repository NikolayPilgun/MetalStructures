import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../loading/Loading";
import WrongComponent from "../wrong/WrongComponent";
import TitleItem from "./TitleItem";

export interface IDataTitle {
	logo: string;
	description: string;
	telephone: string;
	address: string;
}

export default function Title() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<IDataTitle[] | string | undefined>([]);

	useEffect(() => {
		setIsLoaded(true);
		async function fetchData() {
			const data = await getServerData<IDataTitle>(
				"http://localhost:3000/titleData"
			);
			await setTimeout(() => {
				setIsLoaded(false);
				setItems(data);
			}, 1000);
		}
		fetchData();
	}, []);

	return (
		<div className="w-full bg-[#e9f3ff]">
			{
				// Show download status
				isLoaded ? (
					<Loading />
				) : // Content is located here
				Array.isArray(items) && items.length > 0 ? (
					<TitleItem item={items[0]} />
				) : null
			}
			{
				// Shows error
				typeof items === "string" && <ErrorComponent error={items} />
			}
			{
				// if something went wrong
				items === undefined && <WrongComponent />
			}
		</div>
	);
}
