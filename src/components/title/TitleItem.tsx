import { IDataTitle } from "./Title";

export default function TitleItem({ item }: { item: IDataTitle }) {
	return (
		<div className="w-full px-8 py-2 flex justify-between items-center gap-5">
			<div>
				<h1 className="text-3xl font-['Pacifico'] py-3">{item.logo}</h1>
				<h3 className="text-base">{item.description}</h3>
			</div>
			<div>
				<p className="py-1">
					<a className=" text-lg" href={`tel:${item.telephone}`}>
						{item.telephone}
					</a>
				</p>
				<address>{item.address}</address>
			</div>
		</div>
	);
}
