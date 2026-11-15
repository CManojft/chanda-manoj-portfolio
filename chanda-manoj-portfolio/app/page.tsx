 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check,
  ChevronRight, Code2, Database, Download, ExternalLink, Github,
  GraduationCap, Mail, MapPin, Menu, Network, Phone, Sparkles,
  Workflow, X, BarChart3, FileText, Linkedin
} from "lucide-react";

const skills = [
  { title: "Agentic AI & LLMs", icon: BrainCircuit, items: ["Agent orchestration", "Multi-agent collaboration", "Stateful logic", "Tool-using agents", "Prompt engineering", "RAG", "LLM fine-tuning concepts"] },
  { title: "Cloud · Azure", icon: Network, items: ["Azure AI Agent Service", "Azure AI Studio", "Azure OpenAI", "Azure ML", "Azure Functions", "Kubernetes", "Secure deployments"] },
  { title: "Programming", icon: Code2, items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Object-oriented programming", "Data structures", "JavaScript / TypeScript (basic)"] },
  { title: "APIs & Data", icon: Database, items: ["REST APIs", "JSON", "YAML", "GraphQL", "Microsoft Graph", "SQL", "RDBMS", "ETL", "Data cleaning", "EDA"] },
  { title: "Analytics & Visualization", icon: BarChart3, items: ["Power BI", "Microsoft Excel", "Matplotlib", "Seaborn", "Statistical analysis"] },
  { title: "Engineering Practices", icon: Workflow, items: ["SDLC", "Debugging", "Unit testing", "Code review", "Technical documentation", "Problem solving", "Team collaboration"] },
];

const projects = [
  {
    number: "01", category: "AGENTIC AI · AZURE · PYTHON",
    title: "Multi-Agent Autonomous Workflow System",
    description: "A multi-agent workflow designed around specialised roles, decision logic and collaboration flows to complete multi-step tasks.",
    points: [
      "Designed agent goals, roles, decision logic and collaboration flows using Azure AI Agent Service and Azure OpenAI.",
      "Built Python tool-using agents that call REST APIs and Microsoft Graph, with stateful memory and orchestration.",
      "Implemented a RAG pipeline with prompt engineering to ground responses in enterprise documents.",
      "Packaged logic as Azure Functions with event-driven triggers; managed configuration with JSON/YAML and secured deployment access."
    ],
    tags: ["Azure AI Agent Service", "Azure OpenAI", "Python", "RAG", "REST APIs", "Microsoft Graph"],
    icon: Network, accent: "violet"
  },
  {
    number: "02", category: "MACHINE LEARNING · REGRESSION",
    title: "Health Insurance Claim Prediction",
    description: "A regression project focused on exploring insurance data, preparing features and comparing predictive models.",
    points: [
      "Performed exploratory data analysis using Seaborn.",
      "Handled missing values using mean imputation and treated outliers using the IQR method.",
      "Implemented and compared Multiple Linear, Random Forest, Ridge and Lasso Regression.",
      "Random Forest achieved the best reported R² of 0.93 and Adjusted R² of 0.91."
    ],
    tags: ["Python", "Seaborn", "Regression", "Random Forest", "Ridge", "Lasso"],
    icon: BarChart3, accent: "mint"
  },
  {
    number: "03", category: "DATA ANALYTICS · CLASSIFICATION",
    title: "E-Commerce Customer Satisfaction Prediction",
    description: "A classification project using customer support ticket data to explore satisfaction patterns and predict customer satisfaction.",
    points: [
      "Collected, cleaned and preprocessed customer support ticket data.",
      "Handled missing values and encoded categorical features.",
      "Conducted exploratory data analysis to identify issue trends and satisfaction patterns.",
      "Built a Scikit-learn model to predict satisfaction and surface key drivers."
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    icon: BrainCircuit, accent: "blue"
  },
];

const experience = [
  "Completed a structured internship covering core data analytics concepts, tools and applications.",
  "Wrote Python and SQL scripts for data preparation, cleaning and basic statistical analysis, following requirements from senior mentors.",
  "Documented process steps and shared regular progress updates, supporting cross-functional collaboration.",
  "Used Excel, SQL and IBM data analytics tools to derive insights and generate actionable reports."
];

const certifications = [
  { name: "IBM SkillsBuild Data Analytics Summer Internship", issuer: "IBM", detail: "Issued June 2024 · Expired August 2024 · Internship certificate" },
  { name: "BigQuery for Machine Learning", issuer: "Google", detail: "Issued April 2025 · Credential ID: 15064723" },
  { name: "Career Essentials in Data Analysis", issuer: "Microsoft", detail: "Issued June 2025 · By Microsoft and LinkedIn" },
  { name: "Machine Learning with Python", issuer: "Coursera", detail: "Supervised and unsupervised algorithms, scikit-learn, pandas, NumPy and matplotlib · Listed on résumé" },
  { name: "Introduction to Bio Statistics", issuer: "NPTEL", detail: "Probability, hypothesis testing, correlation, regression and ANOVA · Listed on résumé" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#home" className="brand" aria-label="Chanda Manoj home"><span className="brand-mark">CM</span><span>CHANDA<span className="text-violet-300">.</span></span></a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <a href="#contact" className="button button-small hidden md:inline-flex">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="icon-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav md:hidden">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}<ChevronRight size={16} /></a>)}</nav>}
      </header>

      <section id="home" className="hero-section section-anchor">
        <div className="container relative grid min-h-[calc(100vh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr]">
          <div className="hero-copy relative z-10">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="pulse-dot" /> AVAILABLE TO JOIN IMMEDIATELY</motion.div>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="hero-intro">HELLO, I&apos;M</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }} className="hero-title">Chanda<br /><span className="gradient-text">Manoj.</span></motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32 }} className="hero-role">Agentic AI Developer <span>&amp;</span> Data Analyst</motion.h2>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .42 }} className="hero-description">I build intelligent, tool-using AI workflows and turn data into meaningful insights. I bring together statistics, Python, machine learning and Azure technologies to solve practical problems.</motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .52 }} className="mt-8 flex flex-wrap gap-3">
              <a className="button" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/Chanda_Manoj_Resume.pdf" download><Download size={16} /> Download résumé</a>
            </motion.div>
            <div className="hero-meta mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Hyderabad, India</span>
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="mailto:manojchanda.bhu.stcomp@gmail.com"><Mail size={15} /> Email me</a>
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://www.linkedin.com/in/chanda-manoj-b14b21262/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            </div>
            <div className="hero-focus mt-8"><span>FOCUS AREAS</span><b>AGENTIC AI</b><i /> <b>DATA ANALYTICS</b><i /> <b>MACHINE LEARNING</b></div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .22 }} className="portrait-stage">
            <div className="portrait-aura" />
            <div className="portrait-grid" />
            <div className="portrait-frame">
              <img src="/manoj-profile.webp" alt="Portrait of Chanda Manoj" className="portrait-image" />
              <div className="portrait-shade" />
              <div className="portrait-caption"><span>AI · DATA · ENGINEERING</span><strong>Building ideas<br />into impact.</strong></div>
            </div>
            <div className="portrait-float portrait-float-top"><span className="portrait-float-icon"><BrainCircuit size={17} /></span><span><b>Agentic AI</b><small>Multi-agent workflows</small></span></div>
            <div className="portrait-float portrait-float-side"><span className="portrait-float-icon mint"><Database size={17} /></span><span><b>Data &amp; ML</b><small>Insights with Python</small></span></div>
            <div className="portrait-index">01 <span>/ PROFILE</span></div>
          </motion.div>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section id="about" className="section section-anchor">
        <div className="container">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity backed by data. Creativity powered by AI." subtitle="A statistics and computing postgraduate with a practical interest in building intelligent systems and solving analytical problems." />
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-7 sm:p-9">
              <div className="mb-5 flex items-center gap-3"><span className="section-icon"><Sparkles size={19} /></span><p className="eyebrow">MY APPROACH</p></div>
              <p className="text-lg leading-8 text-slate-300">I am a postgraduate in <strong className="font-semibold text-white">Statistics and Computing</strong> with a foundation in computer science. My work and learning span agent orchestration, tool-using agents, retrieval-augmented generation, data analysis and machine learning.</p>
              <p className="mt-5 leading-8 text-slate-400">I enjoy taking a problem from understanding and data preparation through to model development, workflow design and clear technical documentation. I value thoughtful problem-solving, collaboration and building solutions that are useful, secure and scalable.</p>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card stat-card"><span className="stat-number">M.Sc.</span><span className="stat-label">Statistics & Computing</span><span className="stat-note">Banaras Hindu University</span></motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card stat-card"><span className="stat-number">IBM</span><span className="stat-label">Data Analyst Intern</span><span className="stat-note">Jun 2024 – Aug 2024</span></motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-anchor">
        <div className="container">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" subtitle="A blend of AI engineering, programming, cloud, data management and analytical tools." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return <motion.div key={skill.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .06 }} className="glass-card skill-card">
                <div className="mb-5 flex items-center gap-3"><span className="section-icon"><Icon size={19} /></span><h3 className="text-lg font-semibold text-white">{skill.title}</h3></div>
                <div className="flex flex-wrap gap-2">{skill.items.map((item) => <span key={item} className="skill-chip">{item}</span>)}</div>
              </motion.div>;
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-anchor">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects that bring ideas to life." subtitle="A selection of projects across agentic AI, predictive modelling and customer analytics." />
          <div className="space-y-5">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <motion.article key={project.number} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`project-card project-${project.accent}`}>
                <div className="project-topline"><span>{project.category}</span><span className="project-number">{project.number}</span></div>
                <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
                  <div><div className="project-icon"><Icon size={26} /></div><h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">{project.title}</h3><p className="mt-4 leading-7 text-slate-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="skill-chip">{tag}</span>)}</div></div>
                  <div className="project-details"><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-slate-500">WHAT I DID</p><ul className="space-y-4">{project.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300"><Check size={17} className="mt-1 shrink-0 text-mint" />{point}</li>)}</ul></div>
                </div>
              </motion.article>;
            })}
          </div>
          <p className="mt-6 text-xs leading-6 text-slate-500">Project descriptions are based on the résumé provided. Add repository links, screenshots or live demos when those materials are available.</p>
        </div>
      </section>

      <section id="experience" className="section section-anchor">
        <div className="container">
          <SectionHeading eyebrow="WHERE I'VE LEARNED" title="Experience" subtitle="Applying analytical thinking to practical data preparation, reporting and collaboration." />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card experience-card">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4"><div className="company-mark">IBM</div><div><h3 className="text-xl font-semibold text-white">Data Analyst Intern</h3><p className="mt-1 text-violet-300">IBM</p></div></div>
              <span className="date-pill">JUN 2024 — AUG 2024</span>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">{experience.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400"><Check size={17} className="mt-1 shrink-0 text-mint" />{item}</li>)}</ul>
          </motion.div>
        </div>
      </section>

      <section id="education" className="section section-anchor">
        <div className="container">
          <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education & certifications" subtitle="A strong foundation in statistics, computing and applied data analysis." />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="glass-card p-7">
              <div className="mb-7 flex items-center gap-3"><span className="section-icon"><GraduationCap size={20} /></span><h3 className="text-lg font-semibold text-white">Education</h3></div>
              <div className="timeline-item"><span className="timeline-dot" /><p className="text-xs font-bold tracking-widest text-violet-300">OCT 2023 — JUN 2025</p><h4 className="mt-2 text-lg font-semibold text-white">M.Sc. Statistics and Computing</h4><p className="mt-1 text-sm text-slate-400">Banaras Hindu University · Varanasi, India</p><p className="mt-2 text-sm text-slate-500">CGPA: 6.5</p></div>
              <div className="timeline-item mt-8"><span className="timeline-dot" /><p className="text-xs font-bold tracking-widest text-violet-300">AUG 2020 — JUN 2023</p><h4 className="mt-2 text-lg font-semibold text-white">Bachelor of Science (MSCS)</h4><p className="mt-1 text-sm text-slate-400">Keshav Memorial Institute of Commerce and Science · Hyderabad, India</p><p className="mt-2 text-sm text-slate-500">CGPA: 8.45</p></div>
            </div>
            <div className="glass-card p-7">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="section-icon"><FileText size={20} /></span><h3 className="text-lg font-semibold text-white">Certifications</h3></div><a href="https://www.linkedin.com/in/chanda-manoj-b14b21262/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-violet-300 transition hover:text-white">View LinkedIn profile <ExternalLink size={13} /></a></div>
              <div className="space-y-6">{certifications.map((cert) => <div key={cert.name} className="cert-item"><div className="flex items-start justify-between gap-3"><div><h4 className="font-semibold text-white">{cert.name}</h4><p className="mt-1 text-sm text-violet-300">{cert.issuer}</p></div><ArrowUpRight size={17} className="shrink-0 text-slate-500" /></div><p className="mt-2 text-sm leading-6 text-slate-500">{cert.detail}</p></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-anchor pb-24">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="contact-panel">
            <div className="contact-orb" />
            <p className="eyebrow">LET&apos;S CONNECT</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">Have a problem worth solving?</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">I&apos;m interested in opportunities where I can contribute to Agentic AI development, data analytics and intelligent automation. Let&apos;s start a conversation.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button" href="mailto:manojchanda.bhu.stcomp@gmail.com">Send an email <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/chanda-manoj-b14b21262/" target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={16} /></a>
            </div>
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2">
              <a href="mailto:manojchanda.bhu.stcomp@gmail.com" className="contact-link"><Mail size={17} /><span>manojchanda.bhu.stcomp@gmail.com</span></a>
              <a href="tel:+919133928370" className="contact-link"><Phone size={17} /><span>+91 91339 28370</span></a>
              <span className="contact-link"><MapPin size={17} /><span>Hyderabad, Telangana, India</span></span>
              <a href="https://www.linkedin.com/in/chanda-manoj-b14b21262/" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={17} /><span>linkedin.com/in/chanda-manoj-b14b21262</span></a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/[.07] py-7">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-600 sm:flex-row sm:text-left"><p>© {new Date().getFullYear()} Chanda Manoj. Designed with purpose.</p><a href="#home" className="inline-flex items-center gap-2 transition hover:text-violet-300">Back to top <ArrowUpRight size={13} /></a></div>
      </footer>
    </main>
  );
}
