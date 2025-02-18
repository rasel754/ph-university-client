import ManiLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./components/layout/ProtectedRoute"


function App() {


  return (
    <ProtectedRoute>
      <ManiLayout></ManiLayout>
    </ProtectedRoute>
  );
}

export default App
