import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full shadow-lg transition"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;