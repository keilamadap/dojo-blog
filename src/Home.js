import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //   const handleDeleteBlog = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          //   console.log(res);
          if (!res.ok) {
            throw Error("Não foi possível acessar os dados.");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setError(null);
          setIsPending(false);
        })
        .catch((e) => {
          console.log(e.message);
          setError(e.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <>{error}</>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
