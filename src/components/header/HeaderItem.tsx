import { IDataHeader } from "./Header";

export default function HeaderItem({ item }: { item: IDataHeader }) {
	return (
		<div className="w-full px-5 py-3 flex justify-between items-center">
			<nav>
				<ul className="flex gap-3">
					{item.arrData.map((item, index) => (
						<li
							className="bg-[#a9cef7] px-2 py-1 rounded-md cursor-pointer transition-all hover:bg-[#bbd8fa] active:scale-95"
							key={index}
						>
							{item}
						</li>
					))}
				</ul>
			</nav>
			<div className="flex justify-center items-center gap-3">
				<img className="w-7 h-7" src={item.emailIMG} alt={item.emailIMG} />
				<a className="text-xl" href={`mailto:${item.email}`}>
					{item.email}
				</a>
			</div>
		</div>
	);
}
