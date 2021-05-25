import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='Send me your feedback, please.' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
