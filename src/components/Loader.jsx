import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <FallingLines
        color="#1da1f2"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

export default Loader;
