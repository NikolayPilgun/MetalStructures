import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import Certificate from "./components/certificate/Certificate";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Instructions from "./components/instructions/Instructions";
import Order from "./components/order/Order";
import OurClients from "./components/ourClients/OurClients";
import OurWorks from "./components/ourWorks/OurWorks";
import Progress from "./components/progress/Progress";
import Reviews from "./components/reviews/Reviews";
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
			<Instructions />
			<Order />
			<OurClients />
			<Reviews />
			<Footer />
			<Order />
		</div>
	);
}

export default App;
