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
    results: [],
    books: []
  };

  componentDidMount() {
    this.loadBooks("Harry Potter")
    
  }

  loadBooks = (query) => {
    API.getBookTitle(query).then(res => this.setState({book: res.data.items})).catch(error => console.log(error));
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
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For A Book Title</h1>
          <SearchForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} saved={this.state.saved} />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;