import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>Oh no, this route doesn't exist!</h2>
      <Link to='/'>
        Return to home page
      </Link>
    </div>
  );
};

export default ErrorPage;