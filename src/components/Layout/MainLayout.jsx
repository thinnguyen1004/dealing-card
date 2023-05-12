import PropTypes from "prop-types";
import './style.css'

function Layout({ children }) {
  return <div className="layout-container">{children}</div>;
}
Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
