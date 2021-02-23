import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gabiqrm.png" alt="Gabriela Queiroz" />
      <div>
        <strong>Gabriela Queiroz</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1</p>
      </div>
    </div>
  );
}