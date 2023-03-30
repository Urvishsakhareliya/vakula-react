import React from "react";
import { NavLink } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import { HiArrowLeft } from "react-icons/hi";

export default function Aminities(props) {
  const {
    formvalues,
    inputChange,
    fielderoor,
    handleFocus,
    focused,
    fildpattern,
  } = props; 
  return (
    <>
      {(formvalues.Rent_Sale === "Rent" || formvalues.Rent_Sale === "sale") &&
      formvalues.Buildingtype === "Commercial" ? (
        <>
          {formvalues.PropertyType_one === "Commercial_Land" ||
          formvalues.PropertyType_one === "Commercial_Office_Space" ||
          formvalues.PropertyType_one === "CommercialShop_showroom" ? (
            <div className="row Advance-Details-sec box">
              <div className="col-12 col-lg-4 box-left">
                <p>Advance Details</p>
                <span>Add informative details to understnad buyer</span>
              </div>

              <div className="col-lg-8 col-12 ">
                <div className="address-form">
                  {formvalues.PropertyType_one === "Commercial_Land" ? (
                    <>
                      <Form.Group
                        className="City-item"
                        controlId="PlotNo"
                      >
                        <Form.Label className="address-lable">
                          Plot No.
                        </Form.Label>
                        <Form.Control
                          className="address-input"
                          type="number"
                          name="Plot_No"
                          onChange={inputChange}
                          placeholder="Enter city of your property"
                          value={props.formvalues.Plot_No}
                          required
                          focused={focused.toString()}
                          onBlur={handleFocus}
                          pattern={fildpattern.Plotno_Pattern_Three}
                        />
                        <p className="error">{fielderoor.Plotno_Error}</p>
                      </Form.Group>
                    </>
                  ) : formvalues.PropertyType_one ===
                    "Commercial_Office_Space" ? (
                    <>
                      <Form.Group
                        className="City-item"
                        controlId="ViewFacing"
                      >
                        <Form.Label className="Area-lable">
                          View/Facing
                        </Form.Label>
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
                      </Form.Group>

                      <Form.Group
                        className="City-item"
                        controlId="FloorNo"
                      >
                        <Form.Label className="address-lable">
                          Floor No.
                        </Form.Label>
                        <Form.Control
                          className="address-input"
                          type="number"
                          name="Floor_No"
                          onChange={inputChange}
                          placeholder="Enter your plot number "
                          value={formvalues.Floor_No}
                          required
                          focused={focused.toString()}
                          onBlur={handleFocus}
                          pattern={fildpattern.Floor_Pattern}
                        />
                        <span className="error">{fielderoor.Floor_Error}</span>
                      </Form.Group>

                      <Form.Group
                        className="City-item"
                        controlId="UnitNo"
                      >
                        <Form.Label className="address-lable">
                          Unit No.
                        </Form.Label>
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
                    </>
                  ) : formvalues.PropertyType_one ===
                    "CommercialShop_showroom" ? (
                    <>
                      <Form.Group
                        className="City-item"
                        controlId="ViewFacing"
                      >
                        <Form.Label className="Area-lable">
                          View/Facing
                        </Form.Label>
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
                      </Form.Group>

                      <Form.Group
                        className="City-item"
                        controlId="FloorNo"
                      >
                        <Form.Label className="address-lable">
                          Floor No.
                        </Form.Label>
                        <Form.Control
                          className="address-input"
                          type="number"
                          name="Floor_No"
                          onChange={inputChange}
                          placeholder="Enter your plot number "
                          value={formvalues.Floor_No}
                          required
                          focused={focused.toString()}
                          onBlur={handleFocus}
                          pattern={fildpattern.Floor_Pattern}
                        />
                        <span className="error">{fielderoor.Floor_Error}</span>
                      </Form.Group>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      <div className="row PropertyDescription box mb-5">
        <div className="col-lg-4 col-12 box-left">
          <p>Property Description</p>
          <span>
            Need Help in creating Description? <NavLink>Click here</NavLink>
          </span>
          <span className="d-block">and we’ll generate it for you.</span>
        </div>

        <div className="col-lg-8 col-12">
          <p>
            Please provide a property description so clients get to know the
            exact details about property. Smart Tip - A detailed description
            means 70% higher chances of leads.
          </p>
          <textarea
            className="white-box"
            defaultValue="Philadelphia-Style Two-Family for Sale in Davis Square with Patio & Off-Street Parking"
          ></textarea>
        </div>
      </div>
    </>
  );
}
