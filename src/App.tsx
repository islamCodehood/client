import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import PostDetails from './pages/postDetails';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App():JSX.Element {
	return (
	<div className='App'>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/post/:id" element={<PostDetails />} />
		</Routes>
		<Footer />
	</div>
	);
}

export default App;
