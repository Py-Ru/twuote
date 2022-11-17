import { useEffect, useState } from "react";

import Header from "./components/Header";
import Quotes from "./components/Quotes";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";

function App() {
  const [quotes, setQuotes] = useState([]),
    [totalPages, setTotalPages] = useState([]),
    [loading, setLoading] = useState(true);

  const fetchQuotes = () => {
    fetch("https://api.quotable.io/quotes")
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(data.totalPages);
        setQuotes(data.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Header />
      {loading ? <Loader /> : <Quotes quotes={quotes} />}
      <Pagination
        totalPages={totalPages}
        setQuotes={setQuotes}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
