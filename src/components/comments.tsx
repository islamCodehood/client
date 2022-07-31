import { Card } from 'react-bootstrap';
import Comment from './comment';
import { AppProps } from '../types';

const Comments = ({ postItem }: AppProps): JSX.Element => {
	return (
		<Card
			border='light'
			className='mt-3'
			style={{ maxWidth: '800px', minHeight: '250px' }}
		>
			<Card.Header className='p-4 fs-5' style={{ background: '#fff' }}>
				Comments
			</Card.Header>
			<Card.Body className='d-flex flex-column justify-content-between'>
				<div>
					{postItem?.comments.map(comment => (
						<Comment postItem={postItem} comment={comment} key={comment.id} />
					))}
				</div>
			</Card.Body>
		</Card>
	);
};
export default Comments;
