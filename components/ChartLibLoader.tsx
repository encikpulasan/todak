import { useEffect } from "preact/hooks";

export function ChartLibLoader({ onLoad }: { onLoad: () => void }) {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    const chartScript = document.createElement("script");
    chartScript.src =
      "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";
    chartScript.async = true;

    chartScript.onload = () => {
      // Load additional adapter for date handling
      const adapterScript = document.createElement("script");
      adapterScript.src =
        "https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3.0.0/dist/chartjs-adapter-date-fns.bundle.min.js";
      adapterScript.async = true;
      adapterScript.onload = () => {
        onLoad();
      };
      document.head.appendChild(adapterScript);
    };

    document.head.appendChild(chartScript);

    return () => {
      // Cleanup if component unmounts before scripts load
      if (document.head.contains(chartScript)) {
        document.head.removeChild(chartScript);
      }
    };
  }, [onLoad]);

  return null;
}
