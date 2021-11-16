import React, { useState } from "react";

const MesurmentForm = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    Shirt_Height: "",
    Shirt_Chest: "",
    Shirt_Shoulder: "",
    Shirt_Cuff: "",
    Shirt_Sleeve: "",
    Shirt_Collar: "",
    Shirt_Front: "",
    Shirt_Sleeves: "",
    Pant_Height: "",
    Pant_Waist: "",
    Pant_Back: "",
    Pant_Knee: "",
    Pant_Mandi: "",
    Pant_Plet: "",
    Pant_sideORBox: "",
  });

  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    console.log("I GOT: ", name, " & VAL: ", value);

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      name,
      phoneNumber,
      Shirt_Height,
      Shirt_Chest,
      Shirt_Shoulder,
      Shirt_Cuff,
      Shirt_Sleeve,
      Shirt_Collar,
      Shirt_Front,
      Shirt_Sleeves,
      Pant_Height,
      Pant_Waist,
      Pant_Back,
      Pant_Knee,
      Pant_Mandi,
      Pant_Plet,
      Pant_sideORBox,
    } = user;

    const res = await fetch(
      "https://measurementform-8e412-default-rtdb.firebaseio.com/mesurmentForm.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          Shirt_Height,
          Shirt_Chest,
          Shirt_Shoulder,
          Shirt_Cuff,
          Shirt_Sleeve,
          Shirt_Collar,
          Shirt_Front,
          Shirt_Sleeves,
          Pant_Height,
          Pant_Waist,
          Pant_Back,
          Pant_Knee,
          Pant_Mandi,
          Pant_Plet,
          Pant_sideORBox,
        }),
      }
    );

    if (res) {
      setUser({
        name: "",
        phoneNumber: "",
        Shirt_Height: "",
        Shirt_Chest: "",
        Shirt_Shoulder: "",
        Shirt_Cuff: "",
        Shirt_Sleeve: "",
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

      const radioNames = [
        "Pant_sideORBox",
        "Shirt_Front",
        "Shirt_Sleeves",
        "Pant_Plet",
      ];

      radioNames.forEach((element) => {
        const radio = document.getElementsByName(element);
        radio[0].checked = false;
        radio[1].checked = false;
      });

      alert("Save Successfully");
    }
  };
  return (
    <>
      <div className="form_div">
        <form
          method="post"
          data-netlify="true"
          method="POST"
          className="form_div"
        >
          <div className="form ">
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
                      onChange={getUserData}
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
                      onChange={getUserData}
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
                    onChange={getUserData}
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
                    onChange={getUserData}
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
                    onChange={getUserData}
                  />
                  <label for="shirt_shoulder">शोल्ड :</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="shirt_cuff"
                    type="number"
                    name="Shirt_Cuff"
                    value={user.Shirt_Cuff}
                    onChange={getUserData}
                  />
                  <label for="shirt_cuff">भाई/कप :</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="shirt_sleeve"
                    type="number"
                    name="Shirt_Sleeve"
                    value={user.Shirt_Sleeve}
                    onChange={getUserData}
                  />
                  <label for="shirt_sleeve">भाई/दंडघेर :</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="shirt_collar"
                    type="number"
                    name="Shirt_Collar"
                    value={user.Shirt_Collar}
                    onChange={getUserData}
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
                    name="Shirt_Front"
                    value="मॅनेला"
                    onChange={getUserData}
                  />
                  <span>मॅनेला</span>
                </label>
                <label className="col s6">
                  <input
                    className="with-gap"
                    type="radio"
                    name="Shirt_Front"
                    value="आळ"
                    onChange={getUserData}
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
                    name="Shirt_Sleeves"
                    value="हाफ"
                    onChange={getUserData}
                  />
                  <span>हाफ</span>
                </label>
                <label className="col s6">
                  <input
                    className="with-gap"
                    type="radio"
                    name="Shirt_Sleeves"
                    value="फुल"
                    onChange={getUserData}
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
                    onChange={getUserData}
                  />
                  <label for="pant_height">उंची : </label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="pant_height"
                    type="number"
                    name="Pant_Waist"
                    value={user.Pant_Waist}
                    onChange={getUserData}
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
                    onChange={getUserData}
                  />
                  <label for="pant_height">सीट : </label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="pant_height"
                    type="number"
                    name="Pant_Knee"
                    value={user.Pant_Knee}
                    onChange={getUserData}
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
                  onChange={getUserData}
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
                    value="प्लेट पॅन्ट"
                    onChange={getUserData}
                  />
                  <span>प्लेट पॅन्ट</span>
                </label>
                <label className="col s6">
                  <input
                    className="with-gap"
                    type="radio"
                    name="Pant_Plet"
                    value="बिगर प्लेट"
                    onChange={getUserData}
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
                    name="Pant_sideORBox"
                    value="साईड पॅन्ट"
                    onChange={getUserData}
                  />
                  <span>साईड पॅन्ट</span>
                </label>
                <label className="col s6">
                  <input
                    className="with-gap"
                    type="radio"
                    name="Pant_sideORBox"
                    value="बिक्रॉस पॅन्ट"
                    onChange={getUserData}
                  />
                  <span>बिक्रॉस पॅन्ट</span>
                </label>
              </div>
            </div>
          </div>
          <button className="save_btn" onClick={PostData}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default MesurmentForm;
