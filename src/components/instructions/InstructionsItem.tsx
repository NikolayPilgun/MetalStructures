import { IDataInstructions } from "./Instructions";

export default function InstructionsItem({
	item,
}: {
	item: IDataInstructions[];
}) {
	return (
		<div className="flex flex-wrap justify-center items-center gap-5 py-8">
			{item.map((item, index) => (
				<div key={index} className="flex items-center">
					<div className="w-[150px] text-center flex flex-col items-center gap-3">
						<img
							className="w-[70px] h-[70px]"
							src={item.picture}
							alt={item.picture}
						/>
						<h3 className="text-lg text-white">{item.title}</h3>
					</div>

					{item.pictureArr && (
						<img
							className="w-[80px] h-[80px]"
							src={item.pictureArr}
							alt={item.picture}
						/>
					)}
				</div>
			))}
		</div>
	);
}
