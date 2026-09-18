export interface Award {
  title: string;
  issuer: string;
  date: string;
  desc: string;
}

export const awards: Award[] = [
  {
    title: "Character Mastery Certificate",
    issuer: "Issued by CAKCCIS · Associated with The Superior University",
    date: "Sep 2024",
    desc: "Awarded for demonstration of leadership, personal integrity, work ethics, and active civic responsibility within the university program.",
  },
  {
    title: "Half Scholarship Award",
    issuer: "Issued by The Superior University",
    date: "Jul 2024",
    desc: "Acquired a 50% tuition waiver merit scholarship based on achieving 923/1200 marks in Intermediate exams (ICS).",
  },
  {
    title: "Full Scholarship Award",
    issuer: "Issued by Superior College",
    date: "Sep 2022",
    desc: "Awarded full academic scholarship for higher education foundations based on matriculation performance, scoring 1006/1100 marks.",
  },
];
