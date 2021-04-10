import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Router } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
	return <Router path="/:category?" component={NewsPage} />;
};

export default App;
