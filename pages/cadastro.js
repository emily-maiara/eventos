import Head from 'next/head'
import styles from '../styles/Home.module.css'


function Cadastro(){
return (
    <div className={styles.formulario}>
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
        <nav class={styles.icon}>
      <a class="navbar-brand" href="#">
      <img src='/favicon.ico' width="200" height="60" class={styles.icon} alt=""/>
      </a>
      </nav>
      </Head>
      <main class={styles.main}>
      <h1 className={styles.title2}>
          Cadastro
      </h1>
      <form class={styles.formulario}>
      <div class="">
      <label for="inputNome"></label>
      <input type="nome" class="form-control" id="inputNome" placeholder="Nome"></input>
    </div>
    <div class="">
      <label for="inputSobrenome"></label>
      <input type="sobrenome" class="form-control" id="inputSobrenome" placeholder="Sobrenome"></input>
    </div>
    <div class="">
      <label for="inputEmail"></label>
      <input type="email" class="form-control" id="inputEmail" placeholder="Email" value="emily.maiara124@gmail.com"></input>
    </div>
    <div class="">
      <label for="inputPassword"></label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Senha"></input>
    </div>
    <div class="btn-group">
   <button type="submit" class="">Confirmar identidade</button>
   <button type="submit" class="">Entrar</button>
  </div>
  </form>
  </main>
  </div>
)
}


export default Cadastro;