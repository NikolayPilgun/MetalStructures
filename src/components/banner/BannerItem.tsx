import { IDataBanner } from "./Banner";

export default function BannerItem({ item }: { item: IDataBanner }) {
	return (
		<div className="w-full relative">
			<img className="w-full h-[800px]" src={item.picture} alt={item.picture} />
			<h2 className="absolute top-[5%] left-[5%] text-4xl text-white">
				{item.title}
			</h2>
			<h3 className="absolute top-[12%] left-[5%] text-xl text-white">
				{item.subTitle}
			</h3>
			<button className="absolute top-[20%] left-[5%] px-4 py-5 bg-amber-300 text-xl ">
				{item.button}
			</button>
		</div>
	);
}
