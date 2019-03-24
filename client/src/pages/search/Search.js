import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid/index";
import SearchForm from "../../components/SearchForm/index";
import SearchResults from "../../components/SearchResults/index";

class Search extends Component {
  state = {
    search: "",
    authors: [],
    description: [],
    image:[],
    link: [],
    error: "",
    results: []
  };

  componentDidMount() {
    API.getBookTitle("Harry Potter and the Sorcerors Stone")
    .then(res => this.setState({ results: res.data.message }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search).then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      }).catch(err => this.setState({ error: err.message }));
  };



  render() {
    return (
      <div>
        {/* <Saved></Saved> */}
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For A Book Title</h1>


        {/* ALERT */}
          <div type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
            {this.state.error}
          </div>
        {/* ALERT */}

          <SearchForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} saved={this.state.saved} />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;