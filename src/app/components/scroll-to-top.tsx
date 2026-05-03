import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (for section navigation)
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Scroll to top for regular page navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return null;
}
