import { useState } from 'react';
import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import usuarioIcone from './images/user.svg';
import paperIcon from './images/paper-plane.svg';
import time from './images/clock.svg';
import empty from './images/empty-folder.svg';

export default function App() {
  const [history, setHistory] = useState('');
  const [userName, setUserName] = useState('');
  const [posts, setPosts] = useState([]);

  function handlesubmit(event) {
    event.preventDefault();

    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        dataPublica: new Date(),
      },
    ]);

    setHistory('');
    setUserName('');
  }
  return (
    <div className="wrapper">
      <form className="post-form" onSubmit={handlesubmit}>
        <input
          value={history}
          type="text"
          placeholder="Escreva uma nova histtoria..."
          onChange={(event) => {
            setHistory(event.target.value);
          }}
        />
        <div>
          <img src={usuarioIcone} alt="Usuário" />
          <input
            value={userName}
            type="text"
            placeholder="Digite seu nome..."
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <button type="Submit">
            <img src={paperIcon} alt="paper plane" />
            Publicar
          </button>
        </div>
      </form>
      <main>
        {posts.length == 0 && (
          <div className="feed-status">
            <img src={empty} alt="empty-folder" />
            <h1>Não encontramos nada</h1>
            <h2>Parece que ainda não foi postado nada </h2>
          </div>
        )}

        {posts.length > 0 && (
          <>
            <header>
              <h1>Seu feed </h1>
              <h2>Acompanhe o que seus amgos estão pensando em tempo real</h2>
            </header>
            <section className="feed">
              {posts.map((post) => (
                <article key={post.id}>
                  <p>{post.content}</p>
                  <footer>
                    <div className="user-details">
                      <img src={usuarioIcone} alt="Usuário" />
                      <strong>{post.userName}</strong>
                    </div>
                    <div className="time">
                      <img src={time} alt="" />
                      <span>
                        Publicado :
                        {post.dataPublica.toLocaleDateString('pt-br')}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
