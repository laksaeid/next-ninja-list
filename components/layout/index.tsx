import { ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
interface Props{
    children:ReactNode
}

const Layout = ({ children }:Props) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;