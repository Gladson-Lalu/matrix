import React from "react";
import WebApp from "./pages";
import Preloader from "./components/preloader";

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3100);
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? <Preloader /> : <WebApp />}
      </div>
    );
  }
}

export default App;
