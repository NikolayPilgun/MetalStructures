import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Progress from "./components/progresss/Progress";
import Skills from "./components/skills/Skills";
import Title from "./components/title/Title";

function App() {
	return (
		<div>
			<Header />
			<Title />
			<Banner />
			<Skills />
			<Progress />
		</div>
	);
}

export default App;
