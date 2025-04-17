import { ThemeProvider } from "../components/ThemeProvider.tsx";
import { Header } from "../components/Header.tsx";
import { Hero } from "../components/Hero.tsx";
import { Challenges } from "../components/Challenges.tsx";
import { Solution } from "../components/Solution.tsx";
import { Features } from "../components/Features.tsx";
import { Roadmap } from "../components/Roadmap.tsx";
import { Footer } from "../components/Footer.tsx";
import { SmoothScroll } from "../components/SmoothScroll.tsx";

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Challenges />
          <Solution />
          <Features />
          <Roadmap />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
