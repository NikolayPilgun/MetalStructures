import { IDataOurWorks } from "./OurWorks";

export default function OurWorksItem({ item }: { item: IDataOurWorks }) {
	return (
		<div className="w-[90%] mx-auto text-center py-10">
			<h3 className="py-8 text-4xl">{item.title}</h3>
			<div className="flex justify-around items-center flex-wrap gap-5">
				{item.pictures.map((item, index) => (
					<img
						className=" w-[300px] h-[300px]"
						key={index}
						src={item}
						alt={item}
					/>
				))}
			</div>
		</div>
	);
}
