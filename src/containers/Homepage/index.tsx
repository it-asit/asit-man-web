import Button from '@/components/Button';
import City from '@/components/City';
import Light from '@/components/Light';
import Logo from '@/components/Logo';
import styles from './styles.module.css';

const Homepage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Light />
      </div>
      <Button />
      <City />
    </section>
  );
};

export default Homepage;
