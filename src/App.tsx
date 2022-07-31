import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PostDetails from './pages/postDetails';
import AppBar from './components/appBar';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { getAllPosts } from './api';
import { getPosts } from './redux/actions/posts.actions';
import { useDispatch } from 'react-redux';

function App(): JSX.Element {
	const dispatch = useDispatch();
	useEffect(() => {
		getAllPosts().then(data => dispatch(getPosts(data.data.data)));
	}, []);

	return (
		<div className='App bg-light'>
			<AppBar />
			<Container fluid className=''>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/post/:id' element={<PostDetails />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
