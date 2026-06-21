import styles from './InfoChip.module.css';

export default function InfoChip({ text }) {
  return (
    <div className={styles.chip}>
      {text}
    </div>
  );
}
