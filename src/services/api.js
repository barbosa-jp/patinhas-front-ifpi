import axios from "axios";
const backend = import.meta.env.VITE_BACKEND_URL;
const local = 'http://localhost:3000';

const ativarLocal = false;

const api = {
	login: axios.create({
		baseURL: `${ativarLocal ? local : backend}/usuario`
	}),
	pets: axios.create({
		baseURL: `${ativarLocal ? local : backend}/pets`
	}),
	doacao: axios.create({
		baseURL: `${ativarLocal ? local : backend}/doacao`
	}),
	usuario: axios.create({
		baseURL: `${ativarLocal ? local : backend}/usuario`
	}),
	admin: axios.create({
		baseURL: `${ativarLocal ? local : backend}/admin`
	}),
	posts: axios.create({
		baseURL: `${ativarLocal ? local : backend}/posts`
	}),
};

export default api;
