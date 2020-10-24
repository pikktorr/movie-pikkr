import React from "react";

import "./add-movie-form.styles.scss"

import DatePickers from "../../components/date-picker/date-picker.component.jsx"
import NativeSelects from "../../components/select-genre/select-genre.component.jsx"
import TextInput from "../../components/text-input/text-input.component.jsx"



const AddMovieForm = () => {
  return (
    <section className="add-movie-form">
      <div className="x-button">x</div>
      <h3 className="form-title">Add movie</h3>
      <TextInput label="Title" placeholder="Enter movie title" />
      <TextInput label="Release Date" placeholder="Enter release date " />
      <DatePickers />
      <h2>Movie URL</h2>
      <TextInput label="Movie Url" placeholder="Enter release date " />
      <input type="text" className="url-input" placeholder="Movie URL"/>
      <h2>Genre</h2>
      <NativeSelects />
      <h2>Overview</h2>
      <TextInput label="Release Date" placeholder="Enter release date " />
      <input type="text" className="overview-input" placeholder="Overview"/>
      <h2>Runtime</h2>
      <input type="number" className="runtime-input" placeholder="Runtime"/>
      <button>Reset</button>
      <button>Submit</button>
    </section>
    );
};

export default AddMovieForm;
