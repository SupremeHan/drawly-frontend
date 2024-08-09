import { useEffect } from 'react';
import './App.css';

function App() {
	async function getData() {
		const url = 'http://localhost:3000/';
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.text();
			console.log(json);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
