import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIssueDetail } from '../../api/Api';
import { IssueType } from '../../utils/types/Issue.interface';
import ReactMarkdown from 'react-markdown';
import IssueItem from '../IssueItem';
import LoadingSpinner from '../common/LoadingSpinner';
import styles from './IssueDetail.module.scss';

function IssueDetail() {
	const [detail, setDetail] = useState<IssueType>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { issue_number } = useParams();

	const getIssueData = async () => {
		setIsLoading(true);
		try {
			const res = await getIssueDetail(Number(issue_number));
			setDetail(res.data);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (issue_number) {
			getIssueData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [issue_number]);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			{detail && (
				<>
					<div className={styles['detail-info']}>
						<img src={detail.user?.avatar_url} alt="user-avatar-img" />
						<IssueItem item={detail} key={detail.id} />
					</div>
					<div className={styles['markdown-container']}>
						<ReactMarkdown>{detail.body}</ReactMarkdown>
					</div>
				</>
			)}
		</>
	);
}

export default IssueDetail;
