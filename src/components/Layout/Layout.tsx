import { Outlet } from 'react-router-dom';

import { API_INFO } from '../../utils/constants/constants';
import styles from '../../utils/styles/Layout.module.scss';

function Layout() {
	const { OWNER, REPO } = API_INFO;

	return (
		<div className={styles.header}>
			<header>
				<h1>
					{OWNER} / {REPO}
				</h1>
			</header>
			<Outlet />
		</div>
	);
}
export default Layout;
