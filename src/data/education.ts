export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  grade: string;
  desc: string;
  skills: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    school: "The Superior University, Lahore",
    dates: "2024 - 2028 (Expected)",
    grade: "CGPA: 3.50 / 4.00",
    desc: "Active study in theoretical and applied computer science. Core coursework includes programming paradigms, advanced data structures, optimization algorithms, operating systems, and relational databases. Working on academic systems, database schemas, and AI integrations.",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Discrete Mathematics"],
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Superior College, Lahore",
    dates: "2022 - 2024",
    grade: "Grade: A (923 / 1200)",
    desc: "Concentration in fundamental logic design, computer networks, and scientific mathematics. Gained foundational understanding of structured programming, logical flow structures, and basic computational systems.",
    skills: ["Physics", "Advanced Mathematics", "Logic Gate Theory", "Basic C Programming"],
  },
  {
    degree: "Matriculation (Computer Science)",
    school: "Government High School Awan Town, Lahore",
    dates: "2020 - 2022",
    grade: "Grade: A+ (1006 / 1100)",
    desc: "Primary introduction to computer components, files organization, DOS logic, and algebraic principles. Broad science education including physics, chemistry, and mathematics.",
    skills: ["DOS Command Line", "Office Automation Tools", "General Physics & Chemistry"],
  },
];
