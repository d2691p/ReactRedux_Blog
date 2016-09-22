import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	//Define an object on PostsNew class (PostsNew.contextTypes)
	//Search parents for context called 'router' which is inside index file
	//Give access to this.context.router
	//Avoid using context unless working with instance of Router
	static contextTypes = {
		router: PropTypes.object
	};

	//props = content of inputs
	onSubmit(props){
		//Action creator that creates a promise as a payload
		this.props.createPost(props)
			.then(() => { 
				//Blog post created, navigate to route index
				//Navigate by calling this.context.router.push with new url
				this.context.router.push("/");
			});	
	}

	render(){
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title etc

		//If the form is valid, handleSubmit will call action creator with object of values of inputs (Key: title, value: ... etc)
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : '' }
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" placeholder="Comma seperated values" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : '' }
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : '' }
					</div>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

//Handle validation of input forms
function validate(values){
	const errors = {};

	//If errors object contains a key, matching the reduxForm field and that key has a value, reduxForm assumes form is not valid and prevents submission.
	if(!values.title){
		errors.title = 'Please enter a title';
		//Accessible as title.error on input
	}
	if(!values.categories){
		errors.categories = 'Please enter at least one category';
	}
	if(!values.content){
		errors.content = 'Please enter some content';
	}

	return errors;
}



//Config to redux form to handle state
//Define fields to inject them as properties into this.props
//reduxForm has same behaviour as connect

//connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st argument is form config, 2nd is mapStateToProps, 3rd is mapDispatch to Props
//Add validate as a function to form
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);