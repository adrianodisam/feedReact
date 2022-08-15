import { useState } from 'react';
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

export default function Home() {
  const [posts, setPosts] = useState([]);

  function handlesubmit({ history, userName }) {
    if (history && userName !== '') {
      setPosts([
        ...posts,
        {
          id: Math.random(),
          content: history,
          userName,
          dataPublica: new Date(),
        },
      ]);
    }
  }
  return (
    <>
      <PostForm handlesubmit={handlesubmit} />
      <main>
        <Feed
          posts={posts}
          title="Seu feed"
          subtitle="Acompanhe o que seus amgos estão pensando em tempo real"
        />
      </main>
    </>
  );
}
