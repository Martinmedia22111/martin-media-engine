import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// If the root has prerendered content (from prerender plugin), hydrate it
// Otherwise, render normally
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}

// Signal to prerender plugin that the page is ready to snapshot
// Dispatch after React has mounted and React Query/Helmet settled
if (typeof window !== "undefined") {
  setTimeout(() => {
    document.dispatchEvent(new Event("render-event"));
  }, 1500);
}
