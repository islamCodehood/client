import Post from '../components/post';
import Comments from '../components/comments';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../types';
import { Spinner } from 'react-bootstrap';

function PostDetails(): JSX.Element {
	const { id } = useParams();
	const post = useSelector((state: AppState) =>
		state.posts.find(post => post.id === +id!)
	);

	return (
		<div className='py-3'>
			{post ? (
				<Post postItem={post} />
			) : (
          <Spinner animation='border' variant='primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
			)}
			{post && post.comments.length ? <Comments postItem={post} /> : null}
		</div>
	);
}

export default PostDetails;
