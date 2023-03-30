import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import AddPicture from "./Images/add-picture-image.png";
import Form from "react-bootstrap/Form";
import Navlogo from "../src/Images/Nav-logo.png";

export default function AdditionalDetails(props) {
  const {
    formvalues,
    inputChange,
    fielderoor,
    handleFocus,
    focused,
    fildpattern,
    removeData,
  } = props;

  console.log(formvalues.Upload_Picture.length === 0);
  console.log(formvalues.Upload_Picture.length);
  return (
    <>
      <div className="row Property-Pictures box mb150  ">
        <div className="col-lg-4 col-12 box-left">
          <p>Property Pictures</p>
          <span>Select option as per your property</span>
        </div>

        <div className="col-lg-8 col-12 ">
          <div className="Pictures-box text-center">
            <img src={AddPicture} alt="" />

            <div className="d-block my-3">
              <label className="add-pictute-btn">
                <AiOutlinePlus className="me-2" />
                Add pictures
                <input
                  type="file"
                  name="Upload_Picture"
                  required={formvalues.Upload_Picture.length < 0}
                  onChange={inputChange}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                />
              </label>
              {/* <p className="filePath">{formvalues.Upload_Picture}</p> */}
            </div>

            <p className="mb-1">
              Property Listings with more tham 5 images get 3x more views.
            </p>
            <p className="mb-2">More images = Higher chances of leads.</p>
            <p>
              Accepted formats are .jpg, .gif, .bmp & .png and Maximum size
              allowed 10 MB
            </p>
          </div>
          
            {formvalues.Upload_Picture.length === 0
              ?
              <p className="error d-block"> {fielderoor.Upload_Picture_Error}</p>
              : ""}
        </div>
      </div>

      {formvalues.Upload_Picture.length > 0 ? (
        <div className="picture-sec">
          {formvalues.Upload_Picture.map((item, i) => (
            <div className="upload-picture-sec" key={i}>
              <div className="Upload_Picture-img">
                <img className="img-fluid" src={item} />
                <div className="close-icon" id={"closeBtn" + i}>
                  <GrClose role="button" onClick={() => removeData(i)} />
                </div>
              </div>

              <Form.Group className="City-item" controlId="CoverImage">
                <Form.Select
                  aria-label="Default select example"
                  className="Area-select"
                  name="Cover_Image"
                  onChange={inputChange}
                  value={formvalues.Cover_Image}
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  // defaultValue={formvalues.Cover_Image}
                >
                  <option defaultValue="Other">Other</option>
                  <option defaultValue="Cover Image 1">Cover Image 1</option>
                </Form.Select>
                <span className="error">{fielderoor.Cover_Image_Error}</span>
              </Form.Group>

              <div className="set-cover-sec">
                <Form.Check
                  className="set-cover"
                  type="radio"
                  aria-label="radio 1"
                />
                <Form.Check.Label>Set as Cover</Form.Check.Label>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {(formvalues.Rent_Sale === "Rent" || formvalues.Rent_Sale === "sale") &&
      formvalues.Buildingtype === "Commercial" ? (
        <>
          {formvalues.PropertyType_one === "Industrial_Space" ||
          formvalues.PropertyType_one === "Commercial_Office_Space" ? (
            <div className="row Choose-Tag box">
              <div className="col-lg-4 col-12 box-left">
                <p>Choose Your Tag</p>
                <span>Select option as per your property</span>
              </div>
              <div className="col-lg-8 col-12">
                <ul className="Basic-Details-box tag-Details-box">
                  {/* Possession Status */}
                  <li>
                    <p>Possession Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="ReadyToMove"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.PossessionStatus === "ReadyToMove"
                          }
                          value="ReadyToMove"
                        />
                        <label className="tag-label" htmlFor="ReadyToMove">
                          Ready To Move
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="UnderConstruction"
                          autoComplete="off"
                          value="UnderConstruction"
                          defaultChecked={
                            formvalues.PossessionStatus === "UnderConstruction"
                          }
                        />
                        <label
                          className="tag-label"
                          htmlFor="UnderConstruction"
                        >
                          Under Construction
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Furnishing Status */}
                  <li>
                    <p>Furnishing Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="Furnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "Furnished"
                          }
                          value="Furnished"
                        />
                        <label className="tag-label" htmlFor="Furnished">
                          Furnished
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="SemiFurnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "SemiFurnished"
                          }
                          value="SemiFurnished"
                        />
                        <label className="tag-label" htmlFor="SemiFurnished">
                          Semi-Furnished
                        </label>
                      </div>
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="Unfurnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "Unfurnished"
                          }
                          value="Unfurnished"
                        />
                        <label className="tag-label" htmlFor="Unfurnished">
                          Unfurnished
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Office Space Type */}
                  <li>
                    <p>Office Space Type</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="OfficeSpaceType"
                          id="SemiFitted"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.OfficeSpaceType === "SemiFitted"
                          }
                          value="SemiFitted"
                        />
                        <label className="tag-label" htmlFor="SemiFitted">
                          Semi-Fitted
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="OfficeSpaceType"
                          id="FittedSpace"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.OfficeSpaceType === "FittedSpace"
                          }
                          value="FittedSpace"
                        />
                        <label className="tag-label" htmlFor="FittedSpace">
                          Fitted Space
                        </label>
                      </div>
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="OfficeSpaceType"
                          id="ShellandCore"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.OfficeSpaceType === "ShellandCore"
                          }
                          value="ShellandCore"
                        />
                        <label className="tag-label" htmlFor="ShellandCore">
                          Shell and Core
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Pantry */}
                  <li>
                    <p>Pantry</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="Pantry"
                          id="Wet_Pantry"
                          autoComplete="off"
                          defaultChecked={formvalues.Pantry === "Wet"}
                          value="Wet"
                        />
                        <label className="tag-label" htmlFor="Wet_Pantry">
                          Wet
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="Pantry"
                          id="Dry_Pantry"
                          autoComplete="off"
                          defaultChecked={formvalues.Pantry === "Dry"}
                          value="Dry"
                        />
                        <label className="tag-label" htmlFor="Dry_Pantry">
                          Dry
                        </label>
                      </div>
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="Pantry"
                          id="None_Pantry"
                          autoComplete="off"
                          value="None"
                          defaultChecked={formvalues.Pantry === "None"}
                        />
                        <label className="tag-label" htmlFor="None_Pantry">
                          None
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Personal Washroom */}
                  <li>
                    <p>Personal Washroom</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PersonalWashroom"
                          id="YesPersonalWashroom"
                          autoComplete="off"
                          value="Yes"
                          defaultChecked={formvalues.PersonalWashroom === "Yes"}
                        />
                        <label
                          className="tag-label"
                          htmlFor="YesPersonalWashroom"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PersonalWashroom"
                          id="NoPersonalWashroom"
                          autoComplete="off"
                          value="No"
                          defaultChecked={formvalues.PersonalWashroom === "No"}
                        />
                        <label
                          className="tag-label"
                          htmlFor="NoPersonalWashroom"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Number of Parking */}
                  <li>
                    <p>Number of Parking</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="one_Parking"
                          autoComplete="off"
                          defaultChecked={formvalues.NumberOfParking === "1"}
                          value="1"
                        />
                        <label className="tag-label" htmlFor="one_Parking">
                          1
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Two_Parking"
                          autoComplete="off"
                          defaultChecked={formvalues.NumberOfParking === "2"}
                          value="2"
                        />
                        <label className="tag-label" htmlFor="Two_Parking">
                          2
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Three_Parking"
                          autoComplete="off"
                          value="3"
                          defaultChecked={formvalues.NumberOfParking === "3"}
                        />
                        <label className="tag-label" htmlFor="Three_Parking">
                          3
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Four_Parking"
                          autoComplete="off"
                          value="4"
                          defaultChecked={formvalues.NumberOfParking === "4"}
                        />
                        <label className="tag-label" htmlFor="Four_Parking">
                          4
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Five_Parking"
                          autoComplete="off"
                          value="5"
                          defaultChecked={formvalues.NumberOfParking === "5"}
                        />
                        <label className="tag-label" htmlFor="Five_Parking">
                          5
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Six_Parking"
                          autoComplete="off"
                          value="6"
                          defaultChecked={formvalues.NumberOfParking === "6"}
                        />
                        <label className="tag-label" htmlFor="Six_Parking">
                          6
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Sixplus_Parking"
                          autoComplete="off"
                          value="6+"
                          defaultChecked={formvalues.NumberOfParking === "6+"}
                        />
                        <label className="tag-label" htmlFor="Sixplus_Parking">
                          6+
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : formvalues.PropertyType_one === "Godown" ? (
            <div className="row Choose-Tag box">
              <div className="col-lg-4 col-12 box-left">
                <p>Choose Your Tag</p>
                <span>Select option as per your property</span>
              </div>
              <div className="col-lg-8 col-12">
                <ul className="Basic-Details-box tag-Details-box">
                  {/* Possession Status */}
                  <li>
                    <p>Possession Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="ReadyToMove"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.PossessionStatus === "ReadyToMove"
                          }
                          value="ReadyToMove"
                        />
                        <label className="tag-label" htmlFor="ReadyToMove">
                          Ready To Move
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="UnderConstruction"
                          autoComplete="off"
                          value="UnderConstruction"
                          defaultChecked={
                            formvalues.PossessionStatus === "UnderConstruction"
                          }
                        />
                        <label
                          className="tag-label"
                          htmlFor="UnderConstruction"
                        >
                          Under Construction
                        </label>
                      </div>
                    </div>
                  </li>
                  {/* Number of Parking */}
                  <li>
                    <p>Number of Parking</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="one_Parking"
                          autoComplete="off"
                          defaultChecked={formvalues.NumberOfParking === "1"}
                          value="1"
                        />
                        <label className="tag-label" htmlFor="one_Parking">
                          1
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Two_Parking"
                          autoComplete="off"
                          defaultChecked={formvalues.NumberOfParking === "2"}
                          value="2"
                        />
                        <label className="tag-label" htmlFor="Two_Parking">
                          2
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Three_Parking"
                          autoComplete="off"
                          value="3"
                          defaultChecked={formvalues.NumberOfParking === "3"}
                        />
                        <label className="tag-label" htmlFor="Three_Parking">
                          3
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Four_Parking"
                          autoComplete="off"
                          value="4"
                          defaultChecked={formvalues.NumberOfParking === "4"}
                        />
                        <label className="tag-label" htmlFor="Four_Parking">
                          4
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Five_Parking"
                          autoComplete="off"
                          value="5"
                          defaultChecked={formvalues.NumberOfParking === "5"}
                        />
                        <label className="tag-label" htmlFor="Five_Parking">
                          5
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Six_Parking"
                          autoComplete="off"
                          value="6"
                          defaultChecked={formvalues.NumberOfParking === "6"}
                        />
                        <label className="tag-label" htmlFor="Six_Parking">
                          6
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Sixplus_Parking"
                          autoComplete="off"
                          value="6+"
                          defaultChecked={formvalues.NumberOfParking === "6+"}
                        />
                        <label className="tag-label" htmlFor="Sixplus_Parking">
                          6+
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : formvalues.PropertyType_one === "CommercialShop_showroom" ? (
            <div className="row Choose-Tag box">
              <div className="col-lg-4 col-12 box-left">
                <p>Choose Your Tag</p>
                <span>Select option as per your property</span>
              </div>
              <div className="col-lg-8 col-12">
                <ul className="Basic-Details-box tag-Details-box">
                  {/* Possession Status */}
                  <li>
                    <p>Possession Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="ReadyToMove"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.PossessionStatus === "ReadyToMove"
                          }
                          value="ReadyToMove"
                        />
                        <label className="tag-label" htmlFor="ReadyToMove">
                          Ready To Move
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="UnderConstruction"
                          autoComplete="off"
                          value="UnderConstruction"
                          defaultChecked={
                            formvalues.PossessionStatus === "UnderConstruction"
                          }
                        />
                        <label
                          className="tag-label"
                          htmlFor="UnderConstruction"
                        >
                          Under Construction
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Furnishing Status */}
                  <li>
                    <p>Furnishing Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="Furnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "Furnished"
                          }
                          value="Furnished"
                        />
                        <label className="tag-label" htmlFor="Furnished">
                          Furnished
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="SemiFurnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "SemiFurnished"
                          }
                          value="SemiFurnished"
                        />
                        <label className="tag-label" htmlFor="SemiFurnished">
                          Semi-Furnished
                        </label>
                      </div>
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="Unfurnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "Unfurnished"
                          }
                          value="Unfurnished"
                        />
                        <label className="tag-label" htmlFor="Unfurnished">
                          Unfurnished
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Number of Parking */}
                  <li>
                    <p>Number of Parking</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="one_Parking"
                          autoComplete="off"
                          defaultChecked={formvalues.NumberOfParking === "1"}
                          value="1"
                        />
                        <label className="tag-label" htmlFor="one_Parking">
                          1
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Two_Parking"
                          autoComplete="off"
                          defaultChecked={formvalues.NumberOfParking === "2"}
                          value="2"
                        />
                        <label className="tag-label" htmlFor="Two_Parking">
                          2
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Three_Parking"
                          autoComplete="off"
                          value="3"
                          defaultChecked={formvalues.NumberOfParking === "3"}
                        />
                        <label className="tag-label" htmlFor="Three_Parking">
                          3
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Four_Parking"
                          autoComplete="off"
                          value="4"
                          defaultChecked={formvalues.NumberOfParking === "4"}
                        />
                        <label className="tag-label" htmlFor="Four_Parking">
                          4
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Five_Parking"
                          autoComplete="off"
                          value="5"
                          defaultChecked={formvalues.NumberOfParking === "5"}
                        />
                        <label className="tag-label" htmlFor="Five_Parking">
                          5
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Six_Parking"
                          autoComplete="off"
                          value="6"
                          defaultChecked={formvalues.NumberOfParking === "6"}
                        />
                        <label className="tag-label" htmlFor="Six_Parking">
                          6
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="NumberOfParking"
                          id="Sixplus_Parking"
                          autoComplete="off"
                          value="6+"
                          defaultChecked={formvalues.NumberOfParking === "6+"}
                        />
                        <label className="tag-label" htmlFor="Sixplus_Parking">
                          6+
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : formvalues.PropertyType_one === "Industrial_Land" ||
            formvalues.PropertyType_one === "IndustrialShed" ? (
            <div className="row Choose-Tag box">
              <div className="col-lg-4 col-12 box-left">
                <p>Advance Details</p>
                <span>Add informative details to understnad buyer</span>
              </div>

              <div className="col-lg-8 col-12 ">
                <div className="address-form">
                  <Form.Group className="City-item" controlId="ViewFacing">
                    <Form.Label className="Area-lable">View/Facing</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="Area-select view_facing"
                      name="View_Facing"
                      onChange={inputChange}
                      value={formvalues.View_Facing}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                    >
                      <option defaultValue="Facing">
                        Select View / Facing
                      </option>
                      <option defaultValue="Facing-two">
                        Select View / Facing2
                      </option>
                    </Form.Select>
                    <span className="error">
                      {fielderoor.View_Facing_Error}
                    </span>
                  </Form.Group>

                  <Form.Group className="City-item" controlId="PlotNo">
                    <Form.Label className="address-lable">Plot No</Form.Label>
                    <Form.Control
                      className="address-input"
                      type="number"
                      name="Plot_No"
                      onChange={inputChange}
                      placeholder="Enter your plot number "
                      value={formvalues.Plot_No}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                      pattern={fildpattern.Plotno_Pattern}
                    />
                    <span className="error">{fielderoor.Plotno_Error}</span>
                  </Form.Group>

                  <Form.Group className="City-item" controlId="UnitNo">
                    <Form.Label className="address-lable">Unit No.</Form.Label>
                    <Form.Control
                      className="address-input"
                      type="number"
                      name="Unit_No"
                      onChange={inputChange}
                      placeholder="Enter your plot number "
                      value={formvalues.Unit_No}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                      pattern={fildpattern.Unit_Pattern}
                    />
                    <span className="error">{fielderoor.Unit_Error}</span>
                  </Form.Group>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (formvalues.Rent_Sale === "Rent" ||
          formvalues.Rent_Sale === "sale") &&
        formvalues.Buildingtype === "Residential" ? (
        <>
          {formvalues.PropertyType_two === "FlatApparment" ||
          formvalues.PropertyType_two === "IndependentHouse" ? (
            <div className="row Choose-Tag box">
              <div className="col-lg-4 col-12 box-left">
                <p>Choose Your Tag</p>
                <span>Select option as per your property</span>
              </div>
              <div className="col-lg-8 col-12">
                <ul className="Basic-Details-box tag-Details-box">
                  {/* Additional Rooms */}
                  <li>
                    <p>Additional Rooms</p>
                    <div
                      className="d-flex align-items-center flex-wrap"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="AdditionalRoom"
                          id="PoojaRoom"
                          autoComplete="off"
                          defaultChecked
                          value="PoojaRoom"
                        />
                        <label className="tag-label" htmlFor="PoojaRoom">
                          Pooja Room
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="AdditionalRoom"
                          id="ServantRoom"
                          autoComplete="off"
                        />
                        <label className="tag-label" htmlFor="ServantRoom">
                          Servant Room
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="AdditionalRoom"
                          id="StudyRoom"
                          autoComplete="off"
                          value="StudyRoom"
                        />
                        <label className="tag-label" htmlFor="StudyRoom">
                          Study Room
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="AdditionalRoom"
                          id="ExtraRoom"
                          autoComplete="off"
                          value="ExtraRoom"
                          defaultChecked
                        />
                        <label className="tag-label" htmlFor="ExtraRoom">
                          Extra Room
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Possession Status */}
                  <li>
                    <p>Possession Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="ReadyToMove"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.PossessionStatus === "ReadyToMove"
                          }
                          value="ReadyToMove"
                        />
                        <label className="tag-label" htmlFor="ReadyToMove">
                          Ready To Move
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="PossessionStatus"
                          id="UnderConstruction"
                          autoComplete="off"
                          value="UnderConstruction"
                          defaultChecked={
                            formvalues.PossessionStatus === "UnderConstruction"
                          }
                        />
                        <label
                          className="tag-label"
                          htmlFor="UnderConstruction"
                        >
                          Under Construction
                        </label>
                      </div>
                    </div>
                  </li>

                  {/* Furnishing Status */}
                  <li>
                    <p>Furnishing Status</p>
                    <div
                      className="d-flex align-items-center"
                      onChange={inputChange}
                    >
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="Furnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "Furnished"
                          }
                          value="Furnished"
                        />
                        <label className="tag-label" htmlFor="Furnished">
                          Furnished
                        </label>
                      </div>

                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="SemiFurnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "SemiFurnished"
                          }
                          value="SemiFurnished"
                        />
                        <label className="tag-label" htmlFor="SemiFurnished">
                          Semi-Furnished
                        </label>
                      </div>
                      <div className="tag-item-box">
                        <input
                          type="radio"
                          className="btn-check "
                          name="FurnishingStatus"
                          id="Unfurnished"
                          autoComplete="off"
                          defaultChecked={
                            formvalues.FurnishingStatus === "Unfurnished"
                          }
                          value="Unfurnished"
                        />
                        <label className="tag-label" htmlFor="Unfurnished">
                          Unfurnished
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : formvalues.PropertyType_two === "OpenPlot" ? (
            <div className="row Choose-Tag box">
              <div className="col-lg-4 col-12 box-left">
                <p>Advance Details</p>
                <span>Add informative details to understnad buyer</span>
              </div>

              <div className="col-lg-8 col-12 ">
                <div className="address-form">
                  <Form.Group className="City-item" controlId="ViewFacing">
                    <Form.Label className="Area-lable">View/Facing</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="Area-select view_facing"
                      name="View_Facing"
                      onChange={inputChange}
                      value={formvalues.View_Facing}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                    >
                      <option defaultValue="Facing">
                        Select View / Facing
                      </option>
                      <option defaultValue="Facing-two">
                        Select View / Facing2
                      </option>
                    </Form.Select>
                    <span className="error">
                      {fielderoor.View_Facing_Error}
                    </span>
                  </Form.Group>

                  <Form.Group className="City-item" controlId="PlotNo">
                    <Form.Label className="address-lable">Plot No</Form.Label>
                    <Form.Control
                      className="address-input"
                      type="number"
                      name="Plot_No"
                      onChange={inputChange}
                      placeholder="Enter your plot number "
                      value={formvalues.Plot_No}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                      pattern={fildpattern.Plotno_Pattern}
                    />
                    <span className="error">{fielderoor.Plotno_Error}</span>
                  </Form.Group>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="row Choose-Tag box">
          <div className="col-lg-4 col-12 box-left">
            <p>Advance Details</p>
            <span>Add informative details to understnad buyer</span>
          </div>

          <div className="col-lg-8 col-12 ">
            <div className="address-form">
              <Form.Group className="City-item" controlId="ViewFacing">
                <Form.Label className="Area-lable">View/Facing</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="Area-select view_facing"
                  name="View_Facing"
                  onChange={inputChange}
                  value={formvalues.View_Facing}
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                >
                  <option defaultValue="Facing">Select View / Facing</option>
                  <option defaultValue="Facing-two">
                    Select View / Facing2
                  </option>
                </Form.Select>
                <span className="error">{fielderoor.View_Facing_Error}</span>
              </Form.Group>

              <Form.Group className="City-item" controlId="PlotNo">
                <Form.Label className="address-lable">Plot No</Form.Label>
                <Form.Control
                  className="address-input"
                  type="number"
                  name="Plot_No"
                  onChange={inputChange}
                  placeholder="Enter your plot number "
                  value={formvalues.Plot_No}
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  pattern={fildpattern.Plotno_Pattern}
                />
                <span className="error">{fielderoor.Plotno_Error}</span>
              </Form.Group>

              <Form.Group className="City-item" controlId="UnitNo">
                <Form.Label className="address-lable">Unit No.</Form.Label>
                <Form.Control
                  className="address-input"
                  type="number"
                  name="Unit_No"
                  onChange={inputChange}
                  placeholder="Enter your plot number "
                  value={formvalues.Unit_No}
                  required
                  focused={focused.toString()}
                  onBlur={handleFocus}
                  pattern={fildpattern.Unit_Pattern}
                />
                <span className="error">{fielderoor.Unit_Error}</span>
              </Form.Group>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
