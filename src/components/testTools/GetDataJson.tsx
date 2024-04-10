// import { useEffect, useState } from "react";
// import { getServerData } from "../../utilities/asyncRequests";
// import ErrorComponent from "../error/ErrorComponent";
// import Loading from "../loading/Loading";
// import WrongComponent from "../wrong/WrongComponent";
// import DemoComponent from "./DemoComponent";

// export interface IData {
// 	id: string;
// 	title: string;
// 	views: number;
// }

// export default function GetDataJson() {
// 	const [isLoaded, setIsLoaded] = useState(false);
// 	const [items, setItems] = useState<IData[] | string | undefined>([]);

// 	useEffect(() => {
// 		setIsLoaded(true);
// 		async function fetchData() {
// 			const data = await getServerData<IData>("http://localhost:3000/posts");
// 			await setTimeout(() => {
// 				setIsLoaded(false);
// 				setItems(data);
// 			}, 1000);
// 		}
// 		fetchData();
// 	}, []);

// 	return (
// 		<div className="w-full min-h-[150px]">
// 			{
// 				// Show download status
// 				isLoaded ? (
// 					<Loading />
// 				) : // Content is located here
// 				Array.isArray(items) ? (
// 					<DemoComponent items={items} />
// 				) : null
// 			}
// 			{
// 				// Shows error
// 				typeof items === "string" && <ErrorComponent error={items} />
// 			}
// 			{
// 				// if something went wrong
// 				items === undefined && <WrongComponent />
// 			}
// 		</div>
// 	);
// }

// Show download status
// if (isLoaded) {
// 	return <Loading />;
// }
// Shows error
// if (typeof items === "string") {
// 	return (
// 		<div>
// 			<h2>{items}</h2>
// 		</div>
// 	);
// }

// Content is located here
// if (Array.isArray(items)) {
// 	return (
// 		<ul>
// 			{items.map((item) => (
// 				<li key={item.id}>
// 					{item.title} {item.views}
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// if something went wrong
// if (items === undefined) {
// 	return (
// 		<div>
// 			<h2>Что-то пошло не так</h2>
// 		</div>
// 	);
// }
