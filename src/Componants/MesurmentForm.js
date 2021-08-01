import React, { useState } from "react";

const MesurmentForm = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    Shirt_Height: "",
    Shirt_Chest: "",
    Shirt_Shoulder: "",
    Shirt_Cuff: "",
    Shirt_Collar: "",
    Shirt_Gap: "",
    Shirt_Manela: "",
    Shirt_HalfSleeve: "",
    Shirt_FullSleeve: "",
    Pant_Height: "",
    Pant_Waist: "",
    Pant_Back: "",
    Pant_Knee: "",
    Pant_Mandi: "",
    Pant_Plet: "",
    Pant_WithoutPlet: "",
    Pant_Side: "",
    Pant_Box: "",
  });

  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <form method="post" data-netlify="true">
        <div className="form">
          <div className="customer-details">
            <h4>Customer Details</h4>
            <div className="input-row">
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix icon">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    name="name"
                    value={user.name}
                    onClick={getUserData}
                  />
                  <label for="icon_prefix">Name of Customer</label>
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix icon">phone</i>
                  <input
                    id="icon_telephone"
                    type="tel"
                    className="validate"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onClick={getUserData}
                  />
                  <label for="icon_telephone">Phone Number</label>
                </div>
              </div>
            </div>
          </div>

          <div className="shirt-measurements">
            <h4>शर्ट मापे</h4>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="shirt_height"
                  type="number"
                  name="Shirt_Height"
                  value={user.Shirt_Height}
                  onClick={getUserData}
                />
                <label for="shirt_height" className="test">
                  उंची :
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  id="shirt_chest"
                  type="number"
                  name="Shirt_Chest"
                  value={user.Shirt_Chest}
                  onClick={getUserData}
                />
                <label for="shirt_chest">छाती :</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="shirt_shoulder"
                  type="number"
                  name="Shirt_Shoulder"
                  value={user.Shirt_Shoulder}
                  onClick={getUserData}
                />
                <label for="shirt_shoulder">शोल्ड :</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="shirt_cuff"
                  type="number"
                  name="Shirt_Cuff"
                  value={user.Shirt_Cuff}
                  onClick={getUserData}
                />
                <label for="shirt_cuff">भाई/कप :</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="shirt_sleeve"
                  type="number"
                  name="Shirt_Cuff"
                  value={user.Shirt_Cuff}
                  onClick={getUserData}
                />
                <label for="shirt_sleeve">भाई/दंडघेर :</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="shirt_collar"
                  type="number"
                  name="Shirt_Collar"
                  value={user.Shirt_Collar}
                  onClick={getUserData}
                />
                <label for="shirt_collar">कॉलर :</label>
              </div>
            </div>

            <h6>फ्रंट :</h6>
            <div className="row">
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Shirt_Gap"
                  value={user.Shirt_Gap}
                  onClick={getUserData}
                />
                <span>मॅनेला</span>
              </label>
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Shirt_Manela"
                  value={user.Shirt_Manela}
                  onClick={getUserData}
                />
                <span>आळ</span>
              </label>
            </div>

            <h6>Sleeve :</h6>
            <div className="row">
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Shirt_HalfSleeve"
                  value={user.Shirt_HalfSleeve}
                  onClick={getUserData}
                />
                <span>हाफ</span>
              </label>
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Shirt_FullSleeve"
                  value={user.Shirt_FullSleeve}
                  onClick={getUserData}
                />
                <span>फुल</span>
              </label>
            </div>
          </div>

          <div className="pant-measurements">
            <h4>पॅन्ट मापे</h4>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="pant_height"
                  type="number"
                  name="Pant_Height"
                  value={user.Pant_Height}
                  onClick={getUserData}
                />
                <label for="pant_height">उंची : </label>
              </div>
              <div className="input-field col s6">
                <input
                  id="pant_height"
                  type="number"
                  name="Pant_Waist"
                  value={user.Pant_Waist}
                  onClick={getUserData}
                />
                <label for="pant_height">कंबर :</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="pant_height"
                  type="number"
                  name="Pant_Back"
                  value={user.Pant_Back}
                  onClick={getUserData}
                />
                <label for="pant_height">सीट : </label>
              </div>
              <div className="input-field col s6">
                <input
                  id="pant_height"
                  type="number"
                  name="Pant_Knee"
                  value={user.Pant_Knee}
                  onClick={getUserData}
                />
                <label for="pant_height">बॉटम/गुडघा : </label>
              </div>
            </div>

            <div className="input-field col s6">
              <input
                id="pant_height"
                type="number"
                name="Pant_Mandi"
                value={user.Pant_Mandi}
                onClick={getUserData}
              />
              <label for="pant_height">मांडी : </label>
            </div>

            <h6>प्लेट :</h6>
            <div className="row">
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Pant_Plet"
                  value={user.Pant_Plet}
                  onClick={getUserData}
                />
                <span>प्लेट पॅन्ट</span>
              </label>
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Pant_WithoutPlet"
                  value={user.Pant_WithoutPlet}
                  onClick={getUserData}
                />
                <span>बिगर प्लेट</span>
              </label>
            </div>

            <h6>Sleeve :</h6>
            <div className="row">
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Pant_Side"
                  value={user.Pant_Side}
                  onClick={getUserData}
                />
                <span>साईड पॅन्ट</span>
              </label>
              <label className="col s6">
                <input
                  className="with-gap"
                  type="radio"
                  name="Pant_Box"
                  value={user.Pant_Box}
                  onClick={getUserData}
                />
                <span>बिक्रॉस पॅन्ट</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MesurmentForm;
