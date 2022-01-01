import { Link } from "react-router-dom";

export const renderLinks = (listLinks) => {
  return listLinks.map((item) => {
    const { path, content } = item;
    return (
      <Link key={content} className="itemText" to={path}>
        {content}
      </Link>
    );
  });
};
