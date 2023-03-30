import React, { useState, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Heading from "./Heading";
import PropertyDetails from "./PropertyDetails";
import AdditionalDetails from "./AdditionalDetails";
import Aminities from "./Aminities"; 
import { ToastContainer, toast, Zoom } from "react-toastify";

export default function Herosection() {
  const [progress, setProgress] = useState(6);
  const [val, setVal] = useState(0);
  const [getimage, setGetimage] = useState();

  function Toast() {
    toast("Please Fill up All Required Fields", {
      autoClose: 500000,
      closeButton: false,
      className: "toast-message",
      draggablePercent: 50,
      transition: Zoom,
    });
  }

  const [formvalues, setFormValues] = useState({
    Rent_Sale: "sale",
    Buildingtype: "Commercial",
    PropertyType_one: "Commercial_Land",
    PropertyType_two: "OpenPlot",
    PropertyType_three: "Agri_land",
    City_Name: "",
    ProjectBuilding_Name: "",
    Locality_Name: "",
    Areaone_Name: "",
    Area_Name: "One",
    Displayarea_Name: false,
    Price_Name: "",
    Maintance: "",
    Upload_Picture: [],
    Cover_Image: "Cover_Image-1",
    View_Facing: "",
    Plot_No: "",
    Per_Sq_Ft: "",
    AdditionalRoom: "ExtraRoom",
    PossessionStatus: "ReadyToMove",
    FurnishingStatus: "Furnished",
    OfficeSpaceType: "SemiFitted",
    Pantry: "None",
    PersonalWashroom: "Yes",
    NumberOfParking: "1",
    // Plot_No_Three: "",
    Floor_No: "",
    Unit_No: "",
  });
  const [fielderoor, setFielderoor] = useState({
    City_Error: "This field Is Required",
    ProjectBuilding_Error: "This field Is Required",
    Locality_Error: "This field Is Required",
    Areaone_Error: "This field Is Required",
    Area_Error: "This field Is Required",
    Displayarea_Error: "This field Is Required",
    Price_Error: "This field Is Required",
    Upload_Picture_Error: "This field Is Required",
    Maintance_Error: "This field Is Required",
    maintance_select_Error: "This field Is Required",
    Plotno_Error: "This field Is Required",
    Floor_Error: "This field Is Required",
    Unit_Error: "This field Is Required",
  });
  const [fildpattern, setPattern] = useState({
    Price_Pattern: "^[1-9]d*$",
  });

  const [focused, setFocused] = useState(false);

  function nextRedireact(e) {
    // if (
    //   formvalues.Rent_Sale === "sale" &&
    //   formvalues.Buildingtype === "Residential" &&
    //   formvalues.PropertyType === "OpenPlot"
    // ) {
    //   if (
    //     val === 0 &&
    //     formvalues.City_Name !== "" &&
    //     formvalues.ProjectBuilding_Name !== "" &&
    //     formvalues.Locality_Name !== "" &&
    //     formvalues.Areaone_Name !== "" &&
    //     formvalues.Area_Name !== "" &&
    //     formvalues.Price_Name !== ""
    //   ) {
    //     setVal(1);
    //   } else if (val === 1 && formvalues.Upload_Picture !== "") {
    //     setVal(2);
    //   } else if (val === 2) {
    //     if (window.confirm()) window.location.reload();
    //   }
    // } else if (
    //   formvalues.Rent_Sale !== "sale" ||
    //   formvalues.Buildingtype !== "Residential" ||
    //   formvalues.PropertyType !== "OpenPlot"
    // ) {
    //   if (
    //     val === 0 &&
    //     formvalues.City_Name !== "" &&
    //     formvalues.ProjectBuilding_Name !== "" &&
    //     formvalues.Locality_Name !== "" &&
    //     formvalues.Areaone_Name !== "" &&
    //     formvalues.Price_Name !== ""
    //   ) {
    //     setVal(1);
    //   } else if (val === 1 && formvalues.Upload_Picture !== "") {
    //     setVal(2);
    //   } else if (val === 2) {
    //     window.confirm(window.location.reload());
    //   }
    // }

    if (formvalues.Rent_Sale === "sale" || formvalues.Rent_Sale === "Rent") {
      if (
        formvalues.Buildingtype === "Commercial" &&
        (formvalues.PropertyType_one === "Commercial_Land" ||
          formvalues.PropertyType_one === "Industrial_Space" ||
          formvalues.PropertyType_one === "Industrial_Land" ||
          formvalues.PropertyType_one === "Godown" ||
          formvalues.PropertyType_one === "CommercialShop_showroom" ||
          formvalues.PropertyType_one === "Commercial_Office_Space" ||
          formvalues.PropertyType_one === "IndustrialShed")
      ) {
        if (
          val === 0 &&
          formvalues.City_Name !== "" &&
          formvalues.ProjectBuilding_Name !== "" &&
          formvalues.Locality_Name !== "" &&
          formvalues.Price_Name !== "" &&
          (((formvalues.PropertyType_one === "Commercial_Land" ||
            formvalues.PropertyType_one === "Industrial_Space" ||
            formvalues.PropertyType_one === "Industrial_Land" ||
            formvalues.PropertyType_one === "Godown" ||
            formvalues.PropertyType_one === "CommercialShop_showroom" ||
            formvalues.PropertyType_one === "IndustrialShed") &&
            formvalues.Areaone_Name !== "") ||
            (formvalues.PropertyType_one === "Commercial_Office_Space" &&
              formvalues.Maintance !== ""))
        ) {
          setVal(1);
        }
        // formvalues.PropertyType_one === "Commercial_Office_Space"
        else if (
          val === 1 &&
          formvalues.Upload_Picture.length > 0 &&
          (formvalues.PropertyType_one === "Commercial_Land" ||
            formvalues.PropertyType_one === "Industrial_Space" ||
            formvalues.PropertyType_one === "Godown" ||
            formvalues.PropertyType_one === "CommercialShop_showroom" ||
            formvalues.PropertyType_one === "Commercial_Office_Space" ||
            (formvalues.PropertyType_one === "Industrial_Land" &&
              formvalues.Plot_No !== "" &&
              formvalues.Unit_No !== "") ||
            (formvalues.PropertyType_one === "IndustrialShed" &&
              formvalues.Plot_No !== "" &&
              formvalues.Unit_No !== ""))
        ) {
          setVal(2);
        } else if (
          val === 2 &&
          ((formvalues.PropertyType_one === "Commercial_Land" &&
            formvalues.Plot_No !== "") ||
            formvalues.PropertyType_one === "Industrial_Space" ||
            formvalues.PropertyType_one === "Godown" ||
            (formvalues.PropertyType_one === "CommercialShop_showroom" &&
              formvalues.Floor_No !== "") ||
            (formvalues.PropertyType_one === "Commercial_Office_Space" &&
              formvalues.Floor_No !== "" &&
              formvalues.Unit_No !== ""))
        ) {
          alert("Your Form Submited");
        } else {
          Toast();
        }
      } else if (
        formvalues.Buildingtype === "Residential" &&
        (formvalues.PropertyType_two === "FlatApparment" ||
          formvalues.PropertyType_two === "IndependentHouse" ||
          formvalues.PropertyType_two === "OpenPlot")
      ) {
        if (
          val === 0 &&
          formvalues.City_Name !== "" &&
          formvalues.ProjectBuilding_Name !== "" &&
          formvalues.Locality_Name !== "" &&
          formvalues.Price_Name !== "" &&
          formvalues.Areaone_Name !== ""
        ) {
          setVal(1);
        } else if (
          val === 1 &&
          formvalues.Upload_Picture.length > 0 &&
          (formvalues.PropertyType_two === "FlatApparment" ||
            formvalues.PropertyType_two === "IndependentHouse" ||
            (formvalues.PropertyType_two === "OpenPlot" &&
              formvalues.Plot_No !== ""))
        ) {
          setVal(2);
        } else if (val === 2) {
          alert("Your Form Submited");
        } else {
          Toast();
        }
      } else if (
        formvalues.Buildingtype === "Agriculture" &&
        (formvalues.PropertyType_three === "Agri_land" ||
          formvalues.PropertyType_three === "Farm_house")
      ) {
        if (
          val === 0 &&
          formvalues.City_Name !== "" &&
          formvalues.ProjectBuilding_Name !== "" &&
          formvalues.Locality_Name !== "" &&
          formvalues.Price_Name !== "" &&
          formvalues.Areaone_Name !== ""
        ) {
          setVal(1);
        } else if (
          val === 1 &&
          formvalues.Upload_Picture.length > 0 &&
          formvalues.Plot_No !== "" &&
          formvalues.Unit_No !== ""
        ) {
          setVal(2);
        } else if (val === 2) {
          alert("Your Form Submited");
        } else {
          alert("Please Fill up All Required Fields");
        }
      } else {
        Toast();
      }
    }
    handleFocus();
  }

  function FormDataSubmit(e) {
    e.preventDefault();
  }

  const inputChange = (e) => {
    setFormValues({ ...formvalues, [e.target.name]: e.target.value });
    if (e.target.name === "Displayarea_Name") {
      setFormValues({ ...formvalues, [e.target.name]: e.target.checked });
    }
    if (e.target.name === "Upload_Picture") {
      console.log(e.target.files.length !== 0);
      const file = e.target.files[0];
      UploadImage(file);
    }
  };

  function UploadImage(file) {
    const ImageUrl = URL.createObjectURL(file);

    setFormValues({
      ...formvalues,
      Upload_Picture: [...formvalues.Upload_Picture, ImageUrl],
    });
  }

  function removeData(index) {
    let Image = formvalues.Upload_Picture;
    Image.splice(index, 1);
    setFormValues({
      ...formvalues,
      Upload_Picture: [...Image],
    });
  }

  function BackRedireact(e) {
    setVal(val - 1);
  }

  const handleFocus = (e) => {
    setFocused(true);
  };

  useEffect(() => {
    setProgress(() => {
      if (val === 0) {
        return 6;
      } else if (val === 1) {
        return 40;
      } else if (val === 2) {
        return 74;
      }
    });
  }, [val]);

  return (
    <>
      <ToastContainer hideProgressBar={true} limit={2} />

      <form className="Hero-sec needs-validation " onSubmit={FormDataSubmit}>
        <div className="containerX2">
          <Heading progress={progress} val={val} />

          {val === 0 ? (
            <PropertyDetails
              inputChange={inputChange}
              formvalues={formvalues}
              fielderoor={fielderoor}
              handleFocus={handleFocus}
              focused={focused}
              fildpattern={fildpattern}
            />
          ) : val === 1 ? (
            <AdditionalDetails
              inputChange={inputChange}
              formvalues={formvalues}
              fielderoor={fielderoor}
              handleFocus={handleFocus}
              focused={focused}
              fildpattern={fildpattern}
              getimage={getimage}
              setGetimage={setGetimage}
              removeData={removeData}
            />
          ) : (
            <Aminities
              inputChange={inputChange}
              formvalues={formvalues}
              fielderoor={fielderoor}
              handleFocus={handleFocus}
              focused={focused}
              fildpattern={fildpattern}
            />
          )}
        </div>

        <div className="containerX2">
          <div className="row justify-content-end  btn-row">
            <div className="col-lg-4 col-12"></div>
            <div className="col-lg-8 col-12 text-lg-start text-center">
              {val > 0 ? (
                <>
                  <button className="Back-btn " onClick={BackRedireact}>
                    <HiArrowLeft />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="theme-btn save_continue_btn"
                    onClick={(e) => {
                      inputChange(e);
                      nextRedireact();
                    }}
                  >
                    Save & Continue
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="theme-btn save_continue_btn"
                  onClick={(e) => {
                    inputChange(e);
                    nextRedireact();
                  }}
                >
                  Save & Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
