import Footer from "../../../components/Shared/Footer";
const layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
