import React, { PureComponent } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HomePageJob from "./components/HomePageJob";

import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      logged: false
    };
    this.isLogged = this.isLogged.bind(this);
  }

  isLogged(bool) {
    this.setState({
      logged: bool
    });
  }

  render() {
    return (
      <div>
        <Header />

        {this.state.logged ? (
          <HomePageJob />
        ) : (
          <Main isLogged={this.isLogged} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
