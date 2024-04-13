import { IDataAboutUs } from "./AboutUs";

export default function AboutUsItem({ item }: { item: IDataAboutUs }) {
	return (
		<div className="w-[70%] mx-auto text-center">
			<h3 className="text-3xl tracking-wide py-5">{item.title}</h3>
			<p className="text-lg leading-loose">{item.description}</p>
		</div>
	);
}
