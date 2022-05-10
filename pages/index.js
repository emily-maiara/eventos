import Head from 'next/head'
import styles from '../styles/Home.module.css'

 function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow "/>
        <meta name="viewport" content="initial-scale=1.0,
        width-device-width" />
        <title>Site Eventos</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindo!
        </h1>
        <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
           Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.
           Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
        </h2>
      </main>
    </div>
  )
}

export default Home;

