import Feed from '../components/Feed';
export default function MaisVistos() {
  const posts = [
    {
      id: Math.random(),
      content: 'primeira',
      userName: 'Adriano',
      dataPublica: new Date(),
    },
  ];
  return (
    <main className="most-viewed">
      <Feed
        posts={posts}
        title="Mais Vistos"
        subtitle="Acompanhe os assuntos mais vistos pela galera"
      />
    </main>
  );
}
