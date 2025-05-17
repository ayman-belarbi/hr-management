import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout Components
import SidebarEmployee from './components/layout/sidebars/SidebarEmployee';
import SidebarAdmin from './components/layout/sidebars/SidebarAdmin';
import SidebarRH from './components/layout/sidebars/SidebarRH';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Auth Pages
import Welcome from './components/auth/Welcome';
import Login from './components/auth/Login';

// Employee Pages
import DashboardEmployee from './pages/employee/Dashboard';
import LeaveRequestEmployee from './pages/employee/LeaveRequest';
import AbsenceFollowEmployee from './pages/employee/AbsenceFollow';
import ComplaintEmployee from './pages/employee/Complaint';
import CareerPathEmployee from './pages/employee/CareerPath';

// Admin Pages
import DashboardAdmin from './pages/admin/Dashboard';
import ManageRh from './pages/admin/ManageRh';
import ManageEmployeesAdmin from './pages/admin/ManageEmployees';
import LeaveRequestsAdmin from './pages/admin/LeaveRequests';
import AbsenceJustificationsAdmin from './pages/admin/AbsenceJustifications';
import ComplaintReviewsAdmin from './pages/admin/ComplaintReviews';
import CareerManagementAdmin from './pages/admin/CareerManagement';

// RH Pages
import DashboardRH from './pages/rh/Dashboard';
import ManageEmployeesRH from './pages/rh/ManageEmployees';
import LeaveRequestsRH from './pages/rh/LeaveRequests';
import AbsenceJustificationsRH from './pages/rh/AbsenceJustifications';
import ComplaintReviewsRH from './pages/rh/ComplaintReviews';
import CareerManagementRH from './pages/rh/CareerManagement';

const AppContent = () => {
  const [activeRole, setActiveRole] = useState('employee');
  const location = useLocation();

  const renderSidebar = () => {
    switch (activeRole) {
      case 'admin':
        return <SidebarAdmin />;
      case 'rh':
        return <SidebarRH />;
      default:
        return <SidebarEmployee />;
    }
  };

  // Determine whether to show layout
  const hideLayoutPaths = ['/welcome', '/login'];
  const showLayout = !hideLayoutPaths.includes(location.pathname);

  // Auto-detect role from URL path
  React.useEffect(() => {
    if (location.pathname.startsWith('/admin')) {
      setActiveRole('admin');
    } else if (location.pathname.startsWith('/RH')) {
      setActiveRole('rh');
    } else if (!hideLayoutPaths.includes(location.pathname)) {
      setActiveRole('employee');
    }
  }, [location.pathname]);

  if (!showLayout) {
    // No layout for auth pages
    return (
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-1">
        {/* Role Switcher - only for development */}
        <div className="absolute top-4 left-16 z-50 flex gap-2 p-2 bg-white/90 rounded-lg shadow-md">
          <button
            onClick={() => setActiveRole('employee')}
            className={`px-3 py-1 rounded ${activeRole === 'employee' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Employee View
          </button>
          <button
            onClick={() => setActiveRole('admin')}
            className={`px-3 py-1 rounded ${activeRole === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Admin View
          </button>
          <button
            onClick={() => setActiveRole('rh')}
            className={`px-3 py-1 rounded ${activeRole === 'rh' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            RH View
          </button>
        </div>

        {/* Sidebar */}
        {renderSidebar()}

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 w-full">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-6xl">
              <Routes>
                {/* Employee Routes */}
                <Route path="/" element={<DashboardEmployee />} />
                <Route path="/leave-request" element={<LeaveRequestEmployee />} />
                <Route path="/absence-follow" element={<AbsenceFollowEmployee />} />
                <Route path="/complaint" element={<ComplaintEmployee />} />
                <Route path="/career-path" element={<CareerPathEmployee />} />

                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                <Route path="/admin/manage-rh" element={<ManageRh />} />
                <Route path="/admin/manage-employees" element={<ManageEmployeesAdmin />} />
                <Route path="/admin/leave-requests" element={<LeaveRequestsAdmin />} />
                <Route path="/admin/absence-justifications" element={<AbsenceJustificationsAdmin />} />
                <Route path="/admin/complaint-reviews" element={<ComplaintReviewsAdmin />} />
                <Route path="/admin/career-management" element={<CareerManagementAdmin />} />

                {/* RH Routes */}
                <Route path="/RH/dashboard" element={<DashboardRH />} />
                <Route path="/RH/manage-employees" element={<ManageEmployeesRH />} />
                <Route path="/RH/leave-requests" element={<LeaveRequestsRH />} />
                <Route path="/RH/absence-justifications" element={<AbsenceJustificationsRH />} />
                <Route path="/RH/complaint-reviews" element={<ComplaintReviewsRH />} />
                <Route path="/RH/career-management" element={<CareerManagementRH />} />

                {/* Fallback */}
                <Route path="*" element={
                  activeRole === 'admin' 
                    ? <Navigate to="/admin/dashboard" replace /> 
                    : activeRole === 'rh'
                      ? <Navigate to="/RH/dashboard" replace />
                      : <Navigate to="/" replace />
                } />
              </Routes>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;