export const getAllPosts = (posts: []) => {
  return {
    type: 'GET_POSTS',
    payload: posts
  }
}