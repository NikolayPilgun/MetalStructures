import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";

interface IData {
	id: number;
	title: string;
	views: number;
}

export default function GetDataJson() {
	const [items, setItems] = useState<IData[] | string | undefined>([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getServerData<IData>("http://localhost:3000/posts");
			console.log("***********", data);

			setItems(data);
		}
		fetchData();
	}, []);

	if (typeof items === "string") {
		return (
			<div>
				<h2>{items}</h2>
			</div>
		);
	}
	if (Array.isArray(items)) {
		return (
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.title} {item.views}
					</li>
				))}
			</ul>
		);
	}
	if (items === undefined) {
		return (
			<div>
				<h2>Что-то пошло не так</h2>
			</div>
		);
	}
}
