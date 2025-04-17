import { useEffect } from "preact/hooks";

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling when clicking on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if the clicked element is an anchor link that points to an ID on the page
      if (target.tagName === "A") {
        const anchor = target as HTMLAnchorElement;
        const href = anchor.getAttribute("href");

        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault();

          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            // Update URL without page reload
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleAnchorClick);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
