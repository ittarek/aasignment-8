import React from "react";

const Question = () => {
  return (
    <div>
      <div className=" PropsVsState container-fluid">
        <h1 className="bg-success shadow-lg p-3 mb-5 rounded-5">
          Some Question And Answer in React
        </h1>
        <div className="card bg-body p-3 m-4 b border border-info shadow-lg">
          <h1 className="text-secondary p-3 ">1. Props vs State</h1>
          <h3 className="text-warning fs-1 fw-bold">
            Props <span className="text-success">:</span>
          </h3>
          <p className="fst-italic text-bg-primary text-white fs-4 rounded-4 p-3">
            Props are read-only. Props are immutable. Props allow you to pass
            data from one component to other components as an argument. Props
            can be accessed by the child component. Props are used to
            communicate between components. Props make components reusable.
          </p>
          <h3 className="text-warning fs-1 fw-bold">State:</h3>
          <p className="fst-italic text-bg-primary text-white fs-4 rounded-4 p-3">
            State changes can be asynchronous. State is mutable. State holds
            information about the components. State cannot be accessed by child
            components. States can be used for rendering dynamic changes with
            the component. State cannot make components reusable.
          </p>
        </div>

        <div className="card bg-body p-3 m-4 b border border-info shadow-lg">
          <h1 className="text-secondary p-3 ">2. How does useState work?</h1>
          <p className="fst-italic text-bg-primary text-white fs-4 rounded-4 p-3">
            The useState hook uses a concept known as closures to manage state
            between function calls. When we call the useState hook, React
            creates a state object with the initial state value that we pass as
            an argument. This state object is stored internally by React and is
            associated with the component where the useState hook is used. React
            then returns an array with two elements: the current state value and
            a function that can be used to update the state value. The state
            value is initially set to the initial state value that we passed to
            the useState hook. When we call the state update function, React
            schedules a re-render of the component with the updated state value.
            When the component re-renders, React uses the updated state value to
            render the component with the updated UI. React also manages the
            state updates and ensures that they are applied in the correct
            order. If multiple state updates are triggered in a single function
            call, React will batch the updates and apply them in the correct
            order during the next render cycle. Overall, the useState hook is a
            powerful tool that simplifies state management in functional
            components and allows us to create dynamic and interactive UIs in
            React.
          </p>
        </div>

        <div className="card bg-body p-3 m-4 b border border-info shadow-lg">
          <h1 className="text-secondary p-3 ">
            3. Purpose of useEffect other than fetching data.
          </h1>

          <p className="fst-italic text-bg-primary text-white fs-4 rounded-4 p-3">
            Managing side effects such as setting up and tearing down timers,
            subscriptions, and event listeners. Integrating with third-party
            libraries. Animating component transitions. Updating the document
            title based on state or props. Handling user authentication and
            authorization. Handling browser or network events. Updating the URL
            or navigating to a different page. Updating global state outside of
            React.
          </p>
        </div>

        <div className="card bg-body p-3 m-4 b border border-info shadow-lg">
          <h1 className="text-secondary p-3 ">4. How Does React work?</h1>
          <p className="fst-italic text-bg-primary text-white fs-4 rounded-4 p-3">
            React is a JavaScript library that is used for building user
            interfaces. React uses a component-based architecture, which means
            that UI elements are broken down into reusable components. When a
            user interacts with a React-based application, the browser sends an
            event to the application. React then updates the UI by modifying the
            state of the components. This process is called rendering. React
            uses a virtual DOM to efficiently update the UI. The virtual DOM is
            a lightweight copy of the actual DOM that React keeps in memory.
            When the state of a component changes, React updates the virtual DOM
            and then calculates the minimal set of changes required to update
            the actual DOM. This approach is much faster than updating the
            entire DOM. React also supports server-side rendering, which allows
            the initial rendering of the application to be done on the server
            rather than in the browser. This can improve performance and enable
            better SEO .{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
