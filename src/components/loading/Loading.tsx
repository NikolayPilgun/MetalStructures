export default function Loading() {
	return (
		<div className="w-full h-[50px] flex  gap-5 justify-center items-center">
			<div
				className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
				role="status"
			></div>
			<div>
				<h2>Loading...</h2>
			</div>
		</div>
	);
}
