import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/aboutPage";
import PortfolioPage from "./pages/portfolioPage";
import ContactPage from "./pages/contactPage";

function App() {
	return (
		<div className="App">
			<Header />
			<AboutPage />
			<PortfolioPage />
			<ContactPage />
		</div>
	);
}

export default App;
