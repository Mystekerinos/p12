import "./PageWrapper.css";

const PageWrapper = ({ children }) => {
  return (
    <div className="pageContent">
      <div className="pageInnerContent">{children}</div>
    </div>
  );
};
export default PageWrapper;
