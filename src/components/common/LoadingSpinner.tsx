import styles from '../../utils/styles/LoadingSpinner.module.scss';

function LoadingSpinner() {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.loading}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default LoadingSpinner;
