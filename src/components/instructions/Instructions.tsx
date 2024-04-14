import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../loading/Loading";
import WrongComponent from "../wrong/WrongComponent";
import InstructionsItem from "./InstructionsItem";

export interface IDataInstructions {
	title: string;
	picture: string;
	pictureArr?: string;
}

export default function Instructions() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<IDataInstructions[] | string | undefined>(
		[]
	);

	useEffect(() => {
		setIsLoaded(true);
		async function fetchData() {
			const data = await getServerData<IDataInstructions>(
				"http://localhost:3000/instructionsData"
			);
			await setTimeout(() => {
				setIsLoaded(false);
				setItems(data);
			}, 1000);
		}
		fetchData();
	}, []);

	return (
		<div className="w-full bg-[#00A55E]">
			{
				// Show download status
				isLoaded ? (
					<Loading />
				) : // Content is located here
				Array.isArray(items) && items.length > 0 ? (
					<InstructionsItem item={items} />
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
