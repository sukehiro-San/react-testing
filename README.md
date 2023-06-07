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
