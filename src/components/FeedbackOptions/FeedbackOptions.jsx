import PropTypes from 'prop-types'
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objKeys = Object.keys(options);
  return objKeys.map(option => {
    return (
      <button className={css.button} key={option} value={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    );
  });
};


FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
