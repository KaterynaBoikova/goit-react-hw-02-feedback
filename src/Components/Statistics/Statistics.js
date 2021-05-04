import React from 'react';
import PropTypes from "prop-types";

const Statistics =({good, neutral, bad, total, positivePercentage})=>(
    <div>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
        <p>Total: {total(good, neutral, bad)}</p>
        <p>Positive Feedback: {positivePercentage(good, bad, neutral)}%</p>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
};
export default Statistics;