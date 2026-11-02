import cx from 'classnames';
import Homepage from './containers/Homepage';
import styles from './App.module.css';

export default function App() {
  return (
    <main className={cx(styles.container, styles.animatedBackground)}>
      <Homepage />
    </main>
  );
}
