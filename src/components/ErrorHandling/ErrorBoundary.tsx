import React from "react";
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export const ErrorElement: React.FC = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Error {error.status}</h1>
        <p>{error.statusText}</p>
        <ReturnHomeButton />
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Unexpected Application Error!</h1>
        <p>{error.message}</p>
        <ReturnHomeButton />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-3">
        <h1>Unknown Error</h1>
        <ReturnHomeButton />
      </div>
    );
  }
};

const ReturnHomeButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      className="border-solid border-2 border-blue-500 text-white bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 transition-all duration-200"
      onClick={() => navigate("/portfolio")}
    >
      Return Home
    </button>
  );
};
