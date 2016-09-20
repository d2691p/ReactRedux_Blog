//Mapping of routes
import React from 'react';
import { Route, IndexRoute } from 'react-router';
//IndexRoute - only show this route when at the parent route

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// const Greeting = () => {
// 	return <div>Ello'</div>;
// };

//Show this component at this path
//In order to show NESTED Routes, App uses {this.props.children} within app.js
//to tell App where to display the child/nested component
//In order to show Greeting, we must have the / AND "greet" in the URL (/greet)
export default(
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
	</Route>
);

