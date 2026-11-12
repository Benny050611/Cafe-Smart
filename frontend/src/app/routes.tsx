import { Route, Routes } from 'react-router';
import { LandingPage } from '../features/landing/pages/LandingPage';
import { OfficeDashboardPage } from '../features/office-3d/pages/OfficeDashboardPage';
import { TraditionalLayout } from '../features/traditional/TraditionalLayout';
import { BranchOverviewPage } from '../features/traditional/pages/BranchOverviewPage';
import { HumanResourcesPage } from '../features/traditional/pages/HumanResourcesPage';
import { AccountingPage } from '../features/traditional/pages/AccountingPage';
import { BusinessPage } from '../features/traditional/pages/BusinessPage';

// Stable route contract for all three frontend contributors.
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<OfficeDashboardPage />} />
      <Route path="/branches/:branchId" element={<TraditionalLayout />}>
        <Route index element={<BranchOverviewPage />} />
        <Route path="hr" element={<HumanResourcesPage />} />
        <Route path="accounting" element={<AccountingPage />} />
        <Route path="business" element={<BusinessPage />} />
      </Route>
      <Route
        path="*"
        element={
          <main className="mx-auto max-w-2xl p-8">
            <h1 className="text-2xl font-semibold">Không tìm thấy trang</h1>
            <a className="mt-4 inline-block underline" href="/">Về trang chủ</a>
          </main>
        }
      />
    </Routes>
  );
}
