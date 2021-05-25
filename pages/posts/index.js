import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta name='desription' content='All my post about programming' />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPost = getAllPosts();

  return {
    props: {
      posts: allPost,
    },
    revalidate: 1800,
  };
}
