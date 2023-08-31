import axios from 'axios';

const instance = axios.create({
	baseURL: `https://api.github.com/repos/facebook/react`,
});
