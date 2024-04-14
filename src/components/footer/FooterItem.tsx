import { IDataFooter } from "./Footer";

export default function FooterItem({ item }: { item: IDataFooter }) {
	return (
		<img className="w-full h-[400px]" src={item.pictures} alt={item.pictures} />
	);
}
