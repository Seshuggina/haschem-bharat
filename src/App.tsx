import AppRoutes from "./routes";
import HeaderNavbar from "./components/common/layout/Header";
import Footer from "./components/common/layout/Footer";

function App() {
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">
          Tailwind is Working! 🎉
        </h1>
      </div> */}
      <HeaderNavbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
