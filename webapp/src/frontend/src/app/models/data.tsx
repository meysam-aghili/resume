import GithubIcon from '../shared/components/icons/GithubIcon';
import LinkedInIcon from '../shared/components/icons/LinkedInIcon';
import aboutBackgroundImage from '../statics/images/header-background.webp';
import aboutImage from '../statics/images/header.jpg';
import { About, PortfolioItem, ResumeHistoryItem, SkillGroup, SkillGroupV2, Social } from './interfaces';
import { Building, Calendar, Download, Mail, MapPin, Phone } from "lucide-react";

import porfolioImage1 from '../statics/images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../statics/images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../statics/images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../statics/images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../statics/images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../statics/images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../statics/images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../statics/images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../statics/images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../statics/images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../statics/images/portfolio/portfolio-11.jpg';

export const SectionId = {
  About: 'About',
  Portfolio: 'Portfolio',
  Resume: 'Resume'
} as const;
export type SectionId = (typeof SectionId)[keyof typeof SectionId];


export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/meysam-aghili' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/meysam-aghili' },
];

export const AboutData: About = {
  imageSrc: aboutImage,
  backImageSrc: aboutBackgroundImage,
  name: `I'm Meysam Aghili`,
  description: (
    <>
      <p className="prose-sm text-start text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Data / Platform Engineer</strong>,
        dedicated and results-oriented with 5 years of experience
        designing, implementing, and maintaining robust data pipelines and
        architectures. <br />
        Proficient in using a variety of technologies.
        I possess strong problem-solving and analytical skills, a passion for learning, a
        sense of responsibility, and the ability to collaborate effectively as a team
        player.
      </p>
    </>
  ),
  actions: [
    {
      href: '/statics/assets/a.pdf',
      text: 'Resume',
      primary: true,
      Icon: Download,
    }
  ],
  aboutItems: [
    { label: 'Location', text: 'Tehran, Iran', Icon: MapPin },
    { label: 'Age', text: '25', Icon: Calendar },
    { label: 'Employment', text: 'Digikala, inc.', Icon: Building },
    { label: 'Email', text: 'meysamaghili533@gmail.com', Icon: Mail },
    { label: 'Phone', text: '+98 9332655928', Icon: Phone },
    { label: 'LinkedIn', text: 'www.linkedin.com/in/meysam-aghili', Icon: Mail },
  ],
};

