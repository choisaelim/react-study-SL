import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState(null);
	const onClick = async () => {
		try {
			axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
				setData(response.data);
			});
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<div>
				<button onClick={onclick}>불러오기</button>
			</div>
			{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
		</div>
	);
};

export default App;
