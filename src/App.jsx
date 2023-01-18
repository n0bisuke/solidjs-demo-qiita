import logo from './logo.svg';
import styles from './App.module.css';
import Form from './Form';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <img src={logo} class={styles.logo} alt="logo" /> */}
        <p>
          QiitaのIDを入れてください。API経由でプロフを取得します。
        </p>

        <Form />

        <a
          class={styles.link}
          href="https://twitter.com/n0bisuke"
          target="_blank"
          rel="noopener noreferrer"
        >
          by @n0bisuke
        </a>

        {/* <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a> */}

      </header>
    </div>
  );
}

export default App;
