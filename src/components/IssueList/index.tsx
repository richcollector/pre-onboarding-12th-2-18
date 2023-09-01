import { useEffect, useState, useRef, Fragment } from 'react';
import { getIssueList } from '../../api/Api';
import { IssueType } from '../../utils/types/Issue.interface';
import LoadingSpinner from '../common/LoadingSpinner';
import IssueItem from '../IssueItem';
import AdBanner from '../AdBanner';
// import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver';

function IssueList() {
	const [issues, setIssues] = useState<IssueType[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const observerRef = useRef<any>(null);

	useEffect(() => {
		getIssueList(currentPage)
			.then((issueList: any) => {
				setIssues(prevList => [...prevList, ...issueList]);
				setIsLoading(false);
			})
			.catch(error => {
				console.error(error);
			});
	}, [currentPage]);

	// useIntersectionObserver(observerRef, () => {
	// 	setCurrentPage(currentPage + 1);
	// });

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					setCurrentPage(prev => prev + 1);
				}
			},
			{ threshold: 1 },
		);
		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [issues]);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			<ul>
				{issues.map((item, index) => (
					<Fragment key={item.id}>
						<IssueItem item={item} />
						{(index + 1) % 4 === 0 && <AdBanner />}
					</Fragment>
				))}
			</ul>
			<div ref={observerRef}>
				<LoadingSpinner scroll />
			</div>
		</>
	);
}

export default IssueList;
