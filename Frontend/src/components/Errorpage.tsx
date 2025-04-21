import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600"> Unauthorized Access | 404</h1>
      <p className="text-xl mt-4 text-gray-700">You do not have permission to access this page.</p>
      <Link
        to="/login"
        className="mt-6 px-6 py-2 bg-green-500 text-white text-lg rounded-sm hover:bg-green-400"
      >
        Go to Login Page
      </Link>
    </div>
  );
};

export default Errorpage;


