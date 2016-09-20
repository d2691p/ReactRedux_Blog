/*
	Process for creating a container that can call action creators:
		1. Import 'connect'
		2. Import action creator
		3. define mapDispatchToProps
		4. Connect to component
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

	//Lifecycle method - this is triggered whenever component is about to be
	//rendered for the FIRST time
	componentWillMount() {
		this.props.fetchPosts();
	}

	//Link - behaves like an <a> tag
	render () {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				List of blog posts
			</div>

		);
	}
}

//Access this.props.fetchPosts
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

//Pass in object of fetchPosts - shortcut as apposed to above function.
//Still gives access to this.props.fetchPosts
export default connect (null, { fetchPosts })(PostsIndex);