import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppLayout } from './components/AppLayout';
import { LoadingSpinner } from './components/LoadingSpinner';

// Auth Pages (No layout)
const SplashScreen = lazy(() => import('./pages/SplashScreen').catch(() => ({ default: () => <div /> })));
const Login = lazy(() => import('./pages/Login').catch(() => ({ default: () => <div /> })));
const Register = lazy(() => import('./pages/Register').catch(() => ({ default: () => <div /> })));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword').catch(() => ({ default: () => <div /> })));

// Main Pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile').catch(() => ({ default: () => <div /> })));
const Settings = lazy(() => import('./pages/Settings').catch(() => ({ default: () => <div /> })));
const PlanJourney = lazy(() => import('./pages/PlanJourney').catch(() => ({ default: () => <div /> })));
const RouteResults = lazy(() => import('./pages/RouteResults').catch(() => ({ default: () => <div /> })));
const RouteDetails = lazy(() => import('./pages/RouteDetails').catch(() => ({ default: () => <div /> })));
const LiveJourney = lazy(() => import('./pages/LiveJourney').catch(() => ({ default: () => <div /> })));
const CrowdDetails = lazy(() => import('./pages/CrowdDetails').catch(() => ({ default: () => <div /> })));
const LastMileOptions = lazy(() => import('./pages/LastMileOptions').catch(() => ({ default: () => <div /> })));
const AIAssistant = lazy(() => import('./pages/AIAssistant').catch(() => ({ default: () => <div /> })));
const LiveBusTracking = lazy(() => import('./pages/LiveBusTracking').catch(() => ({ default: () => <div /> })));

// Financial Pages
const SaarthiCard = lazy(() => import('./pages/SaarthiCard').catch(() => ({ default: () => <div /> })));
const Wallet = lazy(() => import('./pages/Wallet').catch(() => ({ default: () => <div /> })));
const Transactions = lazy(() => import('./pages/Transactions').catch(() => ({ default: () => <div /> })));

// Impact & Community
const GreenScore = lazy(() => import('./pages/GreenScore').catch(() => ({ default: () => <div /> })));
const SafetyMode = lazy(() => import('./pages/SafetyMode').catch(() => ({ default: () => <div /> })));
const AccessibilityMode = lazy(() => import('./pages/AccessibilityMode').catch(() => ({ default: () => <div /> })));
const CommunityReports = lazy(() => import('./pages/CommunityReports').catch(() => ({ default: () => <div /> })));
const Notifications = lazy(() => import('./pages/Notifications').catch(() => ({ default: () => <div /> })));

// Dashboards
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').catch(() => ({ default: () => <div /> })));
const OperatorDashboard = lazy(() => import('./pages/OperatorDashboard').catch(() => ({ default: () => <div /> })));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Protected Routes Wrapper */}
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/plan" element={<PlanJourney />} />
          <Route path="/routes" element={<RouteResults />} />
          <Route path="/route/:id" element={<RouteDetails />} />
          <Route path="/journey" element={<LiveJourney />} />
          <Route path="/crowd/:id" element={<CrowdDetails />} />
          <Route path="/last-mile" element={<LastMileOptions />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/live-buses" element={<LiveBusTracking />} />
          <Route path="/card" element={<SaarthiCard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/green-score" element={<GreenScore />} />
          <Route path="/safety" element={<SafetyMode />} />
          <Route path="/accessibility" element={<AccessibilityMode />} />
          <Route path="/reports" element={<CommunityReports />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        <Route element={<ProtectedRoute requiredRole="admin"><AppLayout /></ProtectedRoute>}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoute requiredRole="operator"><AppLayout /></ProtectedRoute>}>
          <Route path="/operator" element={<OperatorDashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
