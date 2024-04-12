import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../loading/Loading";
import WrongComponent from "../wrong/WrongComponent";
import BannerItem from "./BannerItem";

export interface IDataBanner {
	title: string;
	subTitle: string;
	picture: string;
	button: string;
}

export default function Banner() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<IDataBanner[] | string | undefined>([]);

	useEffect(() => {
		setIsLoaded(true);
		async function fetchData() {
			const data = await getServerData<IDataBanner>(
				"http://localhost:3000/bannerData"
			);
			await setTimeout(() => {
				setIsLoaded(false);
				setItems(data);
			}, 1000);
		}
		fetchData();
	}, []);

	return (
		<div className="w-full">
			{
				// Show download status
				isLoaded ? (
					<Loading />
				) : // Content is located here
				Array.isArray(items) && items.length > 0 ? (
					<BannerItem item={items[0]} />
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
