import usuarioIcone from '../images/user.svg';
import empty from '../images/empty-folder.svg';
import time from '../images/clock.svg';
import '../styles/Feed.css';

export default function Feed(props) {
  if (props.posts.length === 0) {
    return (
      <div className="feed-status">
        <img src={empty} alt="empty-folder" />
        <h1>Não encontramos nada</h1>
        <h2>Parece que ainda não foi postado nada </h2>
      </div>
    );
  }
  return (
    <>
      <header>
        <h1>{props.title} </h1>
        <h2>{props.subtitle}</h2>
      </header>
      <section className="feed">
        {props.posts.map((post) => (
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
                  Publicado :{post.dataPublica.toLocaleDateString('pt-br')}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
