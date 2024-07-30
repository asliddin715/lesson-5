// pages/about.js
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <li><Link href="/teacher">Teacher</Link></li>
        <li><Link href="/student">Student</Link></li>
      </ul>
    </div>
  );
};

export default About;
