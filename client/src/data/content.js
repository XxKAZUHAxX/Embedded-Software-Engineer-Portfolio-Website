// ============================================================================
// Single source of truth for portfolio content.
// All data is real, sourced from Jade's brief. Project repo URLs are #TODO.
// ============================================================================

export const profile = {
  name: 'Jesryl Jade Lazaga',
  nickname: 'Jade',
  title: 'Embedded Software Engineer',
  tagline: 'I write firmware that talks to hardware — and recently, web apps that talk to users.',
  location: 'Philippines',
  email: 'jesryljade18@gmail.com',
  phone: '0969-169-8098',
  linkedin: 'https://www.linkedin.com/in/jesryl-jade-lazaga-b17742188',
  cv: '/cv.pdf',
};

// Boot lines printed in the hero serial monitor before the intro is typed.
export const bootLines = [
  '[ 0.000000] booting jade.os v1.0 ...',
  '[ 0.014213] init clocks ........... OK',
  '[ 0.028740] mount peripherals ..... OK',
  '[ 0.041902] uart0 @ 115200 8N1 .... OK',
  '[ 0.058311] load profile ......... DONE',
];

// Typed out char-by-char as a printf debug log in the hero.
export const heroLog = [
  'printf("Hi, I\'m Jade — Embedded Software Engineer.\\n");',
  'printf("Henny Penny | YenkoDev.\\n");',
  'printf("status: READY — let\'s build something.\\n");',
];

export const about = [
  "Hi, I'm Jade — an embedded software engineer based in the Philippines. I design and build systems around microcontrollers and embedded Linux, bridging the gap between hardware and software: from bare-metal firmware and bootloaders to full IoT deployments.",
  'At Henny Penny I work as a Software Engineer I (Embedded), writing low-level drivers, BSPs, and RTOS applications in C/C++, and shipping them through CI pipelines and Agile workflows. On the side, I freelance at YenkoDev doing hardware prototyping and firmware programming for clients.',
  "I'm also growing a second skill set in web development — Node.js, React, and the backend tooling that powers modern apps. This very site is part of that journey: hardware precision, applied to the web.",
];

// Skills grouped by domain. `group` keys drive the filter bar.
export const skillGroups = [
  {
    id: 'embedded',
    label: 'Embedded Core',
    category: 'Embedded',
    skills: ['C', 'C++', 'FreeRTOS', 'Embedded Linux', 'Bootloaders', 'BSPs'],
  },
  {
    id: 'hardware',
    label: 'MCUs & Hardware',
    category: 'Embedded',
    skills: ['ARM', 'AVR', 'EspressIf', 'NRF52', 'STM32'],
  },
  {
    id: 'debugger',
    label: 'Debuggers',
    category: 'Embedded',
    skills: ['JTAG', 'SWD', 'STLINK'],
  },
  {
    id: 'scripts',
    label: 'Scripting & Automation',
    category: 'Embedded',
    skills: ['Python', 'Bash', 'Shell scripting'],
  },
  {
    id: 'protocols',
    label: 'Protocols',
    category: 'Protocols',
    skills: [
      'UART',
      'SPI',
      'I2C',
      'I2S',
      'CAN',
      'RS232',
      'RS485',
      'LoRaWAN',
      'MQTT',
      'BLE',
      'WiFi',
      'USB',
    ],
  },
  {
    id: 'frontend',
    label: 'Web Frontend',
    category: 'Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'jQuery'],
  },
  {
    id: 'backend',
    label: 'Web Backend',
    category: 'Web',
    skills: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    id: 'software-tools',
    label: 'DevOps & Software Tools',
    category: 'Tools',
    skills: [
      'Git',
      'Docker',
      'ESP-IDF',
      'CMake',
      'Makefile',
      'Postman',
      'JIRA',
      'Confluence',
      'npm',
    ],
  },
  {
    id: 'hardware-tools',
    label: 'Hardware Tools',
    category: 'Tools',
    skills: ['Multimeters', 'Oscilloscopes', 'Logic Analyzers', 'Soldering'],
  },
];

// Filter tabs for the skills section.
export const skillFilters = ['All', 'Embedded', 'Protocols', 'Web', 'Tools'];

export const experience = [
  {
    role: 'Software Engineer I (Embedded)',
    org: 'Henny Penny',
    type: 'Full-Time',
    period: '2024 — Present',
    points: [
      'Develop C/C++ firmware: low-level drivers, bootloaders, and BSPs.',
      'Build on FreeRTOS and embedded Linux across MCU architectures.',
      'Ship through CI pipelines and testing frameworks in an Agile/Scrum team.',
      'Collaborate using Atlassian tools — JIRA, Confluence, and GitHub.',
    ],
  },
  {
    role: 'Embedded Systems Developer',
    org: 'YenkoDev',
    type: 'Freelance',
    period: 'Ongoing',
    points: [
      'Hardware prototyping and firmware programming for various clients.',
      'End-to-end builds from schematic concept to deployed firmware.',
    ],
  },
  {
    role: 'B.Eng. Electronics Technology',
    org: 'Technological University of the Philippines',
    type: 'Education',
    period: 'Graduated Oct 2024',
    points: ['Cum Laude.', 'Best in Thesis Award — vision-based illegal parking alert system.'],
  },
];

export const projects = [
  {
    title: 'Vision-Based Illegal Parking Alert System',
    category: 'Vision/AI',
    blurb:
      'Detects illegal parking in Damayan, Taytay (Rizal) using YOLOv8 object detection with ByteTrack multi-object tracking. Awarded Best in Thesis.',
    tags: ['YOLOv8', 'ByteTrack', 'Python', 'Computer Vision'],
    badge: 'Best in Thesis',
    repo: '#TODO',
    demo: null,
  },
  {
    title: 'Automated PWD Parking Assistance System',
    category: 'Vision/AI',
    blurb:
      'Reserves and monitors accessible parking for persons with disabilities using YOLOv8 detection and EasyOCR for live license-plate recognition.',
    tags: ['YOLOv8', 'EasyOCR', 'Python', 'OCR'],
    repo: 'https://github.com/XxKAZUHAxX/Automated-PWD-Parking-Assistance-System.git',
    demo: null,
  },
  {
    title: 'Power Consumption Meter with Cloud Logging',
    category: 'IoT',
    blurb:
      'Measures real-time power with a PZEM sensor on Arduino + ESP32, streaming readings to a cloud dashboard for remote energy monitoring.',
    tags: ['ESP32', 'Arduino', 'PZEM', 'Cloud', 'MQTT'],
    repo: 'https://github.com/XxKAZUHAxX/PZEM_DATA_LOGGER.git',
    demo: null,
  },
  {
    title: 'Hydroponics Growth Monitoring System',
    category: 'IoT',
    blurb:
      'Monitors plant health in a hydroponics setup using image processing to track growth and flag anomalies over time.',
    tags: ['Image Processing', 'Python', 'Sensors'],
    repo: '#TODO',
    demo: null,
  },
  {
    title: 'Motorbanca Monitoring Dashboard',
    category: 'IoT',
    blurb:
      'Tracks marine vessels (motorbanca) over long range using LoRaWAN telemetry visualized on a ThingsBoard dashboard.',
    tags: ['LoRaWAN', 'ThingsBoard', 'Telemetry', 'IoT'],
    repo: 'https://github.com/XxKAZUHAxX/motorbanca-tracking-system-using-lorawan.git',
    demo: null,
  },
];

export const projectFilters = ['All', 'Embedded', 'Vision/AI', 'IoT', 'Web'];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
