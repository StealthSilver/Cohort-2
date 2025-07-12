// error boundry

import React, { useState } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <p>Try refreshing the page or contact support.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const BuggyComponent = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("I crashed!");
  }

  return (
    <div>
      <h2>Buggy Component</h2>
      <button onClick={() => setShouldCrash(true)}>Crash Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default App;
