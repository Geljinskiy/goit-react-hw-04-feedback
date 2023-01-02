import { ThemeProvider } from 'styled-components';

import React from 'react';
import { useState, useEffect } from 'react';

import Box from './common/Box';
import theme from './common/theme';

import Feedback from './Feedback';
import Statistics from './Statistics';
import Section from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onEstimate = grade => {
    switch (grade) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.floor(
      (good * 100) / countTotalFeedback()
    )}%`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box mb={40}>
        <Section title={'Please leave feedback'} size={1}>
          <Feedback
            grades={['good','neutral','bad']}
            onEstimate={onEstimate}
          />
        </Section>
      </Box>
      <Box fontSize={18}>
        <Section title={'Statistics'} size={2}>
          {!countTotalFeedback() ? (
            <span>No feedback given</span>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Box>
    </ThemeProvider>
  );
};
