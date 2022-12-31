import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = props => {
  return (
    <>
      <ul>
        {Object.entries(props).map(stat => {
          return (
            <li className={css.gradeItem} key={stat}>
              {stat[0]}: {stat[1]}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};
