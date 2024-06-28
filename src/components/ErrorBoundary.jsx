import { Component } from 'react';

/**
 * @typedef {Object} ErrorBoundaryProps
 * @property {import('react').ReactNode} [children]
 * @property {import('react').ComponentType<{ error: unknown }>} fallback
 */

/**
 * @typedef {Object} ErrorBoundaryState
 * @property {Error} [error]
 */

export class ErrorBoundary extends Component {
  /**
   * @type ErrorBoundaryState
   */
  state = {};

  /**
   * @param {Error} error
   * @returns {ErrorBoundaryState}
   */
  static getDerivedStateFromError = (error) => ({ error });

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const {
      state: {
        error,
      },
      props: {
        fallback: Fallback,
        children,
      },
    } = this;

    return error ? <Fallback error={error}/> : children;
  }
}
