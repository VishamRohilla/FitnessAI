import React, { useState } from "react";
import axios from "axios";
import "./Dataform.css";
import { TextField } from "./Textfile";
import WaitText from "./WaitText";

export default function Dataform() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [primarygoal, setPrimarygoal] = useState("");
  const [secondarygoal, setSecondarygoal] = useState("");
  const [gender, setGender] = useState("");
  const [fit_level, setFit_level] = useState("");
  const [timing, setTiming] = useState("");
  const [equip_available, setEquip_available] = useState("");
  const [diet_pf, setDiet_pf] = useState("");
  const [diet_rst, setDiet_rst] = useState("");
  const [Health_Conditions, setHealth_Conditions] = useState("");
  const [pfd_ex, setPfd_ex] = useState("");
  const [day_pw, setDay_pw] = useState("");
  const [like_dl, setLike_dl] = useState("None");

  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormSubmitted(true);
    axios
      .post("https://fitness-ai-omega.vercel.app/", {
        height,
        weight,
        primarygoal,
        secondarygoal,
        gender,
        fit_level,
        timing,
        equip_available,
        diet_pf,
        diet_rst,
        Health_Conditions,
        pfd_ex,
        day_pw,
        like_dl,
      })
      .then((response) => {
        console.log("Data sent successfully");
        setResponseData(response.data.responseText);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-container scrollable-labels">
      {!formSubmitted && !loading && (
        <form className="form-content" onSubmit={handleSubmit}>
          <TextField
            Name_label="Height (in cm)"
            value={height}
            setValue={setHeight}
            required
          />
          <TextField
            Name_label="Weight (in kg)"
            value={weight}
            setValue={setWeight}
            required
          />
          <TextField
            Name_label="Gender"
            value={gender}
            setValue={setGender}
            required
          />
          <TextField
            Name_label="Primary Goal"
            value={primarygoal}
            setValue={setPrimarygoal}
            required
          />
          <TextField
            Name_label="Secondary Goal"
            value={secondarygoal}
            setValue={setSecondarygoal}
          />
          <TextField
            Name_label="Fitness Level (Current)"
            value={fit_level}
            setValue={setFit_level}
          />
          <TextField
            Name_label="Preferred Time"
            value={timing}
            setValue={setTiming}
          />
          <TextField
            Name_label="Equipment Available"
            value={equip_available}
            setValue={setEquip_available}
          />
          <TextField
            Name_label="Dietary Preferences"
            value={diet_pf}
            setValue={setDiet_pf}
          />
          <TextField
            Name_label="Dietary Restrictions"
            value={diet_rst}
            setValue={setDiet_rst}
          />
          <TextField
            Name_label="Health Conditions"
            value={Health_Conditions}
            setValue={setHealth_Conditions}
          />
          <TextField
            Name_label="Preferred Exercises"
            value={pfd_ex}
            setValue={setPfd_ex}
          />
          <TextField
            Name_label="Days per Week"
            value={day_pw}
            setValue={setDay_pw}
          />
          <TextField
            Name_label="Likes/Dislikes"
            value={like_dl}
            setValue={setLike_dl}
          />

          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">
              Submit
            </button>
            {/* <Link to="/result" className="btn btn-primary m-3">Already a User</Link> */}
          </div>
          <div>{/* Response: {responseData} */}</div>
        </form>
      )}
      {loading && <WaitText />}
      {formSubmitted && !loading && (
        <div className="response-container">
          <pre className="response-text">{responseData}</pre>
        </div>
      )}
    </div>
  );
}
