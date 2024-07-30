import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    console.log('NotFoundPage rendered');
  return (
    <div>
      <h1 className={css.notFound}>404 - Page Not Found</h1>
      <Link className={css.link} to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;