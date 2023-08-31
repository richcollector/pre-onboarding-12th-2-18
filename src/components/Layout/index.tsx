import { Outlet } from 'react-router-dom';

import { INFO } from '../../utils/constants/Info';
import styles from './Layout.module.scss';

function Layout() {
	const { OWNER, REPO } = INFO;

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
