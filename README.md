# A Repo for learning testing library in React

### Testing Custom Hook - useCounter using renderHook function & act utility 
- Here in I learnt how to test custom hooks. Since hooks doesn't return jsx/ create dom node by itself they cannot be test using the standard render fuction and screen object provided by RTL. - - We need to use render Hook fucntion from RTL to render the hook in a testing environment like:
   
   ```js
   const { result } = renderHook(useCustomHook);
   ```
- As we can see the returned value is caught and destructured as result property that contains the current object with the properties returned by out custom hooks
  
  ```js
  console.log("result.current.propNameInCustomHook")
  // will return the property value
  ```

- Also as we talk about customHooks testing we might also face a scenario when we need to test a function property of the custom hook. As we know that the render & test method by itself wrap any user interaction in the act utiliy for any React Component testing but this is not the case in terms of custom hooks testing. We need to manually invoke and wrap hook property functions in the act utility as shown below:

```js
act(() => result.current.functionPropertyInCustomHook(...args));
```

### Mocking Function in RTL & JEST

- Ex. 
 ```js
 import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const HeadEl = screen.getByRole("heading");
    expect(HeadEl).toBeInTheDocument();

    const countEl = screen.getByText("Count-0");
    expect(countEl).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrHandler = jest.fn();
    const decrHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrHandler}
        handleDecrement={decrHandler}
      />
    );

    const incrBtn = screen.getByRole("button", { name: "Increment" });
    const decrBtn = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrBtn);
    await user.click(decrBtn);

    expect(incrHandler).toHaveBeenCalledTimes(1);
    expect(decrHandler).toHaveBeenCalledTimes(1);
  });
});
```