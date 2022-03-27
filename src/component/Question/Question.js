import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
                <h4>Q. How react Works?</h4>
                <p><b>Ans: </b>React uses a declarative paradigm that makes it easier to reason about application and aims to be both efficient and flexible. It designs simple views for each state in the application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. </p>
            </div> <br />
            <div>
                <h4>Q. Difference between Props and state?</h4>
                <p><b>Ans: </b> <br />
                   <b>State:</b><br />

                    1. States are mutable. <br />
                    2. States are associated with the individual components can't be used by other components. <br />
                    3. States are initialize on component mount. <br />
                    4. States are used for rendering dynamic changes within component. <br /> <br />
                    
                    <b>Props:</b> <br />
                    1. Props are immutable. <br />
                    2. You can pass props between components. <br />
                    3. Props are mostly used to communicate between components.You can pass from parent to child directly. For passing from child to parent you need use concept of lifting up states.

                </p>
            </div>
        </div>
    );
};

export default Question;