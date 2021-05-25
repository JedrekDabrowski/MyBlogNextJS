import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/jedrek.jpg'
          alt='Image showing Jedrek'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jędrek</h1>
      <p>I blog about web development especially frontend!</p>
    </section>
  );
}
