import React from "react";
import PropTypes from "prop-types";

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) =>
(
  <>
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>TotalFeedback:{totalFeedback}</li>
      <li>PositiveFeedbackPercentage:{positiveFeedbackPercentage}%</li>
    </ul>
  </>
); 

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired
};
