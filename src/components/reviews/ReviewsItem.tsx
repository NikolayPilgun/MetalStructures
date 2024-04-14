import { IDataReviews } from "./Reviews";

export default function ReviewsItem({ item }: { item: IDataReviews[] }) {
	return (
		<div className="py-7">
			<h3 className="text-center text-4xl ">Отзывы наших клиентов</h3>
			<div className="flex justify-around gap-7 py-6">
				{item.map((item, index) => (
					<div key={index}>
						<div className="flex justify-between items-center py-6">
							<h4 className="text-2xl text-green-800">{item.title}</h4>
							<img src={item.picture} alt={item.picture} />
						</div>
						<p className="max-w-[500px]">{item.review}</p>
					</div>
				))}
			</div>
		</div>
	);
}
