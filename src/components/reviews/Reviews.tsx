import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../loading/Loading";
import WrongComponent from "../wrong/WrongComponent";
import ReviewsItem from "./ReviewsItem";

export interface IDataReviews {
	title: string;
	review: string;
	picture: string;
}

export default function Reviews() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<IDataReviews[] | string | undefined>([]);

	useEffect(() => {
		setIsLoaded(true);
		async function fetchData() {
			const data = await getServerData<IDataReviews>(
				"http://localhost:3000/reviewsData"
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
					<ReviewsItem item={items} />
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
