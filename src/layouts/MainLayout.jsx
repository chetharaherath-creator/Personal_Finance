import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-accent transition-colors duration-300">
      <NavigationBar />
      {/* 
        Padding top for desktop nav (md:pt-20) 
        Padding bottom for mobile nav (pb-24)
      */}
      <main className="w-full max-w-5xl mx-auto h-full pt-6 md:pt-24 pb-10 md:pb-10 px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
