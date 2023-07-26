import styles from '../Styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <a href="" />
        <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="" />
      </div>
      <div className={styles.rightNav}>
        <div className={styles.user}>
          <a href="/">
            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" className={styles.userDp} />
          </a>
          <span>Hari</span>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Log Out</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
