// import { Component } from "react";

// class ErrorBoundary extends Component {
//   constructor(props: object | Readonly<object>) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error: unknown) {
//     console.log(error);
//     return { hasError: true };
//   }

//   componentDidCatch(error: unknown, errorInfo: unknown) {
//     console.error("Error caught by error boundary:", error, errorInfo);
//     // i use toastify to show error
//     alert("Error caught by error boundary");
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;