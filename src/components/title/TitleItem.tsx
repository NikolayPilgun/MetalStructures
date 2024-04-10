import { IDataTitle } from "./Title";

export default function TitleItem({ item }: { item: IDataTitle }) {
	console.log(item);

	return (
		<div className="w-full px-5 py-3 flex justify-between items-center"></div>
	);
}
