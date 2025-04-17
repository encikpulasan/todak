# EduPath Malaysia

A web application for the EduPath Malaysia case study, providing students and
parents with comprehensive information about educational pathways and job market
opportunities in Malaysia.

## Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Changelog

### v1.0.0 (Initial Release)

- Created base Fresh project structure
- Implemented basic routing and layout
- Added initial static content for EduPath Malaysia case study

### v1.1.0 (Job Market Visualization)

- Added `ChartLibLoader` component for loading Chart.js from CDN
- Implemented `JobMarketChart` component using Chart.js
- Added job market data visualization with demand index and growth rate
- Implemented responsive design for charts
- Added dark mode support for visualizations

### v1.2.0 (Education Pathway Visualization)

- Designed and implemented `EducationPathwayChart` component
- Created modern visual representation of Malaysian education system
- Added detailed information for each education stage
- Implemented multi-pathway representation (TVET, Pre-University, Direct Entry)
- Integrated the chart into the Challenges section

### v1.3.0 (UX Improvements)

- Enhanced mobile responsiveness
- Improved accessibility with better color contrast
- Added proper source citations for data
- Ensured compatibility with server-side rendering
- Updated information to reflect current Malaysian education system (2023)

### v1.4.0 (Statistics and Platform Updates)

- Updated higher education statistics with official Ministry of Higher Education
  data
- Added accurate counts for public universities (20), private higher education
  institutions (103), and polytechnics (36)
- Corrected TVET institution count (1,000+) and added TVET student enrollment
  figure (230,000)
- Replaced ASCII platform diagram with interactive Chart.js visualization
- Improved educational statistics display with 3-column grid layout
- Added community college count (105) to educational statistics

### v1.4.1 (Platform Visualization Enhancement)

- Replaced bubble chart with a structured hierarchical visualization for the
  platform diagram
- Implemented color-coded sections for each platform module (Educational
  Planning, Career & Market, etc.)
- Added connecting visual elements to better illustrate relationships between
  components
- Enhanced readability with improved typography and spacing
- Ensured responsive design with appropriate sizing for all screen dimensions

### v1.4.2 (UI Fixes)

- Fixed connecting lines in the platform diagram for better visual hierarchy
- Added a proper title for the platform visualization
- Adjusted spacing and alignment for better readability
- Remove Job Market Insights

### v1.4.3 (Color Rendering Fix)

- Fixed amber/yellow color rendering issues in Features and Platform components
- Added safelist configuration in Tailwind to preserve color utility classes
- Implemented special case handling for amber colors in dynamic class generation
- Ensured consistent color display across light and dark modes
- Improved TVET Showcase component appearance with proper color styling

## Features

- Interactive visualization of Malaysian job market data
- Comprehensive education pathway flowchart
- Detailed information about educational challenges
- Mobile-responsive design with dark mode support
- Server-side rendered content for improved performance
