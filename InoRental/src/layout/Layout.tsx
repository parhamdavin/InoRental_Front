import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-[1640px]">
      <Navbar />
      <div className="mt-28 md:mt-52">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
