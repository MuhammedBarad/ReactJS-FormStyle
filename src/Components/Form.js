import { useState } from "react";
import "./style.css";
import Model from "./Model";

const Form = () => {
  let IsDisabled = "";

  /////// UseState Hook ///////

  //   Input Data State Managment
  const [inputData, setInputData] = useState({
    fName: "",
    lName: "",
    age: "",
    isEmplyee: false,
    sallery: "",
  });
  //   Model Visabliliyt State Managment
  const [ModelVisable, setModelVisable] = useState(false);
  //   Model Error Text State Managment
  const [ErrorTxt, setErrorTxt] = useState("");

  ///////   Functions ///////

  //   Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleErrorMessage();
    if (!ModelVisable) {
      setModelVisable(true);
    }
  };
  //   Handle First Name Input
  const handleFirstNameInput = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setInputData({ ...inputData, fName: filteredValue });
  };
  //   Handle Last Name Input
  const handleLastNameInput = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setInputData({ ...inputData, lName: filteredValue });
  };
  //   Handle Age Input
  const handleAgeInput = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9]/g, "");
    setInputData({ ...inputData, age: filteredValue });
  };
  //   Handle Is Emplyee CheckBox
  const handleIsEmployeeInput = (e) => {
    setInputData({ ...inputData, isEmplyee: e.target.checked });
  };
  //   Handle Sallery Select
  const handleSalleryInput = (e) => {
    setInputData({ ...inputData, sallery: e.target.value });
  };
  // Handle IsDisabled Event
  const handleIsDisabledEvent = () => {
    if (
      inputData.fName.length <= 0 ||
      inputData.lName.length <= 0 ||
      inputData.age.length <= 0
    ) {
      IsDisabled = "disabled";
      return "disabled";
    } else {
      IsDisabled = "";
      return "";
    }
  };
  // Handle Close The Model
  const handleCloseModel = () => {
    setModelVisable(false);
  };
  // Handle Reset All Input Data
  const ResetAllData = () => {
    setInputData({
      fName: "",
      lName: "",
      age: "",
      isEmplyee: false,
      sallery: "",
    });
  };
  // Handle Error Message For Model
  const handleErrorMessage = () => {
    if (inputData.fName.length < 3 || inputData.fName.length > 50) {
      setErrorTxt("First name is not correct");
    } else if (inputData.lName.length < 3 || inputData.lName.length > 50) {
      setErrorTxt("Last name is not correct");
    } else if (inputData.age.length < 1 || inputData.age.length > 3) {
      setErrorTxt("Age is not correct");
    } else {
      setErrorTxt("Success data");
    }
  };

  return (
    <>
      <div className="customContainer">
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={inputData.fName}
                onChange={(e) => handleFirstNameInput(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={inputData.lName}
                onChange={(e) => handleLastNameInput(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name="age"
                value={inputData.age}
                onChange={(e) => handleAgeInput(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="isEmployee">Is Employee</label>
              <input
                type="checkbox"
                id="isEmployee"
                name="isEmployee"
                checked={inputData.isEmplyee}
                onChange={(e) => handleIsEmployeeInput(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <select
                id="salary"
                name="salary"
                value={inputData.sallery}
                onChange={(e) => handleSalleryInput(e)}
              >
                <option value="<500">Less than $500</option>
                <option value="500-2000">Between $500 and $2000</option>
                <option value=">3000">Above $3000</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={handleIsDisabledEvent()}
              className={IsDisabled}
            >
              Submit
            </button>
            <button type="button" onClick={ResetAllData}>
              Reset
            </button>
          </form>
        </div>
      </div>
      <Model
        ErrorMsg={ErrorTxt}
        isVisable={ModelVisable}
        onClickHandle={handleCloseModel}
      >
        {inputData}
      </Model>
    </>
  );
};
export default Form;
