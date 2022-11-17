import { TwitterIcon, TwitterShareButton } from "react-share";

const QuoteCard = ({ quote }) => {
  return (
    <div className="w-[90%] bg-gray-50 sm:w-[300px] rounded-x1 shadow hover:bg-gray-100 flex-col items-center justify-center p-4 text-center">
      <div className="w-full flex items-center justify-center mb-6">
        <img
          src={`https://images.quotable.dev/profile/200/${quote.authorSlug}.jpg`}
          alt={quote.author}
          className="w-[100px] rounded-full"
        />
      </div>

      <div>
        <h3>{quote.author}</h3>
        <p className="opacity-40">{quote.content}</p>
      </div>

      <div className="icons w-full p-4 flex items-center justify-end">
        <TwitterShareButton
          title={`"${quote.content}" - ${quote.author}`}
          url={"https://twitter.com"}
          via={"Arshadayvid"}
          hashtags={["30DaysOfCode", "javascript"]}
        >
          <TwitterIcon
            size={32}
            round={true}
            className="opacity-40 cursor-pointer hover:opacity-100"
          />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default QuoteCard;
