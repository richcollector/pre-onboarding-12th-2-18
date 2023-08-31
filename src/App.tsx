import { Routes, Route } from 'react-router-dom';

import { ROUTES_PATH } from './utils/constants/constants';

import Main from './pages/MainPage';
import IssueList from './pages/IssueListPage';
import IssueDetail from './pages/IssueDetailPage';
import NotFound from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Routes>
			<Route path={ROUTES_PATH.MAIN} element={<Main />} />
			<Route element={<Layout />}>
				<Route path={ROUTES_PATH.ISSUELIST} element={<IssueList />} />
				<Route path={`${ROUTES_PATH.ISSUEDETAIL}/:id`} element={<IssueDetail />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
