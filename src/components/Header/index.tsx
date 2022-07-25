import Logo from '../../assets/Logo.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt='' />
      </header>
    </>
  );
}
