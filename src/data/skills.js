import { Braces, Cloud, Code2, Database, GitBranch, Network, Server } from 'lucide-react'

export const skillCategories = [
  { title: 'Programming languages', icon: Code2, skills: ['Java', 'Python', 'C', 'JavaScript'] },
  { title: 'Frontend', icon: Braces, skills: ['HTML5', 'CSS3', 'Bootstrap', 'React (foundational)'] },
  { title: 'Backend', icon: Server, skills: ['Spring Boot', 'REST APIs'] },
  { title: 'Databases', icon: Database, skills: ['SQL', 'MySQL'] },
  { title: 'Cloud & DevOps', icon: Cloud, skills: ['AWS fundamentals', 'Oracle Cloud Infrastructure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'] },
  { title: 'Tools & fundamentals', icon: GitBranch, skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'OOP', 'Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'], secondaryIcon: Network },
]
