import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src='/logo.png' width={120} height={68}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas/">Ninja Listing</Link>
    </nav>
);
}
 
export default Navbar;