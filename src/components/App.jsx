import React from 'react';

import { ThemeProvider } from 'styled-components';

import Box from './common/Box';
import theme from './common/theme';

import Feedback from './Feedback';
import Statistics from './Statistics';
import Section from './Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onEstimate = grade => {
    this.setState(prevState => {
      return { [grade]: prevState[grade] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((grade, acc) => {
      return (acc += grade);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.floor(
      (this.state.good * 100) / this.countTotalFeedback()
    )}%`;
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box mb={40}>
          <Section title={'Please leave feedback'} size={1}>
            <Feedback
              grades={Object.keys(this.state)}
              onEstimate={this.onEstimate}
            />
          </Section>
        </Box>
        <Box fontSize={18}>
          <Section title={'Statistics'} size={2}>
            {!this.countTotalFeedback() ? (
              <span>No feedback given</span>
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </Box>
      </ThemeProvider>
    );
  }
}
