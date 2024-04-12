import { IDataSkills } from "./Skills";

export default function SkillsItems({ item }: { item: IDataSkills[] }) {
	console.log(item);

	return (
		<div className="w-full ">
			<h2>{item[0].subTitle}</h2>
		</div>
	);
}
