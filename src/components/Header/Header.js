import logo from '../../assets/logo.svg';
import sun from '../../assets/icon-sun.svg';
import moon from '../../assets/icon-moon.svg';
import avatar from '../../assets/eastwood.jpg';
import styles from './Header.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/invoices';

const Header = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => state.invoices);

  useEffect(() => {
    darkTheme
      ? (document.body.className = '')
      : (document.body.className = 'light');
  }, [darkTheme]);

  return (
    <header className={styles.container}>
      <div className={styles.logoBox}>
        <img src={logo} alt='logo' className={styles.logo} />
      </div>
      <div
        onClick={() => dispatch(changeTheme())}
        className={styles.themeToggler}
      >
        <img src={darkTheme ? sun : moon} alt='toggle theme' />
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt='user avatar' className='picture' />
      </div>
    </header>
  );
};

export default Header;
