import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaLongArrowAltRight } from 'react-icons/fa';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FiAlertTriangle className="text-red-500" size={60} />
      <h1 className="text-3xl font-bold mt-4 text-center">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2 text-center">
        Oops!!! The page you are looking for does not exist.
      </p>
      <p className="text-sm text-gray-600 mb-4 text-center">
        You can still get the best health care service though.
      </p>
      <Link
        to="/"
        className="text-teal-500 inline-flex items-center border border-teal-500 py-2 px-4 rounded-md hover:bg-teal-500 hover:text-white transition duration-300"
      >
        <FaLongArrowAltRight className="mr-1 bg-inherit" size={15} />
        Home Page
      </Link>
    </div>
  );
}

export default ErrorPage;
