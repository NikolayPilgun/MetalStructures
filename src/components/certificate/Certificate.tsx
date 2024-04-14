import { useEffect, useState } from "react";
import { getServerData } from "../../utilities/asyncRequests";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../loading/Loading";
import WrongComponent from "../wrong/WrongComponent";
import CertificateItem from "./CertificateItem";

export interface IDataCertificate {
	title: string;
	pictures: string[];
}

export default function Certificate() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<IDataCertificate[] | string | undefined>(
		[]
	);

	useEffect(() => {
		setIsLoaded(true);
		async function fetchData() {
			const data = await getServerData<IDataCertificate>(
				"http://localhost:3000/certificatesData"
			);
			await setTimeout(() => {
				setIsLoaded(false);
				setItems(data);
			}, 1000);
		}
		fetchData();
	}, []);

	return (
		<div className="w-full bg-white">
			{
				// Show download status
				isLoaded ? (
					<Loading />
				) : // Content is located here
				Array.isArray(items) && items.length > 0 ? (
					<CertificateItem item={items[0]} />
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
