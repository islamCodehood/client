import { Card, Image, Button } from 'react-bootstrap';
import { ReactComponent as ThumbUpIcon } from '../assets/icons/thumb-up.svg';
import { ReactComponent as ThumbDownIcon } from '../assets/icons/thumb-down.svg';
import { ReactComponent as CommentIcon } from '../assets/icons/comment.svg';
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg';
import { Link, useLocation } from 'react-router-dom';
import { AppProps } from '../types';
import { vote } from '../api';

const Post = ({ postItem }: AppProps): JSX.Element => {
	const location = useLocation();
	
	return (
		<Card
			border='light'
			className='mb-3'
			style={{ maxWidth: '800px', minHeight: '285px' }}
		>
			<Card.Body className='d-flex flex-column justify-content-between'>
				<div className='d-flex justify-content-start align-items-center'>
					<Image src='https://via.placeholder.com/70' roundedCircle />
					<div className='d-flex flex-column justify-content-start align-items-center m-2'>
						<Card.Title>{`${postItem?.user.firstName} ${postItem?.user.lastName}`}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
					</div>
				</div>
				<div>
					<Card.Title>{postItem?.title}</Card.Title>
					<Card.Text>{postItem?.body}</Card.Text>
				</div>
				<div className='d-flex justify-content-between align-items-center'>
					<div>
						<span className='me-2'>
							{postItem?.votes.filter(vote => vote.voteValue === 1).length}
							<ThumbUpIcon onClick={() => vote(1)} className='ms-1' />
						</span>
						<span className='me-2'>
							{postItem?.votes.filter(vote => vote.voteValue === -1).length}
							<ThumbDownIcon onClick={() => vote(-1)} className='ms-1' />
						</span>
						<span className='me-2'>
							{postItem?.comments.length ? (
								<Link className='m-2 text-decoration-none' to={`/post/${postItem?.id}`}>
									{postItem?.comments.length}
									<CommentIcon className='ms-1' />
								</Link>
							) : (
								<>
									{postItem?.comments.length}
									<CommentIcon className='ms-1' />
								</>
							)}
						</span>
					</div>
					<div>
						<Button variant='muted' className='m-2' href='#'>
							Delete
						</Button>
						{location.pathname === '/' ? (
							<Link className='m-2 text-decoration-none' to={`/post/${postItem?.id}`}>
								Read More
								<ArrowRight />
							</Link>
						) : (
							<Link className='m-2 text-decoration-none' to="/">
								Back
							</Link>
						)}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Post;
