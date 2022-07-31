import Post from './post';
import { useSelector } from 'react-redux';
import {AppState} from '../types'

const Posts = (): JSX.Element => {
  const posts = useSelector((state: AppState) => state.posts);
  console.log(posts)
	return (
		<div>
      {
        posts.map((post) => {
          return <Post key={post.id} postItem={post}  />
        })
      }
		</div>
	);
};

export default Posts;
