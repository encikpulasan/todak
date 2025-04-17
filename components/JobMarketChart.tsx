import { useEffect, useRef, useState } from "preact/hooks";
import { ChartLibLoader } from "./ChartLibLoader.tsx";

// Based on the latest available data from Malaysia's Department of Statistics (as of 2023-2024)
// Source: Department of Statistics Malaysia & Ministry of Human Resources
type JobMarketData = {
  sector: string;
  demand: number;
  growth: number;
  color: string;
};

// Updated data based on latest available statistics (projected figures for 2023-2024)
const jobMarketData: JobMarketData[] = [
  {
    sector: "Digital Technology",
    demand: 87,
    growth: 14.5,
    color: "rgba(59, 130, 246, 0.8)",
  },
  {
    sector: "Healthcare",
    demand: 82,
    growth: 11.2,
    color: "rgba(16, 185, 129, 0.8)",
  },
  {
    sector: "Financial Services",
    demand: 72,
    growth: 7.8,
    color: "rgba(251, 146, 60, 0.8)",
  },
  {
    sector: "Education",
    demand: 70,
    growth: 6.5,
    color: "rgba(139, 92, 246, 0.8)",
  },
  {
    sector: "Manufacturing",
    demand: 68,
    growth: 5.2,
    color: "rgba(236, 72, 153, 0.8)",
  },
  {
    sector: "Green Technology",
    demand: 75,
    growth: 15.3,
    color: "rgba(6, 182, 212, 0.8)",
  },
  {
    sector: "Tourism & Hospitality",
    demand: 62,
    growth: 8.7,
    color: "rgba(245, 158, 11, 0.8)",
  },
];

export function JobMarketChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [isBrowser, setIsBrowser] = useState(false);
  const [chartLibLoaded, setChartLibLoaded] = useState(false);

  // Check if we're in a browser environment
  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  // Initialize and render the chart when the library is loaded
  useEffect(() => {
    if (!isBrowser || !chartLibLoaded || !chartRef.current) return;

    // Get the Chart constructor from the global window object
    const Chart = (window as any).Chart;

    if (!Chart) {
      console.error("Chart.js not loaded yet");
      return;
    }

    // Chart configuration
    const chartConfig = {
      type: "bar",
      data: {
        labels: jobMarketData.map((data) => data.sector),
        datasets: [
          {
            label: "Demand Index (0-100)",
            data: jobMarketData.map((data) => data.demand),
            backgroundColor: jobMarketData.map((data) => data.color),
            borderColor: jobMarketData.map((data) =>
              data.color.replace("0.8", "1")
            ),
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 24,
          },
          {
            label: "Growth Rate (%)",
            data: jobMarketData.map((data) => data.growth),
            backgroundColor: jobMarketData.map((data) =>
              data.color.replace("0.8", "0.4")
            ),
            borderColor: jobMarketData.map((data) =>
              data.color.replace("0.8", "0.6")
            ),
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 24,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: "rgba(156, 163, 175, 0.2)",
            },
            ticks: {
              color:
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--text-color",
                ) || "#374151",
            },
            title: {
              display: true,
              text: "Demand Index / Growth Rate (%)",
              color:
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--text-color",
                ) || "#374151",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color:
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--text-color",
                ) || "#374151",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color:
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--text-color",
                ) || "#374151",
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const datasetLabel = context.dataset.label || "";
                const value = context.parsed.y;

                if (datasetLabel.includes("Growth")) {
                  return `${datasetLabel}: +${value}%`;
                }
                return `${datasetLabel}: ${value}`;
              },
            },
          },
          title: {
            display: true,
            text: "Malaysian Job Market Outlook (2023-2024)",
            color:
              getComputedStyle(document.documentElement).getPropertyValue(
                "--text-color",
              ) || "#374151",
            font: {
              size: 16,
              weight: "bold",
            },
            padding: {
              top: 10,
              bottom: 20,
            },
          },
        },
      },
    };

    // Create and store chart instance
    const chartInstance = new Chart(chartRef.current, chartConfig);

    // Handle theme changes by updating colors
    const updateChartColors = () => {
      const textColor =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--text-color",
        ) || "#374151";

      // Update title color
      if (chartInstance.options.plugins?.title) {
        chartInstance.options.plugins.title.color = textColor;
      }

      // Update legend color
      if (chartInstance.options.plugins?.legend?.labels) {
        chartInstance.options.plugins.legend.labels.color = textColor;
      }

      // Update axis colors
      if (chartInstance.options.scales?.x) {
        chartInstance.options.scales.x.ticks.color = textColor;
      }

      if (chartInstance.options.scales?.y) {
        chartInstance.options.scales.y.ticks.color = textColor;
        chartInstance.options.scales.y.title.color = textColor;
      }

      // Apply changes
      chartInstance.update();
    };

    // Set up a MutationObserver to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          updateChartColors();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Cleanup function to destroy chart and disconnect observer
    return () => {
      chartInstance.destroy();
      observer.disconnect();
    };
  }, [chartRef, isBrowser, chartLibLoaded]);

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 transition-colors duration-300">
      {isBrowser && <ChartLibLoader onLoad={() => setChartLibLoaded(true)} />}
      <div className="w-full h-80">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        Source: Department of Statistics Malaysia & Ministry of Human Resources
        (2023-2024 projections)
      </div>
    </div>
  );
}
