import React from "react";

import { Link } from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close';

import "./add-movie-form.styles.scss"






class AddMovieForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:"",
      date:"",
      url:"",
      genre:"",
      overview:"",
      runtime:0
    };
  }
  
  
  // componentDidMount(){
  //   console.log(this.state)
  // }
  
  // componentDidUpdate(){
  //   console.log(this.state)
  // }
  
  handleInputChange = event =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event =>{
    event.preventDefault();
    console.log(this.state);
  }




  render(){
  return (
    <section className="add-movie-form">
      <Link to="/">
        <CloseIcon className="close-icon"/>
      </Link>
      <h3 className="form-title">ADD MOVIE</h3>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="movie-title">
          Title
          <input type="text" name="title" id="movie-title" onChange={this.handleInputChange}/>
        </label><br/>
        <label htmlFor="movie-date">
          Release date
          <input type="date" name="date" id="movie-date" onChange={this.handleInputChange}/>
        </label><br/>
        <label htmlFor="movie-url">
        Movie URL
          <input type="url" name="url" id="movie-url" onChange={this.handleInputChange}/>
        </label><br/>
        <label htmlFor="select-genre">
          Genre
          <select name="genre" id="select-genre" onChange={this.handleInputChange}>
            <option value=""></option>
            <option value="documentary">Documentary</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="crime">Crime</option>
          </select>
        </label><br/>
        <label htmlFor="movie-overview">
          Overview
          <textarea name="overview" id="movie-overview" onChange={this.handleInputChange}></textarea>
        </label><br/>
        <label htmlFor="movie-runtime">
          Runtime
          <input type="number" name="runtime" id="movie-runtime" onChange={this.handleInputChange}/>
        </label><br/>
      <button type="reset" id="reset-button">Reset</button>
      <button type="submit" id="submit-button">Submit</button>
      </form>
    </section>
    );
  }
};

export default AddMovieForm;
