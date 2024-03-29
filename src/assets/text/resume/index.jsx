export const RESUME_EDUCATION = {
    title: "Temple University",
    subtitle: "College of Science and Technology",
    location: "Philadelphia, Pennsylvania",
    major: "Bachelor of Science - Computer Science",
    minor: "Minor in Data Science (Computational Analytics)",
    tidbits: [
        "Dean's List Award - Fall 2020",
        "GPA 3.30"
    ],
    courses: [
        {
            name: "Projects in Computer Science",
            code: "CIS 4398",
            dates: {
                start: new Date(2022, 7),
                end: new Date(2022, 11)
            }
        },
        {   
            name: "Foundations of Machine Learning",
            code: "CIS 4526",
            dates: {
                start: new Date(2022, 7),
                end: new Date(2022, 11)
            }
        },
        {
            name: "Cooperative Education Experience in Computer Science",
            code: "CIS 3381",
            dates: {
                start: new Date(2022, 7),
                end: new Date(2022, 11)
            }
        },
        {
            name: "Data-Intensive and Cloud Computing",
            code: "CIS 4517",
            dates: {
                start: new Date(2022, 0),
                end: new Date(2022, 4)
            }
        },
        {
            name: "Principles of Data Science",
            code: "CIS 3715",
            dates: {
                start: new Date(2022, 0),
                end: new Date(2022, 4)
            }
        },
        {
            name: "Software Design",
            code: "CIS 3296",
            dates: {
                start: new Date(2022, 0),
                end: new Date(2022, 4)
            }
        },
        {
            name: "Calculus III",
            code: "MATH 2043",
            dates: {
                start: new Date(2022, 0),
                end: new Date(2022, 4)
            }
        },
        {
            name: "Introduction to Mobile Application Development",
            code: "CIS 3515",
            dates: {
                start: new Date(2021, 7),
                end: new Date(2021, 11)
            }
        },
        {
            name: "Wireless Networks and Security",
            code: "CIS 3319",
            dates: {
                start: new Date(2021, 7),
                end: new Date(2021, 11)
            }
        }
    ]
};

export const RESUME_MAIN_TEXT = [
    {
        title: "Open for Work",
        location: "Am actively looking to start my full-time career in software engineering!",
        dates: [
            {
                start: new Date(2023, 5),
                end: null
            }
        ],
        current: true,
        bullets: [],
        sources: []
    },
    {
        title: "Application Developer",
        location: "Temple University Fox School of Business",
        dates: [
            {
                start: new Date(2022, 8),
                end: new Date(2023, 2)
            }
        ],
        current: false,
        bullets: [
            "Enhanced integrity of car ownership transfer and potential fraud reduction for 13 states by incorporating notarization API via Axios HTTP client for PDF file transmission and notary transaction retrieval",
            "Restructured document generation algorithm with Node.js PDF, CSV libraries to efficiently print title, bill of sale conditions for four additional states using Excel, with potential transition to relational database for scalability",
            "Revised user interface and organization of screen transitions for three transaction types to clarify instructions on vehicular transfer using TypeScript in flagship React Native application"
        ],
        sources: [
            {
                name: "Temple Fox Business School",
                url: "https://www.fox.temple.edu/"
            },
            {
                name: "Temple IBIT",
                url: "https://ibit.temple.edu/"
            },
            {
                name: "Kuaay, Inc.",
                url: "https://www.kuaay.com/"
            }
        ]
    },
    {
        title: "Software Engineer Intern",
        location: "Above & Beyond Studios, Inc",
        dates: [
            {
                start: new Date(2022, 7),
                end: new Date(2023, 0)
            }
        ],
        current: false,
        bullets: [
            "Engineered AWS CloudFront distributions for outreach of business resources to new company website, four e-commerce platform subdomains, with AWS S3 storage and Route 53 hosting zones for effective content delivery",
            "Collaborated with co-interns to support development of API endpoints via Node.js, API Gateway and handle query builder functions for PostgreSQL database on shopping cart, order history, coupon objects",
            "Improved company contact for business partnerships by integrating HubSpot API client in Node.js server code combined with additional implementation of data analysis client for customer responses, newsletters",
            "Upgraded user experience on e-commerce website for 15 account and shopping pages using React.js, CSS based on Figma designs, reviewed with frontend development team"
        ],
        sources: [
            {
                name: "Above & Beyond Studios",
                url: "https://www.abstudios.us/"
            },
        ]
    },
    {
        title: "Data Science Classroom Assistant",
        location: "Temple University College of Science and Technology",
        dates: [
            {
                start: new Date(2021, 7),
                end: new Date(2022, 4)
            }
        ],
        current: false,
        bullets: [
            "Expanded accessibility of data science knowledge to 60 non-programming students by collaborating in teaching of Python programming and preparatory data science skills using pandas, NumPy libraries",
            "Expedited progress by debugging student code and resolving software issues on Jupyter Notebook worksheets",
            "Evaluated 15 worksheets based on data manipulation and programming knowledge during office hours"
        ],
        sources: [
            {
                name: "Elements of Data Science",
                url: "https://sites.temple.edu/eds8/"
            },
            {
                name: "Temple CST",
                url: "https://cst.temple.edu/"
            }
        ]
    }
];

export const RESUME_SECONDARY_TEXT = [
    {
        title: "Computer Lab Consultant",
        location: "Temple University",
        dates: [
            {
                start: new Date(2021, 7),
                end: new Date(2022, 4)
            },
            {
                start: new Date(2022, 7),
                end: new Date(2022, 8)
            }
        ],
        bullets: [
            "Troubleshooted computers and intermedia equipment inside three laboratory settings to ensure working conditions are satisfactory for uninterrupted classroom instruction",
            "Coordinated the inspection of 60 workspaces to check for working systems and organization in-between lab hours and before closing"
        ],
        sources: [
            {
                name: "Temple CIS Department",
                url: "https://cis.temple.edu/"
            }
        ]
    },
    {
        title: "Research Assistant",
        location: "Temple University",
        dates: [
            {
                start: new Date(2022, 5),
                end: new Date(2022, 7)
            }
        ],
        bullets: [
            "Analyzed network security datasets by assessing 10 designated machine learning algorithms and comparing classification scores via Google CoLab (Python) and Weka (Java)",
            "Assembled stratified k-fold and train-test split validation models through scikit-learn (Python) to sort predicted and actual values based on 42 dataset attributes",
            "Customized visualizations of scores and error percentages for improved visual understanding to researchers through Microsoft Excel"
        ],
        sources: []
    },
    {
        title: "Fulfillment Center Associate",
        location: "Amazon (Prime Now, Whole Foods Market)",
        dates: [
            {
                start: new Date(2020, 7),
                end: new Date(2021, 6)
            }
        ],
        bullets: [
            "Staged essential food or hygiene products for online orders via Amazon Prime Now",
            "Cooperated with Whole Foods employees for inventory management to ensure customer satisfaction",
            "Participated in non-inventory or cleaning shifts to ensure workspaces were hygienic and secure, including 6 printers, 12 shelves, and 12 coolers",
            "Demonstrated ability to work in fast and physically demanding workspace with 240% increase in average item pickup rate (25 items/hour to 60 items/hour)"
        ],
        sources: []
    }
];