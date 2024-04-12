import { IDataSkills } from "./Skills";

export default function SkillsItem({ item }: { item: IDataSkills }) {
	return (
		<div className="w-[350px] flex flex-col justify-center items-center bg-white">
			<img className="w-full" src={item.picture} alt={item.picture} />
			<h3 className="py-5 text-2xl">{item.title}</h3>
			<p className="px-3 text-center">{item.subTitle}</p>
			<button className="my-5 px-3 py-3 bg-amber-300">{item.button}</button>
		</div>
	);
}
