import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! My name is <strong>Coeli Therese Brillante</strong></p>
        <p><em>Coeli (n.) Che~Lee</em></p>
        <p>Most people call me by my first name or when they're close to me they call me <em>"Che"</em> for short. My name is probably one of the most unique names there is. My parents named me "Coeli" which translates to <strong>"Heaven"</strong> in Latin. I was also named after <strong>St. Therese of the Child Jesus</strong> because she is the partron saint of my grandmothers.</p>
        <p>When I am not busy coding, or stressing about my next deadline you can find me rotting in video games such as <em>Overwatch, Minecraft, Mobile Legends</em> or basically any game I feel like playing that day. I also love singing <em>secretly~ </em></p>
        <p>While we are on the topic of music, I love melodic rap songs, pop music, I am not really into R&B music there are a few R&B songs I like but I dont really gravitate towards it. The artists that I listen to as of recent are <em>Sabrina Carpenter, Tory Lanez, SZA, Post Malone, Kehlani, Don Toliver, and Madison Beer.</em> As of late, my favorite songs are <em>Lady of Namek - Tory Lanez, The First Time - Damiano, and Lose My Mind - Don Toliver (ft. Doja Cat)</em></p>
        <p>As I look farther into the future, I see myself as a successful <strong>Front-End-Developer.</strong> Curating designs really is one of my biggest passions in life. I absolutely love creating designs of my own and collaborating with other designers and developers to create something has meaning and will be loved by everyone. As of right now, I am particularly focused on expanding my developers portfolio as I am still very much learning and trying to perfect my craft. It will take some time, but I know that with a little bit of faith, prayer and work I can accomplish what my heart desires.</p>
        <p>
          Here is my current portfolio, it is still a working progress but I hope you will find it quite enjoyable{' '}
          <a href="https://coelitherese.github.io/Zenith/">Zenith</a>.
        </p> 
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

      </section>
    </Layout>
  );
}