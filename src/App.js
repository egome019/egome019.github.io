import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/aboutPage";
import PortfolioPage from "./pages/portfolioPage";
import ContactPage from "./pages/contactPage";
import SkillsPage from "./pages/skills";
import Footer from "./components/footer";

function App() {
	return (
		<div className="App">
			<Header />
			<AboutPage />
			<SkillsPage />
			<PortfolioPage />
			<ContactPage />
			<Footer />
		</div>
	);
}

export default App;
