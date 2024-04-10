import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../loading/Loading";
import WrongComponent from "../wrong/WrongComponent";
import HeaderItem from "./HeaderItem";

export interface IDataHeader {
	title: string;
	arrData: string[];
	email: string;
	emailIMG: string;
}

export default function Header() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<IDataHeader[] | string | undefined>([]);

	useEffect(() => {
		setIsLoaded(true);
		async function fetchData() {
			const data = await getServerData<IDataHeader>(
				"http://localhost:3000/headerData"
			);
			await setTimeout(() => {
				setIsLoaded(false);
				setItems(data);
			}, 1000);
		}
		fetchData();
	}, []);

	return (
		<header className="w-full bg-[#D7EAFE]">
			{
				// Show download status
				isLoaded ? (
					<Loading />
				) : // Content is located here
				Array.isArray(items) && items.length > 0 ? (
					<HeaderItem item={items[0]} />
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
		</header>
	);
}
