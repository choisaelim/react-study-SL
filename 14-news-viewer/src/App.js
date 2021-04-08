import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
	const [data, setData] = useState(null);
	const [category, setCategory] = useState('all');
	const onSelect = useCallback((category) => setCategory(category), []);
	const onClick = async () => {
		try {
			const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=df6c91aa1db8496ab004f4824b7c6e5a');

			setData(response.data);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		// <div>
		// 	<div>
		// 		<button onClick={onClick}>불러오기</button>
		// 	</div>
		// 	{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
		// </div>
		<>
			<Categories category={category} onSelect={onSelect} />
			<NewsList />
		</>
	);
};

export default App;
