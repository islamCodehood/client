import { Button, Container, Form, Navbar, Image } from 'react-bootstrap';
import logo from '../assets/logo/logo.png';
const AppBar = (): JSX.Element => {
	return (
		<Navbar bg='white'>
			<Container>
				<Navbar.Brand href='#'>
					<Image src={logo} width='80px' />
				</Navbar.Brand>
				<Navbar.Collapse
					className='d-flex justify-content-center'
					id='navbarScroll'
				>
					<Form className='d-flex w-75 justify-content-center'>
						<Form.Control
							type='search'
							placeholder='Search'
							className='me-2 w-100'
							aria-label='Search'
						/>
					</Form>
				</Navbar.Collapse>
				<Image
					width='50px'
					className='me-2'
					roundedCircle
					src='https://randomuser.me/api/portraits/men/46.jpg'
				/>
				<Button>New Post</Button>
			</Container>
		</Navbar>
	);
};

export default AppBar;
