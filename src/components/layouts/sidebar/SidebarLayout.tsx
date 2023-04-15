import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {
  HomeLink: string;
  AboutLink: string;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ HomeLink, AboutLink }) => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href={HomeLink}>
        <span>Home</span>
      </Link>
      <Link href={AboutLink}>
        <span>About</span>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
