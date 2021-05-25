import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>Jedrek's Blog</title>
        <meta name='description' content='I write about programming.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
    revalidate: 1800,
  };
}
