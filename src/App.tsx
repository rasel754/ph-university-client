import ManiLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./components/layout/ProtectedRoute"


function App() {


  return (
    <ProtectedRoute role={undefined}>
      <ManiLayout></ManiLayout>
    </ProtectedRoute>
  );
}

export default App
