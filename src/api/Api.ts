import axios from 'axios';

const instance = axios.create({
	baseURL: `https://api.github.com/repos/facebook/react`,
});

export const getIssueDetail = async (issue_number: number) => {
	const response = await instance.get(`/issues/${issue_number}`);
	return response;
};

export const getIssueList = async (page: number) => {
	const response = await instance.get(`/issues?per_page=15&sort=comments&page=${page}`);
	return response.data;
};
