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
	//Call action creator
	componentWillMount() {
		this.props.fetchPosts();
	}

	//Build list and add a link to relevant post page with its ID
	renderPosts(){
		return this.props.posts.map((post) => {
			return(
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		})
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
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>

		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts.all };
}

//Access this.props.fetchPosts
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

//Pass in object of fetchPosts - shortcut as apposed to above function.
//Still gives access to this.props.fetchPosts
export default connect (mapStateToProps, { fetchPosts })(PostsIndex);