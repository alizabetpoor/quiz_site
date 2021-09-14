import Header from "../Components/Header/Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="main w-full flex justify-center">{props.children}</div>
    </>
  );
};

export default Layout;
