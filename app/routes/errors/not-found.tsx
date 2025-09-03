import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-700">404</h1>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
          
          <div className="text-gray-500">
            <p>or</p>
          </div>
          
          <Link
            to="/contact"
            className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>
        
        <div className="mt-12 text-gray-600">
          <p className="text-sm">
            Lost? Try going back to the{' '}
            <Link to="/" className="text-blue-400 hover:text-blue-300">
              homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
