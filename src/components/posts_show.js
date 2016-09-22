import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component{
	
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount(){
		//ID comes from URL, pass to fetchPost, fetchPost does backend request
		//Passes to reducer, show the post in here
		this.props.getPost(this.props.params.id);
	}

	onDeleteClick(){
		//Call action creator
		this.props.deletePost(this.props.params.id)
			.then(() => this.context.router.push("/"));
	}

	render(){
		const { post } = this.props;
		if(!post){
			return <div>Loading...</div>
		}
		return(
			<div>
				<Link to="/">Back to Index</Link>
				<button onClick={this.onDeleteClick.bind(this)}
					className="btn btn-danger pull-xs-right">
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { post: state.posts.post }; 
}

//Grabs a single post, connect state
export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);