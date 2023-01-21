import React from "react";
import WebApp from "./screens";
import Preloader from "./components/preloader";

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
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
