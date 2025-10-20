export const siteConfig = {
  name: "Masudur Rahman",
  title: "Senior Software Engineer, Pathao Ltd (Fintech Engineering)",
  description: "Portfolio website of Masudur Rahman",
  accentColor: "#1d4ed8",
  social: {
    email: "masudjuly02@gmail.com",
    linkedin: "https://linkedin.com/in/masudur-rahman",
    twitter: "https://x.com/_masud_rahman_",
    github: "https://github.com/masudur-rahman",
  },
  aboutMe:
    "A professional Software Engineer with 5 years of experience in Back-End Development in Go and almost 2 years of experience in DevOps Engineering. A competitive programmer with great problem-solving skills. I am passionate about learning new things, and am highly adaptive to new technologies.",
  skills: ["Go", "Bash", "C++", "Kubernetes", "Docker", "Prometheus", "Grafana", "Helm", "Ansible", "Terraform", "Postgres", "Nats", "GH Actions", "FluxCD"],
  // Project filtering configuration (excluding open source - now has separate section)
  projectFilters: [
    { name: "All", filter: "all" },
    { name: "Professional", filter: "professional" },
    { name: "Academic", filter: "academic" },
    { name: "Hobby", filter: "hobby" }
  ],

  projects: [
    // Original order as specified
    {
      name: "Expense Tracker Bot",
      description:
        "A Telegram bot built with Go to manage and track personal finances. It allows users to record expenses, income, transfers, and loans directly from chat. The bot supports multi-account management (cash, bank, etc.) and generates categorized summaries and PDF reports. Designed for self-hosting with a simple, automation-friendly workflow.",
      link: "https://github.com/masudur-rahman/expense-tracker-bot",
      skills: ["Go", "Telegram API"],
      category: "hobby",
      role: "Owner"
    },
    {
      name: "Pawsitively Purrfect",
      description:
        "Pawsitively Purrfect is a web application for Pet Adoption, written in Go, GraphQL. The project follows the Service-Repository-Data pattern for clean architecture. The Repository layer communicates with Data layer through a gRPC server.",
      link: "https://github.com/masudur-rahman/pawsitively-purrfect",
      skills: ["Go", "GraphQL"],
      category: "hobby",
      role: "Owner"
    },
    {
      name: "ByteBuilders by AppsCode",
      description:
        "ByteBuilders is the Back-End server for a Kubernetes Dashboard. Deploy, manage, upgrade Kubernetes on any cloud and automate deployment, scaling, and management of containerized applications. Contributed in implementing the server. Integrated Stripe payment apis, implemented background task manager via NATS Messaging for long running apis, implemented wizard for imiporting Kubernetes clusters from various cloud providers, etc.",
      link: "https://appscode.com/console",
      skills: ["Go", "NATS"],
      category: "professional",
      role: "Lead Software Engineer"
    },
    {
      name: "Grafana Operator by AppsCode",
      description:
        "Grafana Operator is a Kubernetes Controller for Provisioning and Managing Grafana Dashboards and Datasources. It's based on a grafana sdk. Contributed in adding the initial version of the operator. Also added E2E tests using Gingkgo.",
      link: "https://github.com/open-viz/grafana-tools",
      skills: ["Go"],
      category: "professional",
      role: "Contributor"
    },
    {
      name: "Pharmer by AppsCode",
      description:
        "Pharmer is a Kubernetes Cluster Manager using Kubeadm & Cluster API. Contributed in adding support for creating Kubernetes Cluster in Google Compute Engine using Cluster API.",
      link: "https://github.com/pharmer/pharmer",
      skills: ["Go"],
      category: "professional",
      role: "Contributor"
    },
    {
      name: "Logger by AppsCode",
      description:
        "nats-logr is a logr implementation using NATS. union-logr is a logr implementation that aggregates multiple loggers. Implemented these loggers which impacted a great deal in Pharmer project.",
      link: "https://github.com/gomodules/nats-logr",
      skills: ["Go", "NATS"],
      category: "professional",
      role: "Contributor"
    },

    // Additional projects moved to the end
    {
      name: "Facial Expression Recognition Using CNN and SVM Approach",
      description:
        "Developed a program to recognize Facial Expression from a static image. CNN and SVMs used to train and classify facial expressions into various categories. Python, TensorFlow, SVM, OpenCV used for image processing and machine learning.",
      link: "https://github.com/masudur-rahman/FER-Final-Report",
      skills: ["Python", "TensorFlow", "SVM", "OpenCV", "Machine Learning", "Image Processing"],
      category: "academic",
      role: "Owner",
      timeline: "Jan 2018 - Oct 2018"
    },
  ],

  // Open Source Projects (separate section)
  openSourceProjects: [
    {
      name: "Cluster API Provider GCP",
      description:
        "Fixed some issues regarding k8s version, Node role and default disk size in the Kubernetes Cluster API Provider for Google Cloud Platform.",
      link: "https://github.com/kubernetes-sigs/cluster-api-provider-gcp/pulls?q=is:pr+is:merged+author:masudur-rahman",
      skills: ["Go", "Kubernetes", "GCP"],
      role: "Contributor"
    },
    {
      name: "Gitea",
      description:
        "Refactored naming of users' avatars in the Gitea Git hosting service.",
      link: "https://github.com/go-gitea/gitea/pull/8547",
      skills: ["Go", "Backend"],
      role: "Contributor"
    },
    {
      name: "Grafana SDK",
      description:
        "Refactored some existing APIs and added some new ones in the Grafana SDK for Go.",
      link: "https://github.com/grafana-tools/sdk/pulls?q=is:pr+is:merged+author:masudur-rahman",
      skills: ["Go", "Backend", "Grafana"],
      role: "Contributor"
    },
    {
      name: "NATS Helm Chart",
      description:
        "Fixed some Websocket related issues in NATS helm chart for Kubernetes deployments.",
      link: "https://github.com/nats-io/k8s/pull/315",
      skills: ["Kubernetes", "NATS", "Helm"],
      role: "Contributor"
    },
  ],
  experience: [
    {
      company: "Pathao Ltd, Fintech Engineering",
      title: "Senior Software Engineer (DevOps)",
      dateRange: "Jan 2024 - Present",
      bullets: [
        "Introduced Descheduler for evenly distributing resources accross kubernetes cluster to minimize node over/under utilization. Tools: Go, Helm, k8s etc.",
        "Setup Airflow a data pipelining tool for transferring important database info from on- premises systems to GCP BigQuery for enhanced monitoring. Tools: Ansible, Helm, k8s.",
        "Significantly improved Logging and Monitoring capabilities within the Pathao Pay architecture by introducing comprehensive service dashboards, thereby enhancing operational visibility.",
        "Enhanced Firewall Rules for virtual machines, ensuring robust protection against potential threats.",
      ],
    },
    {
      company: "AppsCode Inc",
      title: "Lead Software Engineer",
      dateRange: "Jun 2023 - Dec 2023",
      bullets: [
        "Lead the design and maintenance of AppsCode API Server, a RESTful API for managing Kubernetes clusters and applications. Tools: Go, go-macaron, Helm, k8s etc.",
        "Restructured the cluster import flow for AppsCode Console, improving the user experience and performance.",
        "Implemented dynamic feature controller for managing different features in imported clusters, such as monitoring, security",
        "Restructured the Licensing system for AppsCode products, automating the license issuance, validation and enforcement.",
        "Packaged AppsCode Console as a Service and made it ready for deployment in user k8s clusters (vendor-managed or self-managed) and through various DNS providers and Cloud Storage Services. Tools: CloudDNS, Cloudflare, AzureDNS, Route53 etc. and also GCS, s3, Azure Blob Storage, Linode Object Storage.",
      ],
    },
    {
      company: "AppsCode Inc",
      title: "Senior Software Engineer",
      dateRange: "Jan 2021 - Dec 2022",
      bullets: [
        "Designed and Maintained ByteBuilders API Server. Tools used: Go, macaron web framework, helm, k8s.",
        "Added a support for importing Kubernetes Cluster [Managed, Public & Air Gaped] to ByteBuilders Dashboard.",
        "Implemented A Background Task Manager for long running tasks, log/exec features for Kubernetes pods/services and Invoice generation from users’ usage data with the help of NATS. Tools used: Go, k8s, NATS",
        "Developed a Prometheus Proxy Server for Grafana datasource.",
        "Added CI/CD pipelines for projects in Github Actions.",
        "Involved in Deployment & Maintenance of ByteBuilders Production Server.",
        "Guided and managed team-members.",
      ],
    },
    {
      company: "AppsCode Inc",
      title: "Software Engineer",
      dateRange: "Nov 2018 - Dec 2020",
      bullets: [
        "Implemented a feature in Pharmer project to support Kubernetes Cluster Provisioning in Google Compute Engine using Cluster API. Tools used: Go, Shell scripts.",
        "Contributed in ByteBuilders API Server integrating various features.",
        "Integrated Stripe Payment APIs including product, plan, payment and invoice apis.",
        "Developed a Kubernetes Controller for Provisioning and Managing Grafana Dashboards and Datasources.",
      ],
    },
  ],
  education: [
    {
      school: "Chittagong University of Engineering and Technology",
      degree: "BSc in Computer Science & Engineering",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated with 3.76/4 CGPA",
        "Participated in numerous national and international Programming contests."
      ],
    },
    {
      school: "Notre Dame College, Dhaka",
      degree: "Higher Secondary Certificate",
      dateRange: "2011-2013",
      achievements: [
        "Graduated with 5.00 GPA",
      ],
    },
    {
      school: "Shaheb Rampur High School, Madaripur",
      degree: "Secondary School Certificate",
      dateRange: "2006-2011",
      achievements: [
        "Graduated with 5.00 GPA",
        "Government Scholarship",
      ]
    }
  ],
};
