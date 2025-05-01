// Import your project images
import rex_image from '../assets/RexTunes.png';
import genetic_image from '../assets/Rosenbrock-Elitism.png';
import sdn_image from '../assets/sdn-2.png';
import sdn_image_2 from '../assets/sdn_vs_trad.png';
import web_rake_image from '../assets/web_rake_logo.png';
import ga_progress from "../assets/ga_progress.png"
import sg_got_lots from "../assets/SGGotLotsMeh.png"

// Central projects data repository
const projectsData = [
  {
    id: "network-attack",
    title: "Network Attack Detection System",
    description: "Software Defined Networking based network attack detection system.",
    longDescription: `
      This project uses Software Defined Networking (SDN) to integrate with Snort and Machine Learning models to detect network attacks, in this project we primarily focused on Distributed Denial of Service (DDoS) attacks.
      The whole project was built around the Ryu SDN controller, which uses the OpenFlow protocol to communicate with switches. The Ryu controller is a python-based SDN controller that provides a set of APIs to manage the network devices. 
      The Ryu controller receives information from the detection system which is either Snort or the trained machine learning model, from there if an alert is raised by the detection system, it will use the OpenFlow protocol to send instructions to the switches to drop the malicious packets.

      In order to run tests and develop the project, the team used Mininet which is a network emulator that allowed us to create network topologies with switches and hosts.
      For the Machine Learning Model, the team used data that was generated locally using the Scapy library. The data was generated using a script that created packets with different protocols and headers. The data was then used to train the model using the Scikit-learn library.

      The whole project was developed as my final year project in Temasek Polytechnic. This project was also developed with the idea of SDN potentially being added into the curriculum in the future, hence lab-sheets and virtual machines were made as well.

      The project was developed by a team of 4 members, including myself. I was the project lead and was respoonsible for the overall architecture of the project, where I had to setup the test environment with Mininet working and a basic Ryu controller running for my groupmates to build on. I was also responsible for the development of the Snort and Machine Learning integrated solution.
      The project was developed over 6 months and was presented at the Temasek Polytechnic InfoTech day 2023. 

    `,
    challenges: [
      "Integration of multiple technologies (SDN, ML, SNORT)",
      "Reducing false positives while maintaining high detection rates",
    ],
    technologies: ["Python", "Scikit-learn", "Networking", "Snort","Ryu"],
    features: [
      "Real-time traffic analysis",
      "Machine learning-based anomaly detection",
      "Customizable alert thresholds",
      "Flexible architecture for easy integration with other tools"
    ],
    image: sdn_image,
    gallery: [sdn_image,sdn_image_2], // Add more images when available
    githubLink: "",
    demoLink: "",
    featured: true,
    category: "Security",
    year: 2022-2023
  },
  {
    id: "genetic-algorithms",
    title: "Applications in Genetic Algorithms",
    description: "A project implementing genetic algorithms for optimization problems, showcasing the power of evolutionary computation.",
    longDescription: `
      This project focuses on the implementation of Genetic Algorithms (GAs) for solving optimization problems. Genetic Algorithms are a class of optimization algorithms inspired by the process of natural selection. They are particularly useful for solving complex problems where traditional optimization methods may struggle.
      The project includes the use of different selection methods, crossover operators and mutation strategies that aim to evolve a population of parameters towards an optimal solution.

      Genetic Algorithms (GA) are a subset of evolutionary algorithms that follow the theory of evolution where the fittest individuals “procreate” to create fitter offsprings in the next generation. They are generally used to find approximate solutions to optimsation and search problems. GAs can be broken down into 5 main phases.

1.	Initialisation, this phase is where an initial population is generated. Also known as the first generation.
2.	Fitness, this phase is where a fitness function is created to determine the fitness of each individual within the generation.
3.	Selection, this phase is when the fittest individuals are selected from the generation for the crossover phase.
4.	Crossover, this is where the fittest individuals undergo a crossover with another individual to create a child with characteristics from both parents.
5.	Mutation, this is where newly created children will have a chance to undergo a mutation where the genes are changed at random.


Using this knowledge, I was tasked to create applications that find optimal solutions in problems such as the Rosenbrock function and the Rastrigin function. 
These problems are known as optimization problems where there are a large number of solutions and the objective is to find the optimal solution among the solution space. These solution spaces usually scale with the dimensions of the problem or the number of inputs. As the solution space increases, the applications need to be optimized with larger population sizes, more generations and perhaps introducing new concepts that may help improve the efficiency of the application.
    `,
    challenges: [
      "Understanding the intricacies of genetic algorithms",
      "researching and implementing various selection methods",
      "researching and implementing various crossover and mutation operators",
    ],
    technologies: ["Python", "Genetic Algorithms", "Optimization", "NumPy", "Matplotlib"],
    features: [
      "Elitism and tournament selection methods",
      "Linear crossover and uniform crossover",
    ],
    image: genetic_image,
    gallery: [genetic_image], // Add more images when available
    githubLink: "https://github.com/ParryPee/GeneticAlgo",
    demoLink: "",
    featured: false,
    category: "Algorithms",
    year: 2022-2023
  },
  {
    id: "rextunes",
    title: "RexTunes: A Discord Bot",
    description: "A simple discord bot written in Python with the ability to play music.",
    longDescription: `
      RexTunes is a feature-rich Discord bot that enhances the music listening experience
      within Discord servers. Built with Python and the Discord.py library, RexTunes allows
      users to play music from Youtube and Spotify playlists.
      
      The bot supports queue management, playback controls, and advanced search features.
      It can handle multiple servers simultaneously and maintains separate queues for each.
      
    `,
    challenges: [
      "Handling Discord's rate limits and API changes",
      "Handling Youtube API restrictions",
      "Implementing a robust queue system",
      "Event loops and async functions"
    ],
    technologies: ["Python", "Discord API", "FFmpeg", "YouTube API", "AsyncIO"],
    features: [
      "Youtube Playback",
      "Advanced queue management",
      "User-friendly commands",
      "Customizable server settings",
      "Spotify playlist support"
    ],
    image: rex_image,
    gallery: [rex_image], // Add more images when available
    githubLink: "https://github.com/ParryPee/RexTunes",
    demoLink: "",
    featured: true,
    category: "Bot",
    year: 2025
  },
  {
    id: "webrake",
    title: "WebRake: A Web Scraping Tool",
    description: "A simple web scraping tool written in Python to extract data from websites with customizable settings.",
    longDescription: `
    This project is a web scraping tool that is capable of scraping or gathering data from websites. It is built using Python and the BeautifulSoup library for parsing HTML and XML data.
    The tool is designed to be modular and extensible, allowing users to easily add new parsers or modify existing ones. It supports multiple request types, including GET and POST requests, and allows users to specify custom headers, cookies, and other request parameters.

      
    `,
    challenges: [
      "Handling different website structures and formats",
      "Implementing error handling and retries for failed requests",
      "Modularizing the code for easy extension"
    ],
    technologies: ["Python", "BeautifulSoup", "Requests"],
    features: [
      "Robust HTTP requesting",
      "Multiple parser types",
      "Modular architecture",
      "Configurable request parameters"
    ],
    image: web_rake_image,
    gallery: [web_rake_image], // Add more images when available
    githubLink: "https://github.com/ParryPee/web_rake",
    demoLink: "",
    featured: false,
    category: "Web Development",
    year: 2025
  },
  {
    id: "2048_solver",
    title: "2048: Genetic Algorithms",
    description: "A project inspired by CS1010X to find optimal heuristic weights for 2048.",
    longDescription: `
    2048 is a game that typically involves a 4x4 grid where each start state comes with two randomly generated tiles of either a 4 or a 2. Players then typically input 1 of 4 moves, up, down, left or right to indicate the direction to merge the tiles, TILES CAN ONLY BE MERGED IF THEY ARE OF THE SAME VALUE. After every move, another randomly generated 4 or 2 is created in an empty tile.

    The objective of this project was to use Genetic Algorithms to find an optimal set of weights used to determine the "score" of a given game board. This score is then used to determine which moves should be made.

    The set of weights I decided to use after some research on the internet was:
    1.Number of empty tiles, through testing and research. This turned out to be the most significant weight. You will typically see a much higher weightage for this heuristic.
    2.Smaller differences for adjacent tiles, this metric calculates the actual physical difference between tiles in a row and column and returns the score as a penalty. Meaning that the higher the score the higher the difference between the tiles.
    3.Corner tiles, this weight prefers larger tiles in the corner. This was a weight based off a strategy that game veterans do where they tend to put the higher scored tiles in the corner to maximise the space on the board.
    4.Monotonocity, this weight prefers rows where the tiles increase and decrease in a consistent pattern. Eg. [2,4,8,16] versus [2,16,4,8].
    5.Smoothness, this calculates the how smooth the transitions are between actual tiles, ignoring ZERO(empty) tiles.

    Adjacent vs Smoothness:
  Example to Illustrate the Difference
  Consider this board:
      0    2    0    4
      0    0    0    0
      2    0    8    0
      0   16    0   32
Adjacent Tiles Calculation:

Will compute differences between all physically adjacent pairs (0-2, 2-0, 0-4, etc.)
Treats zeros as values when calculating differences (e.g., 0-2 = -2)
Penalizes scattered non-zero tiles with large differences between them

Smoothness Calculation:

Will only compare (2, 4) in the first row, (2, 8) in the third row, and (16, 32) in the fourth row
Ignores zeros completely, focusing on the transitions between actual tiles
Measures the "jaggedness" of the non-zero tile sequence

In the genetic algorithm, these two metrics work together but serve complementary purposes - the adjacent tile penalty helps guide tile placement while smoothness helps create mergeable sequences.

      
    `,
    challenges: [
      "Recreating game logic using Numpy",
      "Formulating genetic representation in the form of weights",
      "Creating selection and crossover operators"
    ],
    technologies: ["Python", "Genetic Algorithms","Numpy","Matplotlib", "Game"],
    features: [
      "Genetic Algorithms",
      "Customizable parameters",
      "Graphical outputs"
    ],
    image: ga_progress,
    gallery: [ga_progress], // Add more images when available
    githubLink: "https://github.com/ParryPee/2048Solver",
    demoLink: "",
    featured: true,
    category: "Algorithms",
    year: 2025
  },
  {
    id: "sg_carpark",
    title: "Sg Carpark lots checker",
    description: "A telegram bot that finds nearby carparks and returns their lots available.",
    longDescription: `
    A simple telegram bot that can be used to check for carpark lots nearby a certain location. It uses web_rake to scrape data from DataGov API for carpark lots availability along with OneMap API to convert the user input from a string to coordinates.
      
    Check it out in the demo link!
    `,
    challenges: [
      "Converting locations to coordinates",
      "Telegram bot API",
    ],
    technologies: ["Python", "Telegram API","Requests"],
    features: [
      "Realtime carpark data",
    ],
    image: sg_got_lots,
    gallery: [sg_got_lots], // Add more images when available
    githubLink: "https://github.com/ParryPee/CarparkLotsChecker",
    demoLink: "https://t.me/SGWhereGotLot_bot",
    featured: false,
    category: "Bot",
    year: 2025
  },
];

export default projectsData;