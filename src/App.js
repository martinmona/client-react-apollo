import logo from './logo.svg';
import './App.css';
import UseGetUsers from './graphql/hooks/useGetArticles.ts';
import Article from './components/Article/index.js'

function App() {
  const { loading, error, data } = UseGetUsers()
  
  if(error) return <h1>Error: {error.message}</h1>
  if(loading) return <h1>Loading</h1>

  return (
    <main className="App">
      <h1>Articles</h1>
      {data.articles.map(article => (
        <Article key={article._id} article={article} />
      ))}
    </main>
  );
}

export default App;
