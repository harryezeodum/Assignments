import React, { useState } from "react"

function App() {
  const [formData, setFormData] = useState([{
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phoneNumber: "",
    favoriteFood: "",
    comments: ""
  }]);

  const [badgeData, setBadgeDatas] = useState([]);

  function formChanges(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevState => {
      return {
        ...prevState, [name]: type === "checkbox" ? checked : value
      };
    });
  }
  const [errMsg, setErrMsg] = useState('')
  function submitForm(event) {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber, favoriteFood, placeOfBirth, comments } = formData;

    if (!firstName) {
      return setErrMsg('Please provide first name')
    } else {
      setBadgeDatas(prevState => {
        return [...prevState, formData
        ]
      })
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNumber: "",
        favoriteFood: "",
        comments: ""
      })
    }



  }



  const badgeDatas = badgeData.map(formData => {
    return <div className="div">
      <span className="badge">Badge</span>
      <div className="form form1">
        <span className="form-name">Name: {formData.firstName} {formData.lastName}</span>
        <span className="form-phone">Phone: {formData.phoneNumber}</span>
        <span className="form-birth">Place of Birth: {formData.placeOfBirth}</span>
        <span className="form-food"> Favorite food: {formData.favoriteFood}</span>
        <span className="form-email"> Email: {formData.email}</span>
        <textarea className="form-comment" value={formData.comments} />
      </div>
    </div>
  })

  return (
    <div className="App">
      <form onSubmit={submitForm} className="form" >
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            minLength="3"
            placeholder="First Name"
            onChange={formChanges}

          />
        <input
          name="lastName"
          value={formData.lastName}
          type="text"
          minLength="3"
          placeholder="Last Name"
          onChange={formChanges}

        />
        <input
          name="email"
          value={formData.email}
          type="text"
          minLength="3"
          placeholder="Email"
          onChange={formChanges}

        />
        <input
          name="placeOfBirth"
          value={formData.placeOfBirth}
          type="text"
          minLength="3"
          placeholder="Place of Birth"
          onChange={formChanges}

        />
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          type="tel"
          minLength="3"
          placeholder="Phone Number"
          onChange={formChanges}

        />
        <input
          name="favoriteFood"
          value={formData.favoriteFood}
          type="text"
          minLength="3"
          placeholder="Favorite Food"
          onChange={formChanges}

        />
        <textarea
          name="comments"
          value={formData.comments}
          type="text"
          minLength="3"
          placeholder="Tell us about yourself"
          onChange={formChanges}
          className="form-comment"
        />
        <button className="form-submit">Submit</button>
        {errMsg}
      </form>

      <div>
        {badgeDatas}
      </div>

    </div>
  );
}

export default App;
