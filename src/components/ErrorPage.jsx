import { useEffect } from 'react';

/**
 * @param {Error & { digest?: string }} error
 * @param {Function} reset
 * @returns {import('react').JSX.Element}
 * @constructor
 */
export function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>An unhandled error occurred!</h2>
      <blockquote>
        <code>
          {error.message}
        </code>
      </blockquote>
      {reset && <button onClick={() => reset()}>Try again</button>}
    </div>
  );
}