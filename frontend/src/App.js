import React, { PureComponent } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HomePageJob from "./components/HomePageJob";
import AdminHome from "./adminComponents/adminHome";
import "./components/components/Modal.css";

import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      email: ""
    };
    this.isLogged = this.isLogged.bind(this);
  }

  isLogged(bool, email) {
    this.setState({
      logged: bool,
      email
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.logged ? (
          this.state.email ? (
            <AdminHome />
          ) : (
            <HomePageJob />
          )
        ) : (
          <Main isLogged={this.isLogged} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
