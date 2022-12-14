
import React, { useState } from 'react';
import {Section}  from 'components/Section/Section';
import {Statistics}  from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Notification}  from 'components/Notification/Notification';

export default  function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackChange = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
        return good + neutral + bad;
      };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    return Math.round((good * 100) / result);
  };

  // const feedbacks = Object.keys({ good, neutral, bad });
    
  return (
      <>
        <Section title="Please leave feedback" >
          <FeedbackOptions
              // options={feedbacks}
              options={Object.keys({ good, neutral, bad })}
              onBtnClick={handleFeedbackChange}
            />
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? 
            ( <Statistics
        good={good}
        neutral={neutral} 
        bad={bad}
        totalFeedback={countTotalFeedback()}
        positiveFeedbackPercentage={countPositiveFeedbackPercentage()} 
        /> ) :
          ( <Notification message='No feedback'/>)
          }
        </Section>
            
      </>
    );  
  }

  

