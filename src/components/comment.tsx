import { Card, Image } from 'react-bootstrap';
import { AppProps } from '../types';

const Comment = ({postItem, comment}: AppProps): JSX.Element=> {

	return (
			<div className='d-flex justify-content-start align-items-center'>
				<Image src='https://via.placeholder.com/70' roundedCircle />
				<div className='d-flex flex-column justify-content-start m-2'>
					<Card.Title className='fs-6'>{postItem?.user.firstName}</Card.Title>
					<Card.Text>
						{comment?.body}
						<div className='text-muted'>{comment?.createdAt}</div>
					</Card.Text>
				</div>
			</div>
	);
};

export default Comment;
