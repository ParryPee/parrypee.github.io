// Import your project images
import rex_image from '../assets/RexTunes.png';
import genetic_image from '../assets/Rosenbrock-Elitism.png';
import sdn_image from '../assets/sdn-2.png';
import sdn_image_2 from '../assets/sdn_vs_trad.png';
import web_rake_image from '../assets/web_rake_logo.png';

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
    featured: true,
    category: "Optimisation and Algorithms",
    year: 2022-2023
  },
  {
    id: "rextunes",
    title: "RexTunes: A Discord Bot",
    description: "A simple discord bot written in Python with the ability to play music.",
    longDescription: `
      RexTunes is a feature-rich Discord bot that enhances the music listening experience
      within Discord servers. Built with Python and the Discord.py library, RexTunes allows
      users to play music from Youtube with plans to support other platforms in the future.
      
      The bot supports queue management, playback controls, and advanced search features.
      It can handle multiple servers simultaneously and maintains separate queues for each.
      
    `,
    challenges: [
      "Handling Discord's rate limits and API changes",
      "Handling Youtube API restrictions",
      "Implementing a robust queue system"
    ],
    technologies: ["Python", "Discord API", "FFmpeg", "YouTube API", "AsyncIO"],
    features: [
      "Youtube Playback",
      "Advanced queue management",
      "User-friendly commands",
      "Customizable server settings"
    ],
    image: rex_image,
    gallery: [rex_image], // Add more images when available
    githubLink: "https://github.com/ParryPee/RexTunes",
    demoLink: "",
    featured: true,
    category: "Bot Development",
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
];

export default projectsData;