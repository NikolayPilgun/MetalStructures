import { IDataOrder } from "./Order";

export default function OrderItem({ item }: { item: IDataOrder }) {
	return (
		<div className="w-full bg-black flex items-center justify-around py-9">
			<div className="flex items-center">
				<h3 className="w-min text-white text-right text-3xl border-r-4 px-5">
					{item.title}
				</h3>
				<p className="w-[600px] text-white px-10">{item.description}</p>
			</div>
			<button className="bg-amber-300  px-4 py-4">{item.button}</button>
		</div>
	);
}
