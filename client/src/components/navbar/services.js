import { Link } from "react-router-dom";

export const liWithLink = (path, content) => {
  return (
    <li>
      <Link to={path}>{content}</Link>
    </li>
  );
};
