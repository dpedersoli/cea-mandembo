import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ScrollToTop'; // ✅ Import
import './MainLayout.css';

export default function MainLayout() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Adicione aqui - fora do div */}
      <div className="main-layout">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
