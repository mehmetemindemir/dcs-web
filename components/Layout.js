import Header from "./Header";
import Footer from "./Footer";


const contentStyle = {
};

const Layout = props => (
  <div className="Layout" >
    <Header />
      <div className="container py-3 px-2 mx-auto ">
        <div className="  bg-gray-100  shadow-lg p-2 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] min-h-screen ">
        {props.children}
        </div>
      </div>
    <Footer />
  </div>
);

export default Layout;