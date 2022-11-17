import QuoteCard from "./QuoteCard";

const Quotes = ({ quotes }) => {
  return (
    <main className="w-full flex item-center p-4 flex-wrap gap-6 justify-center max-w-[1500px] min-h-screen">
      {quotes.map((quote) => (
        <QuoteCard quote={quote} key={quote._id} />
      ))}
    </main>
  );
};

export default Quotes;
