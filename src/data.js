export const content = {
  en: {
    ui: {
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Hi, my name is',
        ctaWork: 'View my work',
        ctaContact: 'Get in touch',
      },
      sectionTitles: {
        about: 'About Me',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
      },
      about: {
        educationHeading: 'Education',
      },
      skills: {
        languagesHeading: 'Languages',
      },
      contact: {
        index: "05. What's next?",
        title: 'Get In Touch',
        text: "I'm always open to new opportunities, collaborations, and conversations. Whether you have a question or just want to say hi, my inbox is open.",
        cta: 'Say Hello',
      },
    },
    profile: {
      name: 'Sungok Woo',
      title: 'Full-Stack & Systems Developer',
      tagline: 'Computer Science student at UC Irvine building AI-powered products and low-level systems.',
      location: 'Irvine, CA',
      email: 'sogogi0201@gmail.com',
      phone: '(949) 933-9081',
      github: 'https://github.com/sogogii',
      linkedin: 'https://www.linkedin.com/in/sungok-woo-8189292b1/',
    },
    about: `I'm a Computer Science student at UC Irvine who enjoys working across the full stack and down to the metal. I've shipped a production tutoring platform spanning web and mobile, integrated the Anthropic Claude API for AI matching and report generation, and built systems-level software in C including a UNIX shell, a custom memory allocator, and a multi-threaded TCP server. I like turning hard problems into clean, reliable software.`,
    experience: [
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
    ],
    projects: [
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
    ],
    education: [
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
    ],
    skills: {
      Languages: ['C / C++', 'Java', 'Python', 'JavaScript', 'HTML / CSS', 'SQL'],
      'Frameworks & Libraries': ['React', 'React Native', 'Node.js', 'Spring Boot', 'Flask', 'Bootstrap'],
      'Tools & Platforms': ['Git', 'MySQL', 'AWS', 'Anthropic Claude API', 'Tomcat', 'Maven'],
    },
    spokenLanguages: [
      { name: 'Korean', level: 'Native' },
      { name: 'English', level: 'Professional' },
      { name: 'French', level: 'Intermediate' },
    ],
  },

  ko: {
    ui: {
      nav: {
        about: '소개',
        experience: '경력',
        projects: '프로젝트',
        skills: '기술',
        contact: '연락처',
      },
      hero: {
        ctaWork: '작업물 보기',
        ctaContact: '연락하기',
      },
      sectionTitles: {
        about: '소개',
        experience: '경력',
        projects: '프로젝트',
        skills: '기술',
      },
      about: {
        educationHeading: '학력',
      },
      skills: {
        languagesHeading: '구사 언어',
      },
      contact: {
        text: '새로운 기회와 협업, 그리고 대화에는 언제나 열려 있습니다. 궁금하신 점이 있거나 가볍게 인사를 건네고 싶으시다면 언제든 편하게 메일 주세요.',
        cta: '연락하기',
      },
    },
    profile: {
      name: 'Sungok Woo',
      title: '풀스택 & 시스템 개발자',
      tagline: 'UC 어바인에서 컴퓨터공학을 전공하며 AI 기반 제품과 로우레벨 시스템을 만들고 있습니다.',
      location: '어바인, 캘리포니아',
      email: 'sogogi0201@gmail.com',
      phone: '(949) 933-9081',
      github: 'https://github.com/sogogii',
      linkedin: 'https://www.linkedin.com/in/sungok-woo-8189292b1/',
    },
    about: 'UC 어바인 컴퓨터공학과에 재학 중이며, 프론트엔드부터 하드웨어에 가까운 로우레벨 코드까지 폭넓게 다루는 것을 좋아합니다. 웹과 모바일을 아우르는 실서비스 튜터링 플랫폼을 직접 출시했고, Anthropic Claude API를 활용한 AI 매칭 및 리포트 생성 기능을 구축했으며, UNIX 셸과 커스텀 메모리 할당자, 멀티스레드 TCP 서버 등 C 언어 기반 시스템 소프트웨어도 만들어봤습니다. 어려운 문제를 깔끔하고 안정적인 소프트웨어로 풀어내는 과정을 즐깁니다.',
    experience: [
      {
        role: '리드 개발자',
        org: 'Growth Tutoring Platform',
        period: '2025년 11월 - 현재',
        tech: ['React', 'Spring Boot', 'MySQL', 'React Native', 'Anthropic Claude API', 'Stripe', 'AWS'],
        points: [
          '실시간 메시징, Stripe 결제 처리, Amazon Chime SDK 화상 수업 기능을 갖춘 웹·모바일(React Native/Expo) 풀스택 튜터링 플랫폼을 구축했습니다.',
          'Anthropic Claude API를 활용해 학생의 등록 정보를 바탕으로 튜터를 매칭하고, 매칭 점수와 자연어 설명을 함께 제공하는 AI 매칭 시스템을 설계했습니다.',
          '튜터가 입력한 수업 내용을 바탕으로 Claude가 학부모용 진행 리포트를 자동 작성하는 기능을 개발했으며, 구독 기반 접근 제어와 리워드 자동 감지 로직도 함께 구현했습니다.',
          'Stella Zhang New Venture Competition과 Butterworth Competition 준결승에 진출해 투자자 및 기술 심사위원들에게 플랫폼의 AI 생태계와 비즈니스 모델을 발표했습니다.',
        ],
      },
    ],
    projects: [
      {
        name: '정보 검색 엔진 (Information Retrieval Search Engine)',
        period: '2026년 1월 - 2026년 3월',
        tech: ['Python', 'Flask', 'NLTK', 'BeautifulSoup', 'Tkinter', 'JSON'],
        points: [
          'UCI 학내 도메인을 대상으로 정중성 제어, 크롤러 트랩 탐지, 유사 중복 페이지 필터링 기능을 갖춘 멀티스레드 웹 크롤러를 구축했습니다.',
          'Porter 어간 추출, 바이그램 인덱싱, 주요 태그 가중치를 적용한 디스크 기반 역색인을 구현했습니다.',
          '코사인 정규화와 바이그램 쿼리 가중치, URL 페널티를 적용한 TF-IDF 검색 기능을 구현했습니다.',
        ],
      },
      {
        name: '로우레벨 시스템 프로그래밍',
        period: '2025년 9월 - 2025년 12월',
        tech: ['C', 'UNIX', 'Pthreads', 'TCP Sockets', 'Valgrind', 'GDB', 'Make'],
        points: [
          'fork/execvp를 활용해 다단계 파이프라인, 입출력 리다이렉션, 백그라운드 작업 제어, 시그널 처리를 지원하는 UNIX 셸을 구현했습니다.',
          '분리 프리 리스트, 경계 태그 병합, 블록 분할 기법을 적용한 커스텀 메모리 할당자를 구현했습니다.',
          '뮤텍스 스레딩, 읽기·쓰기 락, 세마포어 기반 생산자-소비자 모델까지 세 가지 동시성 모델로 멀티스레드 TCP 서버를 설계했습니다.',
        ],
      },
    ],
    education: [
      {
        school: 'University of California, Irvine',
        location: '어바인, 캘리포니아',
        major: '컴퓨터공학 학사',
        period: '2024년 9월 - 2026년 9월 졸업 예정',
        coursework: ['데이터 관리 (SQL)', '알고리즘 분석', '컴퓨터 구조', '머신러닝', '양자 컴퓨팅', '정보 검색'],
      },
      {
        school: 'Orange Coast College',
        location: '코스타메사, 캘리포니아',
        major: '컴퓨터공학',
        period: '2022년 8월 - 2024년 5월',
        coursework: ['자바 프로그래밍', 'C++ 프로그래밍', '자료구조', '버전 관리'],
      },
    ],
    skills: {
      '프로그래밍 언어': ['C / C++', 'Java', 'Python', 'JavaScript', 'HTML / CSS', 'SQL'],
      '프레임워크 & 라이브러리': ['React', 'React Native', 'Node.js', 'Spring Boot', 'Flask', 'Bootstrap'],
      '도구 & 플랫폼': ['Git', 'MySQL', 'AWS', 'Anthropic Claude API', 'Tomcat', 'Maven'],
    },
    spokenLanguages: [
      { name: '한국어', level: '모국어' },
      { name: '영어', level: '업무 가능' },
      { name: '프랑스어', level: '중급' },
    ],
  },
}
