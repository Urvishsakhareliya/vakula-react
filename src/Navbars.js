import React, { useState } from "react";
import Navlogo from "../src/Images/Nav-logo.png";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-bootstrap";

export default function Navbars() {
  const Citys_Name = [
    "Hyderabad",
    "Gachibowli",
    "Kukatpally",
    "Mallapur",
    "Shamshabad",
  ];
  const [city, setCity] = useState(Citys_Name[0]);

  const Flats_name = [
    "Buy Flats",
    "Flat/Apparment",
    "Independent House/Villa",
    "Open Plot",
  ];
  const [Flats, setFlats] = useState(Flats_name[0]);

  const Buy_Commercial = ["Buy Commercial", "Residential", "Agriculture"];
  const [Commercial, setCommercial] = useState(Buy_Commercial[0]);

  const Buy_Agriculture = ["Buy Agriculture", "Buy Commercial", "Residential"];
  const [Agriculture, setAgriculture] = useState(Buy_Agriculture[0]);
  
  function navopen() {
    document.getElementById("navbarItems").classList.add("show");
    document.getElementById("backLayer").classList.remove("d-none");
    document.body.classList.add("overflow-hidden");
  }
  function NavClose() {
    document.getElementById("navbarItems").classList.remove("show");
    document.getElementById("backLayer").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="Navbars">
      <div className=" d-none" id="backLayer" onClick={NavClose}></div>
      <div className="containerX">
        <div className="row align-items-center justify-content-between">
          <div className="col-4 col-md-6 col-lg-2 order-1 order-lg-0 nav-logo text-center text-lg-start">
            <NavLink>
              <img src={Navlogo} className="img-fluid" alt="" />
            </NavLink>
          </div>

          <div className="col-4 col-md-3 col-lg-8 order-0 order-lg-1">
            <div
              id="menuIcons"
              className="d-inline-block d-lg-none"
              onClick={navopen}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.79487 12.4103C9.38554 12.4103 9.58974 13.9672 9.58974 17.2051C9.58974 18.8275 9.58974 19.9816 8.90831 20.8267C8.12421 21.8003 6.69703 22 4.79487 22C2.89272 22 1.46554 21.8003 0.681436 20.8267C0 19.9816 0 18.8286 0 17.2333L0.846154 17.2051H0C0 13.9672 0.204205 12.4103 4.79487 12.4103ZM17.2051 12.4103C21.7958 12.4103 22 13.9672 22 17.2051C22 18.8275 22 19.9816 21.3186 20.8267C20.5345 21.8003 19.1073 22 17.2051 22C15.303 22 13.8758 21.8003 13.0917 20.8267C12.4103 19.9816 12.4103 18.8286 12.4103 17.2333L13.2564 17.2051H12.4103C12.4103 13.9672 12.6145 12.4103 17.2051 12.4103ZM5.02746 14.1031L4.79487 14.1026C1.85141 14.1026 1.70047 14.3138 1.69273 16.7844L1.6932 17.7469C1.69855 18.7295 1.73599 19.4393 1.99805 19.7662C2.29703 20.1362 3.18492 20.3077 4.79487 20.3077C6.40482 20.3077 7.29272 20.1351 7.59169 19.765C7.89744 19.3848 7.89744 18.4823 7.89744 17.2322C7.89744 14.4115 7.89744 14.1163 5.02746 14.1031ZM17.4377 14.1031L17.2051 14.1026C14.2617 14.1026 14.1107 14.3138 14.103 16.7844L14.1035 17.7469C14.1088 18.7295 14.1462 19.4393 14.4083 19.7662C14.7073 20.1362 15.5952 20.3077 17.2051 20.3077C18.8151 20.3077 19.703 20.1351 20.0019 19.765C20.3077 19.3848 20.3077 18.4823 20.3077 17.2322C20.3077 14.4115 20.3077 14.1163 17.4377 14.1031ZM4.79487 0C9.38554 0 9.58974 1.55692 9.58974 4.79487C9.58974 6.41723 9.58974 7.57138 8.90831 8.41641C8.12421 9.39005 6.69703 9.58974 4.79487 9.58974C2.89272 9.58974 1.46554 9.39005 0.681436 8.41641C0 7.57138 0 6.41836 0 4.82308L0.846154 4.79487H0C0 1.55692 0.204205 0 4.79487 0ZM17.2051 0C21.7958 0 22 1.55692 22 4.79487C22 6.41723 22 7.57138 21.3186 8.41641C20.5345 9.39005 19.1073 9.58974 17.2051 9.58974C15.303 9.58974 13.8758 9.39005 13.0917 8.41641C12.4103 7.57138 12.4103 6.41836 12.4103 4.82308L13.2564 4.79487H12.4103C12.4103 1.55692 12.6145 0 17.2051 0ZM5.02746 1.69281L4.79487 1.69231C1.85141 1.69231 1.70047 1.90352 1.69273 4.37411L1.6932 5.33661C1.69855 6.31924 1.73599 7.02904 1.99805 7.3559C2.29703 7.72595 3.18492 7.89744 4.79487 7.89744C6.40482 7.89744 7.29272 7.72482 7.59169 7.35477C7.89744 6.97456 7.89744 6.072 7.89744 4.82195C7.89744 2.0012 7.89744 1.70609 5.02746 1.69281ZM17.4377 1.69281L17.2051 1.69231C14.2617 1.69231 14.1107 1.90352 14.103 4.37411L14.1035 5.33661C14.1088 6.31924 14.1462 7.02904 14.4083 7.3559C14.7073 7.72595 15.5952 7.89744 17.2051 7.89744C18.8151 7.89744 19.703 7.72482 20.0019 7.35477C20.3077 6.97456 20.3077 6.072 20.3077 4.82195C20.3077 2.0012 20.3077 1.70609 17.4377 1.69281Z"
                  fill="#282828"
                />
              </svg>
            </div>
            <div className="navbar-items" id="navbarItems">
              <div className=" text-end close-nav d-lg-none ">
                <GrClose role="button" onClick={NavClose} />
              </div>

              <NavDropdown title={city} id="navbarScrollingDropdown">
                {Citys_Name.map((item, i) => (
                  <NavDropdown.Item
                    key={i}
                    onClick={function (event) {
                      setCity(item);
                      NavClose();
                    }}
                  >
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title={Flats} id="navbarScrollingDropdown">
                {Flats_name.map((item, i) => (
                  <NavDropdown.Item
                    key={i}
                    onClick={function (event) {
                      setFlats(item);
                      NavClose();
                    }}
                  >
                    <span>{item}</span>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title={Commercial} id="navbarScrollingDropdown">
                {Buy_Commercial.map((item, i) => (
                  <NavDropdown.Item
                    key={i}
                    onClick={function (event) {
                      setCommercial(item);
                      NavClose();
                    }}
                  >
                    <span>{item}</span>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title={Agriculture} id="navbarScrollingDropdown">
                {Buy_Agriculture.map((item, i) => (
                  <NavDropdown.Item
                    key={i}
                    onClick={function (event) {
                      setAgriculture(item);
                      NavClose();
                    }}
                  >
                    <span>{item}</span>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <div className="nav-item">
                <Nav.Link href="#action1" onClick={NavClose}>
                  Contact
                </Nav.Link>
              </div>

              <div className="nav-item">
                <Nav.Link href="#action1" onClick={NavClose}>
                  Login
                </Nav.Link>
              </div>

              <div className="nav-item">
                <Nav.Link href="#action1" onClick={NavClose}>
                  Post Property
                </Nav.Link>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 col-lg-2 text-end order-2 order-lg-2">
            <button className="Get-anapp-btn d-none d-sm-block">
              Get an app
            </button>

            <button className="Get-anapp-btn  d-block d-sm-none ">
              <svg
                className="mx-2"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.858529V13.1399C8.22783e-05 13.1665 0.00802939 13.1925 0.0228448 13.2147C0.0376603 13.2368 0.0586845 13.2541 0.0832812 13.2644C0.107878 13.2746 0.134952 13.2774 0.161109 13.2723C0.187265 13.2672 0.21134 13.2545 0.230314 13.2358L6.62505 6.99951L0.230314 0.76259C0.21134 0.743883 0.187265 0.731194 0.161109 0.726114C0.134952 0.721035 0.107878 0.723791 0.0832812 0.734037C0.0586845 0.744282 0.0376603 0.761562 0.0228448 0.783709C0.00802939 0.805856 8.22783e-05 0.831883 0 0.858529Z"
                  fill="#DB4040"
                />
                <path
                  d="M9.30629 4.43762L1.28811 0.0200933L1.28311 0.0172808C1.14498 -0.0577197 1.01373 0.129157 1.12686 0.237907L7.41221 6.24795L9.30629 4.43762Z"
                  fill="#DB4040"
                />
                <path
                  d="M1.12771 13.7616C1.01396 13.8704 1.14521 14.0573 1.28396 13.9823L1.28896 13.9795L9.30652 9.56193L7.41244 7.75098L1.12771 13.7616Z"
                  fill="#DB4040"
                />
                <path
                  d="M12.5431 6.21897L10.3041 4.98584L8.19873 7.00023L10.3041 9.01368L12.5431 7.78149C13.1522 7.44492 13.1522 6.55554 12.5431 6.21897Z"
                  fill="#DB4040"
                />
              </svg>
              App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 