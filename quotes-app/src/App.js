import React from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.css";
import languages from "./languages";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with default values
    this.state = {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss",
      isLoading: false,
      language: "en", // set default language to "en"
    };
    // Bind methods to this
    this.getNewQuote = this.getNewQuote.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  componentDidMount() {
    // Get a new quote when component mounts
    this.getNewQuote();
  }

  getNewQuote() {
    // Set loading state to true
    this.setState({
      isLoading: true,
    });
    // Fetch a new quote from API
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          // Update state with new quote data
          this.setState({
            quote: data.content,
            author: data.author,
            isLoading: false,
          });
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
  }

  handleLanguageChange(e) {
    // Update state with new language
    this.setState({
      language: e.target.value,
    });
  }

  render() {
    const { appTitle, newQuoteBtn, tweetBtn, tumblrBtn, facebookBtn, searchPlaceholder } = languages[this.state.language];

    return (
      <div className="App">
        <h1>{appTitle}</h1>
          <label htmlFor="language" className={"language-label"}>
        {/* Add language switcher */}
        <select onChange={this.handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ar">العربية</option>
        </select>
        </label>
        {/* Pass state values and language as props to QuoteBox */}
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          isLoading={this.state.isLoading}
          getNewQuote={this.getNewQuote}
          newQuoteBtn={newQuoteBtn}
          tweetBtn={tweetBtn}
          tumblrBtn={tumblrBtn}
          facebookBtn={facebookBtn}
          searchPlaceholder={searchPlaceholder}
          language={this.state.language}
        />
      </div>
    );
  }
}

export default App;