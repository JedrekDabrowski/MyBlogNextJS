import Head from 'next/head';
import { Fragment } from 'react';

import PostConent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

export default function PostDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostConent post={props.post} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postsFilenames = getPostsFiles();
  const slugs = postsFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
