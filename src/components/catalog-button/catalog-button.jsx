import React from "react";
import PropTypes from "prop-types";

const CatalogButton = (props) => {
  const {onButtonClick, children} = props;

  return (
    <button className="catalog__button"
      type="button"
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

CatalogButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default CatalogButton;
