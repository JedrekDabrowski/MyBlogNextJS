import PostGrid from './post-grid';
import classes from './all-post.module.css';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
export default AllPosts;
