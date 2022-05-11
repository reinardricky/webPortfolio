import AboutMe from "../components/aboutMe";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Welcome from "../components/welcome";

function MainPage() {
	return (
		<>
			<Header />
			<Welcome />
			<AboutMe />
			<Experience />
			<Footer />
		</>
	);
}

export default MainPage;
