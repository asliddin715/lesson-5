// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/index">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
