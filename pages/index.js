import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow " />
        <meta name="viewport" content="initial-scale=1.0,
        width-device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <title>Site Eventos</title>
      </Head>
      <main className={styles.main}>
        <img src='/favicon.ico' />
        <h1 className={styles.title}>
          Bem Vindo!
        </h1>
        <h2 className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
          Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.
          Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
        </h2>
        <button type="button" class="btn btn-light btn-lg">Entrar</button>
         <h2 className={styles.description}>Ainda não possui conta?<Link href="/cadastro"><a>Criar Conta</a></Link></h2>
      </main>
    </div>
  )
}

export default Home;



