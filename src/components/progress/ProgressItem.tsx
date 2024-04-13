import { IDataProgress } from "./Progress";

export default function ProgressItem({ item }: { item: IDataProgress }) {
	return (
		<div className="flex justify-center items-center gap-5">
			<img
				className="w-[80px] h-[80px]"
				src={item.picture}
				alt={item.picture}
			/>
			<div className="border-l-4 h-[100px]  border-white"></div>
			<div className="w-[200px] px-3 py-2">
				<h3 className="text-xl text-white">{item.title}</h3>
				<p className="text-white">{item.subTitle}</p>
			</div>
		</div>
	);
}
