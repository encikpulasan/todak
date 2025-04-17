import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EduPath Malaysia - Connecting Education to Careers</title>
        <meta
          name="description"
          content="EduPath Malaysia is a comprehensive platform designed to provide personalized educational guidance, career pathway visualization, and centralized information for Malaysian students."
        />
        <link rel="stylesheet" href="/styles.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // On page load or when changing theme, set the theme based on user preference
            function updateTheme() {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            }
            
            // Call the function on initial load
            updateTheme();
            
            // Add event listener for theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
          `,
          }}
        />
      </head>
      <body className="antialiased">
        <Component />
      </body>
    </html>
  );
}
