import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader2Icon } from "lucide-react";

const RepositoryListing = lazy(() => import("./pages/Dashboard"));
const SignInPage = lazy(() => import("./pages/SignIn"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center gap-2">
            <Loader2Icon className="animate-spin w-4 h-4" />
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/dashboard" element={<RepositoryListing />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
