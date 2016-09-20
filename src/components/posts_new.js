import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title etc

		//If the form is valid, handleSubmit will call action creator with object of values of inputs (Key: title, value: ... etc)
		return(
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>
				<div className="form-group">
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}



//Config to redux form to handle state
//Define fields to inject them as properties into this.props
//reduxForm has same behaviour as connect

//connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st argument is form config, 2nd is mapStateToProps, 3rd is mapDispatch to Props

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);