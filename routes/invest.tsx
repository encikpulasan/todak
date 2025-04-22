import { Head } from "$fresh/runtime.ts";
import InvestorPresentation from "../islands/InvestorPresentation.tsx";

export default function Invest() {
  return (
    <>
      <Head>
        <title>Invest in EduPath Malaysia | Investor Presentation</title>
        <meta
          name="description"
          content="Investment opportunity in EduPath Malaysia - an innovative educational guidance platform connecting Malaysian students to career pathways."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950">
        <InvestorPresentation />
      </div>
    </>
  );
}
