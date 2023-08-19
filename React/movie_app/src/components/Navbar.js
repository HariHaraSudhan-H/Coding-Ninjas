import React from "react";
import { addMovies, addToMovies, handleMovieSearch } from "../actions";
import { StoreContext } from "..";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      searchText: "",
    };
  }

  handleAddtoMovies = (movie) => {
    this.props.dispatch(addToMovies(movie));
    this.setState({
      showResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.setState({
      showResults: true,
    });
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { showResults } = this.state;
    const { result } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input type="text" onChange={this.handleChange} />
          <button
            className="search-btn"
            id="search-btn"
            onClick={this.handleSearch}
          >
            search
          </button>
        </div>
        {showResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={result.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{result.Title}</span>
                <button onClick={(e) => this.handleAddtoMovies(result)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

class NavbarWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <Navbar dispatch={store.dispatch} search={this.props.search}/>}
      </StoreContext.Consumer>
    );
  }
}
export default NavbarWrapper;
