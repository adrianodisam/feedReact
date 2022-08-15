import '../styles/PostForm.css';
import usuarioIcone from '../images/user.svg';
import paperIcon from '../images/paper-plane.svg';
import { useState } from 'react';

export default function PostForm(props) {
  const [history, setHistory] = useState('');
  const [userName, setUserName] = useState('');

  function handlesubmit(event) {
    event.preventDefault();
    props.handlesubmit({ history, userName });

    setHistory('');
    setUserName('');
  }
  return (
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
  );
}
