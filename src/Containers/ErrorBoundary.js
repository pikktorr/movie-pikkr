import React from "react";
import "./ErrorBoundary.styles.css"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info){
    console.log(error)
    console.log(info)
  }

  render(){
    if(this.state.hasErrored){
      
      return(
        <div>
         Something went wrong
         <img src="https://i.imgur.com/Q2BAOd2.png" />
        </div>
        )

    }
    return this.props.children;
  }
}

export default ErrorBoundary;
