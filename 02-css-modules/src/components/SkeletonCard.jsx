import styles from './SkeletonCard.module.css'; // Estilos do esqueleto

/**
 * Placeholder visual usado enquanto os dados carregam.
 * Mantém a estrutura do ProductCard para evitar “layout shift”.
 */


const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard} aria-hidden="true">
      <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
      <div className={styles.skeletonContent}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
        <div className={styles.skeletonFooter}>
          <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
          <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        </div>
        <div className={`${styles.skeleton} ${styles.skeletonButton}`}></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
