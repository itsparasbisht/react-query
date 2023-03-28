import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

function App() {
  const { status, data, error } = useQuery({
    queryKey: ["postsData"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/posts").then(
        (res) => res.data
      ),
  });

  console.log(status);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}

export default App;
