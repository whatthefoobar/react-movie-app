import "./Pagination.css";
interface IProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: IProps) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
