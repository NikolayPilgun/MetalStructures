import { IDataProgress } from "./Progress";
import ProgressItem from "./ProgressItem";

export default function ProgressItems({ item }: { item: IDataProgress[] }) {
	return (
		<div className="h-[200px] flex justify-around items-center gap-5 bg-[#00A55E]">
			{item.map((item, index) => (
				<ProgressItem key={index} item={item} />
			))}
		</div>
	);
}
