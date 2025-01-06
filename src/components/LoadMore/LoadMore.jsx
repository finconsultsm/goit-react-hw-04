import sc from "./LoadMore.module.css";

const LoadMore = ({ onClick }) => (
  <button onClick={onClick} className={sc.button}>
    Load More
  </button>
);

export default LoadMore;
