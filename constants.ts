import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Bhavya Agarwal",
  title: "AI/ML Engineer & Computer Science Student",
  contact: {
    email: "bhavyaagarwa@umass.edu",
    phone: "+1 (413)-315-0000",
    linkedin: "https://www.linkedin.com/in/bhavyagarwal/",
    github: "https://github.com/bhavya632",
    resume: 'https://drive.google.com/file/d/1BMHaN4ilC2b8QqyGMd5k5SkM-cqBHUQa/view?usp=sharing',
    location: "Amherst, MA"
  },
  education: {
    school: "University of Massachusetts, Amherst",
    degree: "B.S. in Computer Science and Statistics",
    gpa: "3.4",
    graduation: "May 2027",
    coursework: [
      "Data Structures",
      "Object-Oriented Programming",
      "Calculus I, II, and III",
      "Linear Algebra",
      "Intro to C",
      "Intro to Computation",
      "ML Foundations",
      "Programming Methodology",
      "Artificial Intelligence",
      "Computer Systems",
      "Statistics",
      "Azure: AI Fundamentals",
      "Statistics in Data Science"
    ]
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "JavaScript (React.js)", "HTML", "CSS", "SQL", "Typescript"]
    },
    {
      category: "Data Science & ML Libraries",
      items: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "PyTorch", "TensorFlow", "R"]
    },
    {
      category: "Cloud and DevOps",
      items: ["AWS (Lambda, S3, Bedrock, Kendra, OpenSearch, Cognito, API Gateway, IAM, CloudWatch)", "Azure (AI Search, Logic Apps)", "Serverless Architecture", "CloudFormation", "CI/CD Concepts", "Cost Optimization"]
    },
    {
      category: "Tools and Frameworks",
      items: ["Git", "Docker", "ServiceNow", "Google Colab", "Streamlit", "Microservices Architecture"]
    }
  ],
  experience: [
    {
      role: "AI/ML Engineering Intern",
      company: "Center for Data Science, University of Massachusetts Amherst",
      location: "Amherst, MA",
      period: "March 2025 – Aug 2025",
      points: [
         "Designed and deployed a scalable, serverless AWS architecture (Lambda, S3, Bedrock, API Gateway) to support 10K+ monthly HR queries that reduced HR query response time by 98.33% , enabling 20+ HR professionals to access scattered policy information efficiently.",
         "Architected a centralized knowledge retrieval system using Amazon OpenSearch and Kendra, implementing secure IAM role-based access and encrypted S3 storage for large‐scale (20K+ files) indexed content storage, applying prompt engineering to optimize generative AI query accuracy.",
         "Processed multi-source ingestion pipelines from SharePoint exports, public websites, and internal files using Python scripts, consolidating 6+ data sources into a structured cloud-based knowledge base with defined data architecture."
      ]
    },
    {
      role: "ML/AI Fellow",
      company: "Massachusetts Institute of Technology (MIT) - Break Through Tech AI",
      location: "Boston, MA",
      period: "May 2024 – April 2025",
      points: [
        "Presented ML model findings and cloud deployment strategies to diverse audiences including MIT professors and Michelin Mobility industry mentors, developing skills in communicating complex technical solutions to both technical and business stakeholders.",
        "Strengthened data science skills through hands-on experimentation with LLMs, model selection, data pre-processing, evaluation, visualization, and real-world code deployment in workshops led by MIT professors, and received a Machine Learning certificate issued by Cornell University.",
        "Earned a spot in MIT’s Break Through Tech AI Fellowship, selected from over 3,000 applicants, confirming strong AI/ML capabilities."
      ]
    },
    {
      role: "IT Service Desk Consultant",
      company: "University of Massachusetts, Amherst",
      location: "Amherst, MA",
      period: "Oct 2025 - Present",
      points: [
        "Delivered technical troubleshooting and cloud-connected system support to 30+ users weekly by diagnosing campus account, hardware, and Wi-Fi issues using the ServiceNow ticketing system and remote-desktop tools, achieving a 95% first-contact resolution rate.",
        "Improved average resolution time from 30 minutes to 15 minutes during peak periods through efficient triage and problem-solving.",
        "Collaborated with cross-functional IT teams and identified recurring infrastructure issues and reduced repeat tickets by 20% through documentation and process optimization."
      ]
    }
  ],
  leadership: [
    {
      role: "Resident Assistant",
      company: "University of Massachusetts, Amherst",
      location: "Amherst, MA",
      period: "Aug 2024 – Present",
      points: [
        "Lead community development initiatives for 100+ diverse residents, designing and executing monthly events that increased resident participation by 30% and improved overall satisfaction rates.",
        "Develop and implement conflict resolution strategies that reduced incident reports by 25%, strengthening community cohesion and enhancing the student learning environment."
      ]
    }
  ],
  projects: [
    {
      title: "Road Safety Intelligence Model",
      association: "Break Through Tech — Michelin Mobility Intelligence",
      period: "Sept 2024 – Dec 2024",
      github_repo: "https://github.com/Michelin-Mobility-BTTAI-Team-23/Road-Safety-LLM.git",
      points: [
       "Designed a data-driven ML solution deployed in a cloud-based environment to detect and classify risk zones, demonstrating that LLM-powered automation for geospatial analysis improved detection accuracy by 25%.",
       "Created natural language interface in Google Colab, automating data processes and reducing processing time by 40% implementing data preprocessing and visualization workflows."
      ],
      technologies: ["Python", "ML", "Pandas", "Kepler.gl", "Matplotlib"]
    },
    {
      title: "Airbnb Superhost and Price Prediction Models",
      association: "Personal Project",
      period: "May 2025 - Aug 2025",
      github_repo: "https://github.com/bhavya632/AirBnb-Superhost-and-Price-Prediction-model.git",
      points: [
       "Built an end-to-end ML pipeline in Python using feature engineering and gradient boosting for price prediction and Superhost classification; visualized key drivers with Matplotlib and Seaborn.",
       "Superhost Prediction: Implemented a regression model to predict Superhost, achieving an accuracy score of 0.69.",
       "Price Prediction: Created a regression model to estimate listing prices, achieving an R-squared value of 0.53 and a Gradient Boosting Regressor Model achieving an R-squared value of 0.63."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Gradient Boosting"]
    },
    {
      title: "CharacterGPT",
      association: "UMass Amherst",
      period: "July 2025 – Sept 2025",
      github_repo: "https://github.com/bhavya632/CharacterGPT.git",
      points: [
       "This project explores whether Large Language Models (LLMs) can mimic characters from the TV show Friends and evaluates the degree of memorization versus generalization in their responses.",
       "We leverage a cleaned transcript dataset, format dialogue into conversational contexts, and then benchmark model outputs using semantic similarity and text generation evaluation metrics."
      ],
      technologies: ["Python", "Data Visualization", "Pandas", "NumPy", "tqdm"]
    },
    {
      title: "Word Count Chrome Extension",
      association: "UMass Amherst",
      period: "Jan 2026 – Feb 2026",
      github_repo: "https://github.com/bhavya632/WordCount-ChromeExtension.git",
      points: [
       "A lightweight Chrome Extension that allows you to count words in any highlighted text directly from the right-click context menu. No copy-pasting required!"
      ],
      technologies: ["JavaScript", "Chrome Extension API"]
    }
  ]
};