export const experiences: ResumeHistoryItem[] = [
  {
    timeWindow: "2022 - Present",
    location: "Digikala, Inc.",
    title: "Data/Platform Engineer",
    description: (
      <ul className="text-gray-300 list-disc">
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Kafka & Data Integration Engineering: </span>
            Implemented and maintained a scalable Standardized and version-controlled Kafka cluster to enable real-time
            data ingestion and processing across multiple environments and gather, transform, and load high-volume data
            from diverse sources (MySQL, PostgreSQL, and others) into data lakes and data warehouses.
            Managed Kafka upgrades and production maintenance, keeping clusters stable, secure, and aligned with the latest versions.
            Integrated Prometheus and Grafana for proactive monitoring and alerting on cluster health and connector activity,
            improving system reliability and observability.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>.NET Application & API Development: </span>
            Designed and developed multiple .NET applications and APIs using ASP.NET Web API and Blazor,
            applying clean architecture principles and enterprise-grade design patterns. Implemented structured logging,
            database management with Entity Framework (EF), and followed best practices. Containerized .NET services with
            Docker and implemented unit and integration tests to ensure reliability and maintainability. Created and published a
            reusable utilities library on NuGet, improving code reusability and standardization across projects.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Data Catalog & Governance Platform: </span>
            Designed and developed a full-stack Data Catalog web application to centralize and visualize the company’s data structures,
            storage locations, metadata, and inter-table relationships. Implemented capabilities including data classification
            and tagging to support data access management and compliance requirements. Built robust authentication and authorization
            layers with LDAP integration, role-based access control (RBAC), and attribute-based policies for secure user management.
            Modeled and stored metadata in PostgreSQL, leveraging PostgreSQL row-level security. Engineered the backend
            with .NET and the frontend with React. Containerized the entire application stack for portable, consistent,
            and production-ready deployments.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Airflow Infrastructure & Workflow Orchestration: </span>
            Architected and maintained a production-grade Apache Airflow cluster to provide a unified,
            scalable platform for BI developers and data analysts to deploy and manage data workflows.
            Utilized Docker Operator to isolate project dependencies. Developed CI/CD pipelines and configuration
            templates and custom DAG library to automate deployment of Airflow projects, improving onboarding speed
            and deployment consistency.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Monitoring, Observability & Alerting Infrastructure: </span>
            Implemented a company-wide monitoring and alerting system using Prometheus and Grafana to
            observe all projects and infrastructure components in real time. Developed custom exporters
            to collect detailed performance metrics and resource utilization data. Integrated monitoring
            for critical data systems including Airflow DAG executions, Celery workers, Kafka connectors,
            and application services. Built a production-grade Alerting Middleware API (in .NET) to centralize
            notifications for Slack and Microsoft Teams, supporting dynamic webhook management, message templating.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Version Control & CI/CD Automation: </span>
            Utilized advanced Git workflows (branching strategies, merge requests, and release management)
            to maintain clean, traceable development cycles. Designed and implemented CI/CD pipelines using GitLab CI,
            automating build, test, and deployment processes for multiple data and application projects.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Containerization & Orchestration: </span>
            Containerized most applications and services across the organization to ensure environment
            consistency, simplified deployment, and scalability. Utilized Docker Swarm as an orchestration
            layer to manage multi-container applications, automate service deployment, and optimize resource
            usage across nodes.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            <span className='font-bold'>Database Design & Management: </span>
            Designed, implemented, and optimized various databases including MySQL, PostgreSQL, SQL Server,
            MongoDB, ClickHouse, and Redis to support diverse analytical, transactional, and caching use cases.
            Experienced in data modeling, indexing, query optimization, replication, and backup strategies to
            ensure high performance, reliability, and scalability across systems.
          </p>
        </li>
      </ul>
    )
  },
  {
    timeWindow: "2021 - 2022",
    location: "Digikala, Inc.",
    title: "Senior BI Developer | Data Analyst",
    description: (
      <ul className="text-gray-300 list-disc">
        <li className='ml-6 mb-3'>
          <p>
            Lead the design, development, and optimization of dashboards, data models, and ETL pipelines.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Partner with business stakeholders to identify KPIs, define reporting requirements, and deliver actionable insights.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Develop automated reporting systems and scalable data solutions to ensure accuracy, accessibility, and consistency across business units.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Perform advanced data analysis to uncover trends, opportunities, and risks that drive strategic initiatives.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Mentor junior analysts and contribute to continuous improvement of BI best practices.
          </p>
        </li>
      </ul>
    )
  },
  {
    timeWindow: "2020 - 2021",
    location: "Nikamooz, Inc.",
    title: "BI Developer",
    description: (
      <ul className="text-gray-300 list-disc">
        <li className='ml-6 mb-3'>
          <p>
            Build and optimize data models, ETL pipelines, and data warehouses to ensure efficient data flow and accuracy and scalability.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Design, develop, and maintain BI dashboards and analytical reports using tools such as Power BI, SSIS.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Collaborate with cross-functional teams to identify data requirements and translate business needs into technical solutions.
          </p>
        </li>
        <li className='ml-6 mb-3'>
          <p>
            Analyze large datasets to uncover trends, patterns, and opportunities for business improvement.
          </p>
        </li>
      </ul>
    )
  }
];

export const educations: ResumeHistoryItem[] = [
  {
    timeWindow: "2018 - 2022",
    location: "University of Science and Research",
    title: "Bachelor of Computer Science",
    description: (
      <ul className="text-gray-300 list-disc">
        <li className='ml-6 mb-3'>
          <p>
            Completed a Bachelor of Computer Science with a focus on software development, algorithms, and data structures.<br />
            Gained hands-on experience in programming languages such as C#, Python, and JavaScript, as well as application development.<br />
            Participated in collaborative projects, coding competitions, and research initiatives, building a strong foundation in problem-solving, system design, and modern software engineering practices.
          </p>
        </li>
      </ul>
    )
  }
];

export const skillItems: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      { title: 'React', level: 8 },
      { title: 'TypeScript', level: 7 },
      { title: 'GraphQL', level: 5 },
      { title: 'Vue', level: 4 },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { title: 'React Native', level: 7 },
      { title: 'Java', level: 5 },
      { title: 'Flutter', level: 3 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { title: 'Node.js', level: 8 },
      { title: 'Rust', level: 5 },
      { title: 'Go', level: 6 },
      { title: 'Python', level: 4 },
    ],
  },
  {
    title: 'Security',
    items: [
      { title: 'Application security', level: 6 },
      { title: 'Network security', level: 5 },
      { title: 'Data compliance', level: 4 },
    ],
  },
];

export const skillItemsV2: SkillGroupV2 = {
  experiencedIn: ["Apache Kafka", ".NET", "Python", "Docker Swarm", "React, Nextjs", "GitLab-CI", "SQLServer, Postgres", "SSIS, SSAS", "Debezium", "Airflow", "PowerBI", "ML"],
  experimentedWith: ["ClickHouse", "Grafana", "Prometheus, InfluxDB", "MongoDB, Redis, Elastic", "ksqlDB", "MinIO", "FastAPI", "RabbitMQ"],
  interestedIn: ["Data", "Engineering", "DevOps", "IOT"],
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];
