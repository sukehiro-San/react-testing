const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <form>
        <img src="person.png" alt="a person" />
        <div data-testid="custom-element">Custom HTML Element</div>
        <span title="close">X</span>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value="Sunny" onChange={()=>{}}/>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select name="job-location" id="job-location">
            <option value="">--Select a Country--</option>
            <option value="india">India</option>
            <option value="japan">Japan</option>
            <option value="south-korea">South Korea</option>
            <option value="russia">Russia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms &
            conditions.
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Application;
