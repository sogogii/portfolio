export const profile = {
  name: 'Sungok Woo',
  title: 'Full-Stack & Systems Developer',
  tagline: 'Computer Science student at UC Irvine building AI-powered products and low-level systems.',
  location: 'Irvine, CA',
  email: 'sogogi0201@gmail.com',
  phone: '(949) 933-9081',
  github: 'https://github.com/sogogii',
  linkedin: 'https://www.linkedin.com/in/sungok-woo-8189292b1/',
}

export const about = `I'm a Computer Science student at UC Irvine who enjoys working across the full stack and down to the metal. I've shipped a production tutoring platform spanning web and mobile, integrated the Anthropic Claude API for AI matching and report generation, and built systems-level software in C including a UNIX shell, a custom memory allocator, and a multi-threaded TCP server. I like turning hard problems into clean, reliable software.`

export const experience = [
  {
    role: 'Lead Developer',
    org: 'Growth Tutoring Platform',
    period: 'Nov 2025 - Present',
    tech: ['React', 'Spring Boot', 'MySQL', 'React Native', 'Anthropic Claude API', 'Stripe', 'AWS'],
    points: [
      'Built a full-stack tutoring platform across web and mobile (React Native/Expo) with real-time messaging, Stripe payment processing, and Amazon Chime SDK video sessions.',
      'Engineered an AI tutor matching system using the Anthropic Claude API, ranking tutors against student intake profiles and returning match scores with natural-language explanations.',
      'Developed an AI Progress Report feature where Claude generates professional parent-facing session narratives from tutor inputs, with subscription-based gating and automated reward detection.',
      'Advanced to the semi-finals of the Stella Zhang New Venture Competition and Butterworth Competition, presenting the platform’s AI ecosystem and business model to investors and technical judges.',
    ],
  },
]

export const projects = [
  {
    name: 'Information Retrieval Search Engine',
    period: 'Jan 2026 - Mar 2026',
    tech: ['Python', 'Flask', 'NLTK', 'BeautifulSoup', 'Tkinter', 'JSON'],
    points: [
      'Built a multithreaded web crawler targeting UCI academic domains with politeness enforcement, trap detection, and near-duplicate filtering.',
      'Developed a disk-based inverted index with Porter stemming, bigram indexing, and important tag-boosting.',
      'Implemented TF-IDF search with cosine normalization, bigram query boosting, and URL penalties.',
    ],
  },
  {
    name: 'Low-Level System Programming',
    period: 'Sep 2025 - Dec 2025',
    tech: ['C', 'UNIX', 'Pthreads', 'TCP Sockets', 'Valgrind', 'GDB', 'Make'],
    points: [
      'Built a UNIX shell supporting multi-stage pipelines, I/O redirection, background job control, and signal handling using fork/execvp.',
      'Implemented a custom memory allocator using segregated free lists, boundary-tag coalescing, and block splitting.',
      'Designed a multi-threaded TCP server across three concurrency models: mutex threading, reader-writer locks, and producer-consumer with semaphores.',
    ],
  },
]

export const education = [
  {
    school: 'University of California, Irvine',
    location: 'Irvine, CA',
    major: 'B.S. Computer Science',
    period: 'Sep 2024 - Expected Sep 2026',
    coursework: ['Data Management (SQL)', 'Algorithm Analysis', 'Computer Organization', 'Machine Learning', 'Quantum Computing', 'Information Retrieval'],
  },
  {
    school: 'Orange Coast College',
    location: 'Costa Mesa, CA',
    major: 'Computer Science',
    period: 'Aug 2022 - May 2024',
    coursework: ['Java Programming', 'C++ Programming', 'Data Structures', 'Version Control'],
  },
]

export const skills = {
  Languages: ['C / C++', 'Java', 'Python', 'JavaScript', 'HTML / CSS', 'SQL'],
  'Frameworks & Libraries': ['React', 'React Native', 'Node.js', 'Spring Boot', 'Flask', 'Bootstrap'],
  'Tools & Platforms': ['Git', 'MySQL', 'AWS', 'Anthropic Claude API', 'Tomcat', 'Maven'],
}

export const spokenLanguages = [
  { name: 'Korean', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'French', level: 'Intermediate' },
]
