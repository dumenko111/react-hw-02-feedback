const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objKeys = Object.keys(options);
  return objKeys.map(option => {
    return (
      <button key={option} value={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
