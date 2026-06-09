import velocityOverview from "@/assets/velocity_overview.png";
import pizzaSales from "@/assets/pizza_sales_analysis.png";
import subscriptionSaaS from "@/assets/subscription_based_saas.png";
import pvtAnalysis from "@/assets/pvt_analysis_tool.png";  
import excelImg from "@/assets/excel.png";
import dataCleaning from "@/assets/data_cleaning.png";
import databelChurn from "@/assets/databel_analysis.png";
import { title } from "process";

export const projects = [
  
  // Featured Projects
  {
    title: "Pizza Sales Analysis",
    desc:
      "An end-to-end data analytics project that transforms raw transactional sales records into actionable business intelligence. By processing daily order data, this project uncovers critical revenue trends and evaluates menu performance to drive strategic, data-backed decision-making.",
    tags: ["Python", "Excel", "Jupyter", "Matplotlib", "PowerBI", "DAX", "SQL"],
    image: pizzaSales,
    repo: "https://github.com/LudwigWei/pizza-sales-analysis",
    featured: true,
  },

  {
    title: "Terrain Tax Analysis",
    desc:
      'An end-to-end data analytics and engineering pipeline designed to quantify the physical toll ("terrain tax") of various cycling and hiking routes. By processing raw GPX telemetry and route metadata, this project transforms complex geospatial and physiological data into performance insights, visualizing metrics like velocity trends and climbing struggles.',
    tags: ["Python", "Playwright", "Jupyter", "SQL", "PowerBI"],
    image: velocityOverview,
    repo: "https://github.com/LudwigWei/terrain-tax-analysis",
    featured: true,
  },

  {
    title: "Databel Churn Intelligence",
    desc: "An end-to-end Business Intelligence solution designed to analyze and mitigate telecommunications customer churn. This project engineered a flat foundational dataset into an optimized Star Schema, powering dynamic Power BI dashboards that expose critical retention risks—including competitor vulnerability, product bill shock, and the exact customer service tipping point.",
    tags: ["Power BI", "DAX", "Data Modeling", "Churn Analysis", "Business Intelligence"],
    image: databelChurn,
    repo: "https://github.com/LudwigWei/databel-churn-analysis",
    featured: true,
  },

  {
    title: "Subscription-Based SaaS Analytics",
    desc:
      "An end-to-end data pipeline that transforms unstructured SaaS telemetry into actionable business intelligence. By analyzing over 6,000 usage and subscription logs, this project diagnoses true churn rates, identifies immediate flight risks, and pinpoints the specific product features driving recurring revenue.",
    tags: ["Python", "SQL", "DAX", "PowerBI", "Churn Analysis"],
    image: subscriptionSaaS,
    repo: "https://github.com/LudwigWei/subscription-based-saas-project",
    featured: false,
  },

  {
    title: "PVT Analysis Tool",
    desc: "An interactive dashboard that uses Python and Pandas to transform raw reservoir data into actionable technical insights. It features automated fluid classification and dynamic Plotly visualizations to accelerate data analysis.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly", "Data Visualization"],
    image: pvtAnalysis,
    repo: "https://github.com/LudwigWei/pvt-analysis-tool",
    tool: "https://pvt-analysis-tool-84zrq84qd6ufzzh5p2udqy.streamlit.app/",
    featured: false,
  },

  {
    title: "Excel Analytics Portfolio",
    desc: "A comprehensive collection of data analysis projects created during my early journey learning Excel. It demonstrates foundational skills in ETL, data modeling, and interactive dashboard creation across various industries, reflecting my drive to transform messy, raw datasets into clean, actionable business insights.",
    tags: ["Excel", "Power Query", "Power Pivot", "Data Cleaning", "Data Modeling", "Dashboarding"],
    image: excelImg,
    repo: "https://github.com/LudwigWei/excel-analytics-portfolio",
    featured: false,
  },

  {
  title: "Thesis Data Cleaning",
  desc: "The foundational data preparation stage for our thesis on Optimization and Domain-Adaptive Pre-Training of DistilmBERT for Sentiment Analysis in Tagalog-English Code-Switched Text. This project transforms raw e-commerce reviews and synthetic text into a high-quality hybrid corpus, utilizing LaBSE embeddings and cosine similarity for rigorous two-stage semantic deduplication.",
  tags: ["Python", "LaBSE", "NLP", "Data Cleaning", "Semantic Deduplication"],
  image: dataCleaning,
  repo: "https://github.com/LudwigWei/thesis-data-cleaning",
  featured: false,
  },  
];


