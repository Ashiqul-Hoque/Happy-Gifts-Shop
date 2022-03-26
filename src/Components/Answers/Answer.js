import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <div>
      <div className="section">
        <h3>How "React" Works?</h3>
        <p>
          React is a front-end JavaScript library developed by Facebook in 2011.
          It is used for developing complex and interactive web and mobile UI.
          It's a component based library. Thats why it helps to building
          reusable UI components.<br></br> React uses a virtual DOM instead of
          the real DOM. When we change anything in our website, everytime the
          real DOM repaint the site and display it's user. But in react the
          virtual DOM handles it more efficient way. React render the changes
          made by the user in the virtual DOM. Then it compare it's every node
          to real DOM. Then changes in that specific node is updated in the real
          DOM. Thus react works more faster then others.
        </p>
      </div>

      <div className="section">
        <h3>What are the difference between "Props" & "State"? </h3>
        <p>
          Props is the shorthand for Properties in React. On the other hand
          states are the objects which determine components rendering and
          behavior. The difference between "Props" & "State" are listed below:
          <li>
            Props : (Props are immutable) <strong>Vs</strong> State : (State is
            mutable).
          </li>
          <li>
            Props : (Props are read-only) <strong>Vs</strong> State : (State
            changes can be asynchronous).
          </li>
          <li>
            Props : (Props can be accessed by the child component){" "}
            <strong>Vs</strong> State : (State cannot be accessed by the child
            component)
          </li>
          <li>
            Props : (Props allow to pass data to one component to other
            component) <strong>Vs</strong> State : (State hold information about
            the component)
          </li>
          <li>
            Props : (Props make component reusable) <strong>Vs</strong> State :
            (State cannot make component reusable)
          </li>
        </p>
      </div>
    </div>
  );
};

export default Answer;
