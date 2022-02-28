import logo from '../../assets/logo.svg';
import sun from '../../assets/icon-sun.svg';
import moon from '../../assets/icon-moon.svg';
import avatar from '../../assets/eastwood.jpg';
import styles from './Header.module.scss';

const Header = () => {
  const darkMode = true;
  return (
    <header className={styles.container}>
      <div className={styles.logoBox}>
        <img src={logo} alt='logo' className={styles.logo} />
      </div>
      <div
        onClick={() => console.log('change theme dispatch')}
        className={styles.themeToggler}
      >
        <img src={darkMode ? sun : moon} alt='toggle theme' />
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt='user avatar' className='picture' />
      </div>
    </header>
  );
};

export default Header;
