// ::: for both academic and personal projects :::
// ongoing means it's currently in the works
// complete means it's working/finished product
// projects that are neither ongoing nor complete are probably abandoned :-)

// title, ongoing, complete, ((sub1 and sub2) OR sub), link, picture, description, & skills

export const PROJECTS_ACADEMIC_TEXT = [
    {
        title: "Parking Spot Detector",
        ongoing: false,
        complete: true,
        course: "Projects in Computer Science (CIS 4398)",
        dates: [
            {
                start: new Date(2022, 8),
                end: new Date(2022, 11)
            }
        ],
        links: [
            {
                name: "Backend-API GitHub",
                url: "https://github.com/Capstone-Projects-2022-Fall/parking-spot-detector-api"
            },
            {
                name: "Frontend application GitHub",
                url: "https://github.com/Capstone-Projects-2022-Fall/parking-spot-detector-front-end"
            }
        ],
        description: "Software program that specializes in helping users navigate and easily access open parking areas through a mobile application, with image recognition software to indicate available areas detected from registered camera units.",
        skills: [
            "Node.js",
            "React Native",
            "React.js",
            "MongoDB",
            "Postman",
            "AWS (Elastic Beanstalk, S3)"
        ],
        query: [
            "Parking lot",
            "Cars"
        ]
    },
    {
        title: "\"How Can I Help\" App",
        ongoing: false,
        complete: true,
        course: "Software Design (CIS 3296)",
        dates: [
            {
                start: new Date(2022, 4),
                end: new Date(2022, 3)
            }
        ],
        links: [
            {
                name: "GitHub",
                url: "https://github.com/cis3296s22/howcanihelp"
            }
        ],
        description: "This app is about helping people with services through a mobile application. Users can either request services/items or advertise them through the marketplace, with additional visual assistance using Google Maps SDK and options for disability or special needs.",
        skills: [
            "Java",
            "Android Studio",
            "XML",
            "Google Firebase",
            "Google Maps SDK (integration)",
            "Design patterns",
            "Object-oriented programming"
        ],
        query: [
            "Volunteering",
            "Happy people"
        ]
    },
    {
        title: "Musical Genre Lyrics Predictor",
        ongoing: false,
        complete: true,
        course: "Principles of Data Science (CIS 3715)",
        dates: [
            {
                start: new Date(2022, 3),
                end: new Date(2022, 2)
            }
        ],
        links: [
            {
                name: "GitHub",
                url: "https://github.com/stephull/python-music-genre-predictor"
            }
        ],
        description: "This is an algorithm I made to predict what musical genres can be detected based on lyrical content using data science techniques.",
        skills: [
            "Python",
            "Jupyter Notebook",
            "pandas",
            "NumPy",
            "scikit-learn",
            "Data science"
        ],
        query: [
            "Music",
            "Vocabulary"
        ]
    }
]

export const PROJECTS_PERSONAL_TEXT = [
    {
        title: "Korean Building Blocks",
        ongoing: true,
        complete: false,
        purpose: "Independent Project",
        dates: [
            {
                start: new Date(2022, 5),
                end: new Date(2022, 7)
            },
            {
                start: new Date(2023, 5),
                end: null
            }
        ],
        links: [
            {
                name: "Website",
                url: "https://korean-building-blocks.stephull.com"
            },
            {
                name: "GitHub",
                url: "https://github.com/stephull/korean-building-blocks"
            }
        ],
        description: "Simple website to help users learn Korean words using building-block style game",
        skills: [
            "Angular.js",
            "React.js (previously)",
            "Node.js",
            "Spring Boot",
            "Photoshop/Illustrator"
        ],
        query: [
            "Korea",
            "Toy blocks"
        ]
    },
    {
        title: "Personal Website (Stephull.com)",
        ongoing: true,
        complete: false,
        purpose: "Personal Portfolio",
        dates: [
            {
                start: new Date(2023, 3),
                end: null
            }
        ],
        links: [
            {
                name: "Website",
                url: "https://www.stephull.com"
            },
            {
                name: "GitHub",
                url: "https://github.com/stephull/stephull-com"
            }  
        ],
        description: "My soon-to-be official personal website.",
        skills: [
            "React.js",
            "Node.js",
            "Babel",
            "Webpack",
            "AWS Amplify",
            "AWS S3",
            "AWS CloudFront",
            "AWS API Gateway",
            "AWS DynamoDB",
            "AWS Route 53"
        ],
        query: [
            "Portfolio",
            "Happy people"
        ]
    },
    {
        title: "YouTube Audio Downloader",
        ongoing: false,
        complete: true,
        purpose: "Independent Project",
        dates: [
            {
                start: new Date(2022, 6),
                end: new Date(2022, 7)
            }
        ],
        links: [
            {
                name: "GitHub",
                url: "https://github.com/stephull/youtube-audio-downloader"
            }
        ],
        description: "Python-based program that utilizes open-source youtube-dl library to download YouTube audio with a better user interface",
        skills: [
            "Python",
            "Git Bash",
            "Tkinter GUI"
        ],
        query: [
            "YouTube",
            "Listening"
        ]
    },
    {
        title: "Minesweeper Clone Game",
        ongoing: false,
        complete: false,
        purpose: "Independent Project",
        dates: [
            {
                start: new Date(2021, 6),
                end: new Date(2021, 7)
            }
        ],
        links: [
            {
                name: "GitHub",
                url: "https://github.com/stephull/minesweeper-game"
            }
        ],
        description: "My first personal project, a simple and not-so-amazing replica of Minesweeper",
        skills: [
            "Java",
            "Java SWING GUI",
            "Algorithms",
            "Photoshop/Illustrator"
        ],
        query: [
            "Puzzle games",
            "Bombs"
        ]
    },
    {
        // :-)
        title: "CodePen.io Designs (Portfolio)",
        ongoing: false,
        complete: true,
        purpose: "Independent projects",
        dates: [
            {
                start: new Date(2021, 5),
                end: new Date(2021, 4)
            }
        ],
        links: [
            {
                name: "FreeCodeCamp certification",
                url: "https://www.freecodecamp.org/certification/stephull/responsive-web-design"
            },
            {
                name: "GitHub",
                url: "https://github.com/stephull/old-codepen-designs",
            }
        ],
        description: "An assortment of small web design projects from FreeCodeCamp.com",
        skills: [
            "HTML",
            "CSS"
        ],
        query: [
            "Web design",
            "HTML"
        ]
    }
];