import React from 'react';
import { Route, IndexRoute } from 'react-router'; //IndexRoute - only show this route when at the parent route
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//Show this component at this path
//In order to show NESTED Routes, App uses {this.props.children} within app.js
//to tell App where to display the child/nested component
//In order to show Greeting, we must have the / AND "greet" in the URL (/greet)
export default(
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);

//path="posts/:id" :id will give access inside PostsShow to this.props.params.id
