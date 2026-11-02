import { ComponentProps } from 'react';
import HeartSvg from './assets/herzbutton.svg';
import styles from './styles.module.css';

type Props = ComponentProps<'svg'>;

const Heart = ({ ...htmlProps }: Props) => {
  return <HeartSvg className={styles.container} {...htmlProps} />;
};

export default Heart;
