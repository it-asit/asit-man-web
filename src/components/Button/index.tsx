import Heart from '../Heart';
import styles from './styles.module.css';

const Button = () => {
  return (
    <a
      href="https://www.thegreatcreativeshark.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <span>In emergency</span>
      <Heart />
    </a>
  );
};

export default Button;
