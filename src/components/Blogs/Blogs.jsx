import React from 'react';
import Pdf from "react-to-pdf";


const Blogs = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [12, 18]
    };
    return (
        <div>
            <h1 className='text-purple-600 text-center text-5xl font-semibold mt-7'>Blogs about Ques and Answers !!!! </h1>
            <hr className='text-black my-10' />
            <Pdf targetRef={ref} options={options} x={.5} y={.5} scale={0.8} filename="Blogs.pdf">
                {({ toPdf }) => <a onClick={toPdf} className='btn btn-outline mx-auto btn flex justify-center items-center '>Download PDF</a>}
            </Pdf>
            <div ref={ref}>
                <div className='border border-emerald-500 text-center p-7 my-7 hover:bg-green-300'>
                    <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'> Differences between uncontrolled and controlled components</h2>
                    <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                        In React, A controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
                        <br />
                        <br />
                        A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.
                        <br />
                        <br />
                        An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.
                    </p>
                </div>
                <div className='border border-emerald-500 text-center p-7 my-7  hover:bg-green-300'>
                    <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'>How to validate React props using PropTypes?</h2>
                    <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                        Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes.
                        <br />
                        <br />
                        App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.
                    </p>

                </div>
                <div className='border border-emerald-500 text-center p-7 my-7  hover:bg-green-300 '>
                    <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'>Difference between Nodejs and Express js</h2>
                    <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                        Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.It is built on Google’s V8 engine. It  is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser.It has fewer features. It is written in C , C++, JavaScript.
                        <br />
                        <br />
                        On the other hand,Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.It makes it easier to organize your application’s functionality with middle ware and routing.It is built on Node.js.It provides more features than Node.js.It is written in Javascript language only .
                    </p>

                </div>
                <div className='border border-emerald-500 text-center p-7 my-7  hover:bg-green-300 '>
                    <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                        A custom hook is a reusable function in React that contains some logic and state, and can be shared across multiple components in an application. Custom hooks allow you to abstract away complex or repetitive logic into a single place, making your code more modular and easier to maintain.
                        <br />
                        <br />
                        The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;