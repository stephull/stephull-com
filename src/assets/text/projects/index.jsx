import { s3TestPic } from "../../../envConfig";

export const PROJECT_PAGE_TEXT = [
    //
];

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
        sub1: "For Projects in Computer Science (CIS 4398)",
        sub2: "09/2022 - 12/2022",
        link: "https://github.com/Capstone-Projects-2022-Fall/parking-spot-detector-api",
        picture: s3TestPic,
        description: "Software program that specializes in helping users navigate and easily access open parking areas through a mobile application, with image recognition software to indicate available areas detected from registered camera units.",
        skills: [
            "Node.js",
            "React Native",
            "React.js",
            "MongoDB",
            "Postman",
            "AWS (Elastic Beanstalk, S3)"
        ]
    },
    {
        title: "\"How Can I Help\" App",
        ongoing: false,
        complete: true,
        sub1: "For Software Design (CIS 3296)",
        sub2: "04/2022 - 05/2022",
        link: "https://github.com/cis3296s22/howcanihelp",
        picture: s3TestPic,
        description: "This app is about helping people with services through a mobile application. Users can either request services/items or advertise them through the marketplace, with additional visual assistance using Google Maps SDK and options for disability or special needs.",
        skills: [
            "Java",
            "Android Studio",
            "XML",
            "Google Firebase",
            "Google Maps SDK (integration)",
            "Design patterns",
            "Object-oriented programming"
        ]
    },
    {
        title: "Musical Genre Lyrics Predictor",
        ongoing: false,
        complete: true,
        sub1: "For Principles of Data Science (CIS 3715)",
        sub2: "03/2022 - 04/2022",
        link: "https://github.com/stephull/python-music-genre-predictor",
        picture: s3TestPic,
        description: "This is an algorithm I made to predict what musical genres can be detected based on lyrical content using data science techniques.",
        skills: [
            "Python",
            "Jupyter Notebook",
            "pandas",
            "NumPy",
            "scikit-learn",
            "Data science"
        ]
    }
]

export const PROJECTS_PERSONAL_TEXT = [
    {
        title: "Personal Website (Stephull.com)",
        ongoing: true,
        complete: false,
        sub: "04/2023 - Present",
        link: "https://www.stephull.com",
        picture: s3TestPic,
        description: "My soon-to-be official personal website.",
        skills: [
            "React.js",
            "Node.js",
            "AWS Amplify (CloudFormation, DynamoDB, S3)",
            "Babel",
            "Webpack",
            "User interface"
        ]
    },
    {
        title: "Korean Building Blocks",
        ongoing: false,
        complete: false,
        sub: "07/2022 - 08/2022, TBA",
        link: "https://github.com/stephull/korean-building-blocks",
        picture: s3TestPic,
        description: "Simple website to help users learn Korean words using building-block style game",
        skills: [
            "React.js",
            "Node.js",
            "Spring Boot",
            "Photoshop/Illustrator"
        ]
    },
    {
        title: "Minesweeper Clone Game",
        ongoing: false,
        complete: false,
        sub: "07/2021 - 08/2021",
        link: "https://github.com/stephull/minesweeper-game",
        picture: s3TestPic,
        description: "My first personal project, a simple and not-so-amazing replica of Minesweeper",
        skills: [
            "Java",
            "Java SWING GUI",
            "MySQL",
            "Algorithms",
            "Photoshop/Illustrator"
        ]
    }
];