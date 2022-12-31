import React from 'react';
import PropTypes from 'prop-types';

import css from './Feedback.module.css';

const Feedback = ({ grades, onEstimate }) => {
  return (
    <ul className={css.gradeList}>
      {grades.map(grade => {
        return (
          <li className={css.gradeItem} key={grade}>
            <button
              className={css.gradeBtn}
              onClick={() => onEstimate(grade)}
              type="button"
            >
              {grade}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Feedback;

Feedback.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onEstimate: PropTypes.func.isRequired
};
