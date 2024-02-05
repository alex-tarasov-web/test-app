import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import {PageError} from "../../../../widgets/PageError";

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service

    console.log(error, errorInfo)
    // logErrorToMyService(error, errorInfo)
  }

  render (): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback=''><PageError /></Suspense>
    }

    return this.props.children
  }
}

export default ErrorBoundary
