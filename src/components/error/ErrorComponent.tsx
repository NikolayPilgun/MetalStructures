export default function ErrorComponent({ error }: { error: string }) {
	return (
		<div className="w-full h-[150px] flex flex-col gap-2 justify-center items-center border-2 border-solid border-red-600">
			<h2 className="text-red-600 text-2xl">
				Не удается подключиться к серверу
			</h2>
			<h3 className="text-base">Данный компонент временно недоступен</h3>
			<h3 className="text-base">{error}</h3>
		</div>
	);
}
