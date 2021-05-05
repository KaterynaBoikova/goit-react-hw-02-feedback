import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions =({options, onLeaveFeedback})=>(
    options.map((option, index) => (
            <button className={styles.btn} key={index} onClick={()=>onLeaveFeedback(option)}>{option}</button>
        ))
);

FeedbackOptions.propTypes = {
        options: PropTypes.array,
        onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
