import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ARIA_LABELS } from '@/utils/constants';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="app-wrapper">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        {ARIA_LABELS.SKIP_LINK}
      </a>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="main-content" role="main" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
