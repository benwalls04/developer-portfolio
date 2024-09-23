import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Digital Weightlifing Coach',
        description: 'I developed a full stack web-application to assist with my favorite hobby - weightlifting. I used my prior knowledge of optimal routines / techniques to write an algorithm that generates a science-based and personalized weightlifting routine. Then, I connected a React frontend and MongoDB database to allow users to visualize their routine and track their data over time. It is hosted on AWS, and has been validated by 50+ of my personal connections who consider weightlifting to be a noteable hobby.',
        tools: ['JavaScript', 'React', 'Express', 'Node JS', 'MongoDB', 'AWS Elastic Beanstalk', 'AWS EC2', 'AWS CloudFront', 'AWS S3'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
        url: "https://more-weight.net/"
    },
    {
        id: 2,
        name: 'AI Powered Spotify Playlist Generator',
        description: "Me and my team built an application that creates a playlist on Spotify that fits a mood selected by the user. I integrated the OAuth 2.0 authentication to retrieve user data and all neccesary permissions to make API calls with their data. Afterwards, I trained a neural network that classifies tracks by mood using various track metrics provided by the Spotify API. This allows the user to select their favorite playlist, filter it to a mood of their choosing, and put this filtered playlist on their account.",
        tools: ['Python', 'PyTorch', 'TensorFlow', 'Flask', 'Spotify API', 'OAuth 2.0'],
        role: 'AI / Backend Developer',
        code: '',
        demo: '',
        image: crefin,
        url: "https://github.com/benwalls04/Tune_Flow"
    },
    {
        id: 3,
        name: 'Bugs World Compiler',
        description: 'My partner and I developed a compiler for a simple programming language called Bugs World. We began by creating a tokenizer to extract and store all the keywords from the program into a list. Next, we defined a set of parsing rules to interpret these tokens. We then implemented recursive descent parsing to generate executable code. This code was run on a Linux server, where bugs in the program could move, infect, and transform. The actions of the bugs were visualized using a Java GUI.',
        tools: ['Java', 'GUI', 'Linux', 'Tokenization', 'Parsing', 'Grammer Definition', 'Git', 'GitHub'],
        code: '',
        role: 'Compiler Developer',
        demo: '',
        image: realEstate,
        url: "https://github.com/benwalls04/BugsWorldParser"
    },
    {
        id: 4,
        name: 'Word Cloud Generator',
        description: "My partner and I developed a Java program to visualize text data as a word cloud. The program reads words from a text file, displaying the most frequent words in a cloud where they are sorted alphabetically. We implemented a feature to adjust the size of each word based on its frequency. To achieve this, we utilized various data structures, including maps, sets, and queues, along with sorting algorithms.",
        tools: ['Java', 'Data Structures', 'Algorithms', 'HTML', 'CSS', 'Git', 'GitHub'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Java Developer',
        url: "https://github.com/benwalls04/CloudGenerator"
    }, 
    {
        id: 4,
        name: 'Minesweeper',
        description: "I led the development of a Minesweeper replica with the MATLAB GUI, focusing on best engineering practices throughout the process. To ensure our game aligned with user needs, I conducted a series of agile research, interviews, and analysis cycles. Additionally, I documented the entire development process, which enabled our team to draw informed conclusions and effectively present our product both in writing and verbally",
        tools: ['MATLAB', 'GUI', 'Game Design'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Game Designer',
        url: ""
    }, 

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },