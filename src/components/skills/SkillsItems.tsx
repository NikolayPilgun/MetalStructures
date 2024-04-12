import { IDataSkills } from "./Skills";
import SkillsItem from "./SkillsItem";

export default function SkillsItems({ item }: { item: IDataSkills[] }) {
	return (
		<div className="flex justify-around items-center gap-5">
			{item.map((item, index) => (
				<SkillsItem key={index} item={item} />
			))}
		</div>
	);
}
