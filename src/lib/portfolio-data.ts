import velocityOverview from "@/assets/velocity_overview.png";
import pizzaSales from "@/assets/pizza_sales_analysis.png";
import subscriptionSaaS from "@/assets/subscription_based_saas.png";
import pvtAnalysis from "@/assets/pvt_analysis_tool.png";  
export const projects = [
  
  // Project 1
  {
    title: "Pizza Sales Analysis",
    desc:
      "An end-to-end data analytics project that transforms raw transactional sales records into actionable business intelligence. By processing daily order data, this project uncovers critical revenue trends and evaluates menu performance to drive strategic, data-backed decision-making.",
    tags: ["Python", "Excel", "Jupyter", "Matplotlib", "PowerBI", "DAX", "SQL"],
    image: pizzaSales,
    repo: "https://github.com/LudwigWei/pizza-sales-analysis",
    featured: true,
  },

  // Project 2
  {
    title: "Terrain Tax Analysis",
    desc:
      'An end-to-end data analytics and engineering pipeline designed to quantify the physical toll ("terrain tax") of various cycling and hiking routes. By processing raw GPX telemetry and route metadata, this project transforms complex geospatial and physiological data into performance insights, visualizing metrics like velocity trends and climbing struggles.',
    tags: ["Python", "Playwright", "Jupyter", "SQL", "PowerBI"],
    image: velocityOverview,
    repo: "https://github.com/LudwigWei/terrain-tax-analysis",
    featured: true,
  },

  // Project 3
  {
    title: "Subscription-Based SaaS Analytics",
    desc:
      "An end-to-end data pipeline that transforms unstructured SaaS telemetry into actionable business intelligence. By analyzing over 6,000 usage and subscription logs, this project diagnoses true churn rates, identifies immediate flight risks, and pinpoints the specific product features driving recurring revenue.",
    tags: ["Python", "SQL", "DAX", "PowerBI", "Churn Analysis"],
    image: subscriptionSaaS,
    repo: "https://github.com/LudwigWei/subscription-based-saas-project",
    featured: true,
  },

  // Project 4
  {
    title: "PVT Analysis Tool",
    desc: "An interactive dashboard that uses Python and Pandas to transform raw reservoir data into actionable technical insights. It features automated fluid classification and dynamic Plotly visualizations to accelerate data analysis.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly", "Data Visualization"],
    image: pvtAnalysis,
    repo: "https://github.com/LudwigWei/pvt-analysis-tool",
    tool: "https://pvt-analysis-tool-84zrq84qd6ufzzh5p2udqy.streamlit.app/",
    featured: false,
  },
];