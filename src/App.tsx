import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import Certificate from "./components/certificate/Certificate";
import Header from "./components/header/Header";
import OurWorks from "./components/ourWorks/OurWorks";
import Progress from "./components/progress/Progress";
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
			<AboutUs />
			<OurWorks />
			<Certificate />
		</div>
	);
}

export default App;
