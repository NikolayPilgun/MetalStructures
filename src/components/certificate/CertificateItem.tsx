import { IDataCertificate } from "./Certificate";

export default function CertificateItem({ item }: { item: IDataCertificate }) {
	return (
		<div className="w-[80%] mx-auto text-center py-8">
			<h3 className="py-8 text-4xl">{item.title}</h3>
			<div className="flex justify-around items-center flex-wrap gap-5">
				{item.pictures.map((item, index) => (
					<img
						className=" w-[250px] h-[400px]"
						key={index}
						src={item}
						alt={item}
					/>
				))}
			</div>
		</div>
	);
}
