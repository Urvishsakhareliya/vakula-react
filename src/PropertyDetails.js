import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlinePlus } from "react-icons/ai";

export default function PropertyDetails(props) {
  const [activeproperty, setActiveproperty] = useState({
    Commercial: "",
    Residential: "Show",
    Agriculture: "",
  });
  const {
    formvalues,
    inputChange,
    fielderoor,
    handleFocus,
    focused,
    fildpattern,
  } = props;

  useEffect(() => {
    if (formvalues.Buildingtype === "Commercial") {
      setActiveproperty({
        Commercial: "show",
        Residential: "",
        Agriculture: "",
      });
    } else if (formvalues.Buildingtype === "Residential") {
      setActiveproperty({
        Commercial: "",
        Residential: "show",
        Agriculture: "",
      });
    } else {
      setActiveproperty({
        Commercial: "",
        Residential: "",
        Agriculture: "show",
      });
    }
  }, [formvalues.Buildingtype]);
  return (
    <>
      <div className="row Basic-Details-sec box">
        <div className="col-12 col-lg-4 box-left">
          <p>Basic Details</p>
          <span>Select option as per your property</span>
        </div>

        <div className="col-12 col-lg-8">
          <ul className="Basic-Details-box">
            {/* Looking For */}
            <li>
              <p>Looking For</p>
              <div className="d-flex align-items-center" onChange={inputChange}>
                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="Rent_Sale"
                    id="Rent"
                    value="Rent"
                    defaultChecked={formvalues.Rent_Sale === "Rent"}
                  />
                  <label className=" Rent-label" htmlFor="Rent">
                    <svg
                      width="25"
                      height="19"
                      viewBox="0 0 25 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.27815 18.4818H5.92886C6.63351 18.4818 7.20674 17.9085 7.20674 17.2036V17.1965L11.6576 18.6705C12.3218 18.8904 13.0069 18.9999 13.6895 18.9999C14.6408 18.9999 15.5882 18.7878 16.4707 18.3669L23.4309 14.9626C23.8623 14.7516 24.1855 14.3853 24.3416 13.9307C24.4972 13.4764 24.4668 12.9887 24.2555 12.557C23.8203 11.6682 22.7425 11.2989 21.8529 11.7323L17.8767 13.6719C17.6807 12.8597 16.9497 12.2539 16.0783 12.2539H13.2964L12.3134 11.7299C11.3806 11.2324 10.3289 10.9695 9.27236 10.9695H7.20674V10.9383C7.20674 10.2337 6.63351 9.66016 5.92886 9.66016H1.27815C0.573226 9.66043 0 10.2337 0 10.9383V17.2036C0 17.9083 0.573226 18.4818 1.27815 18.4818ZM9.27236 12.0557C10.1513 12.0557 11.0263 12.2746 11.8021 12.6884L12.9059 13.2771C12.9124 13.2806 12.9192 13.2817 12.926 13.2847C12.9499 13.2964 12.9748 13.3053 13.0006 13.3135C13.015 13.3181 13.0292 13.3235 13.0438 13.3268C13.0693 13.3325 13.0957 13.3344 13.1226 13.3363C13.1353 13.3371 13.1484 13.3409 13.1611 13.3409C13.163 13.3409 13.1649 13.3401 13.1671 13.3401H16.078C16.5003 13.3401 16.8438 13.6839 16.8438 14.108C16.8438 14.5303 16.5 14.874 16.078 14.874H12.0046C11.7048 14.874 11.4615 15.1173 11.4615 15.4171C11.4615 15.7169 11.7048 15.9602 12.0046 15.9602H16.078C16.7935 15.9602 17.4143 15.5515 17.7225 14.9555L22.3289 12.7085C22.6798 12.5371 23.1075 12.683 23.2799 13.0349C23.3635 13.2057 23.3755 13.3988 23.3138 13.5785C23.2522 13.7583 23.1243 13.9033 22.9535 13.9869L15.9985 17.3888C14.741 17.9881 13.3208 18.0766 11.9989 17.6394L7.20674 16.0523V12.0557H9.27236ZM1.08617 10.9383C1.08617 10.8324 1.17225 10.7463 1.27815 10.7463H5.92886C6.03476 10.7463 6.12057 10.8324 6.12057 10.9383V17.2036C6.12057 17.3095 6.03476 17.3956 5.92886 17.3956H1.27815C1.17225 17.3956 1.08617 17.3095 1.08617 17.2036V10.9383Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M19.5172 0.641825H17.9816C17.6818 0.641825 17.4385 0.885127 17.4385 1.18491V1.85942L15.4364 0.131868C15.2322 -0.0440917 14.9305 -0.0438202 14.7269 0.131868L8.54467 5.46686C8.31766 5.66292 8.2924 6.0056 8.48846 6.23289C8.59599 6.35725 8.74724 6.42106 8.89985 6.42106C9.02557 6.42106 9.15184 6.37762 9.25448 6.28909L9.58821 6.00099V9.9894C9.58821 10.2892 9.83151 10.5325 10.1313 10.5325C10.4311 10.5325 10.6744 10.2892 10.6744 9.9894V5.06362L15.0815 1.2604L19.4908 5.06471V11.4202C19.4908 11.7199 19.7341 11.9632 20.0339 11.9632C20.3337 11.9632 20.577 11.7199 20.577 11.4202V6.00207L20.9099 6.28909C21.1372 6.48488 21.4799 6.45962 21.6756 6.23261C21.8714 6.0056 21.8464 5.66265 21.6194 5.46659L20.0602 4.12137V1.18491C20.0602 0.885127 19.8169 0.641825 19.5172 0.641825ZM18.5247 1.72799H18.9741V3.18373L18.5247 2.79597V1.72799Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M15.0822 10.9001C15.382 10.9001 15.6253 10.6568 15.6253 10.357V9.96949C16.3378 9.76583 16.8548 9.17305 16.8548 8.47492C16.8548 7.60897 16.0595 6.90405 15.0822 6.90405C14.7102 6.90405 14.3957 6.68219 14.3957 6.41934C14.3957 6.15649 14.7102 5.93464 15.0822 5.93464C15.4539 5.93464 15.7081 6.1421 15.7581 6.33734C15.8327 6.62761 16.1271 6.80303 16.4195 6.72809C16.7098 6.65341 16.885 6.35743 16.8103 6.06688C16.6677 5.51239 16.2096 5.09041 15.6253 4.92559V4.53674C15.6253 4.23695 15.382 3.99365 15.0822 3.99365C14.7824 3.99365 14.5391 4.23695 14.5391 4.53674V4.92423C13.8266 5.12789 13.3096 5.72066 13.3096 6.4188C13.3096 7.28475 14.1049 7.98967 15.0822 7.98967C15.4542 7.98967 15.7687 8.21152 15.7687 8.47438C15.7687 8.73723 15.4542 8.95908 15.0822 8.95908C14.7373 8.95908 14.4873 8.77497 14.418 8.59331C14.3113 8.31281 13.9971 8.17323 13.7172 8.27914C13.4369 8.38585 13.2963 8.69976 13.403 8.97999C13.5857 9.4598 14.0137 9.82068 14.5394 9.97003V10.357C14.5391 10.6568 14.7824 10.9001 15.0822 10.9001Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Rent
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="Rent_Sale"
                    id="sale"
                    value="sale"
                    autoComplete="off"
                    defaultChecked={formvalues.Rent_Sale === "sale"}
                  />
                  <label className=" Rent-label" htmlFor="sale">
                    <svg
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0788 4.40759V2.08481C19.0818 1.76337 19.0132 1.4453 18.8778 1.15373C18.7425 0.86216 18.5438 0.604421 18.2964 0.399255C18.0868 0.229334 17.8415 0.10903 17.5788 0.0473548C17.3162 -0.0143207 17.043 -0.0157693 16.7797 0.0431166L6.60433 2.36285C6.15935 2.48406 5.76796 2.7512 5.49294 3.12142C5.21793 3.49165 5.07521 3.94351 5.08769 4.40454V10.7269C5.08897 10.9566 5.1257 11.1847 5.19657 11.4032H1.90788C1.73928 11.403 1.57764 11.3359 1.45841 11.2167C1.33919 11.0975 1.27212 10.9358 1.27192 10.7672V5.67951C1.27212 5.51091 1.33919 5.34927 1.45841 5.23004C1.57764 5.11082 2 5 1.90788 5.04355L6.92785 3.56102C7.09652 3.56102 7.25828 3.49401 7.37754 3.37475C7.49681 3.25548 7.56381 3.09372 7.56381 2.92506C7.56381 2.75639 7.49681 2.59463 7.37754 2.47536C7.25828 2.3561 7.09652 2.28909 6.92785 2.28909L1.90788 3.77163C1.35492 3.91547 0.917112 3.97339 0.559439 4.33107C0.201765 4.68874 0.000572298 5.17369 0 5.67951V18.3987C0 18.5674 0.067003 18.7292 0.186269 18.8484C0.305535 18.9677 0.467294 19.0347 0.635961 19.0347H3.17981C3.31328 19.0346 3.44333 18.9925 3.55164 18.9145C3.65995 18.8365 3.74103 18.7265 3.78346 18.6L5.46895 15C5.49537 14.9207 5.50592 14.837 5.5 14.7537C5.49408 14.6703 5.47179 14.589 5.43442 14.5142C5.39705 14.4395 5.34533 14.3728 5.2822 14.3181C5.21908 14.2633 5.14578 14.2216 5.06651 14.1951C4.98724 14.1687 4.90354 14.1582 4.82019 14.1641C4.73683 14.17 4.65547 14.1923 4.58073 14.2297C4.50599 14.267 4.43934 14.3187 4.38459 14.3819C4.32984 14.445 4.28806 14.5183 4.26164 14.5976L2.72191 17.7628H1.27192V12.5579C1.47559 12.6333 1.69074 12.6729 1.90788 12.6751H6.35961C6.36724 12.6751 6.37348 12.671 6.38098 12.6708C6.45301 12.7085 6.52765 12.7411 6.60433 12.7682L16.7797 15.0879C16.908 15.1173 17.0393 15.1321 17.171 15.1319C17.5806 15.1304 17.9776 14.9894 18.2964 14.732C18.5439 14.5269 18.7425 14.2692 18.8779 13.9776C19.0133 13.686 19.0819 13.3679 19.0788 13.0465V10.7672C19.5007 10.7832 19.9213 10.7118 20.3143 10.5577C20.7073 10.4035 21.0643 10.1699 21.3628 9.87136C21.6613 9.57284 21.895 9.2159 22.0491 8.82288C22.2033 8.42987 22.2746 8.00926 22.2586 7.5874C22.2747 7.16551 22.2035 6.74484 22.0494 6.35178C21.8952 5.95871 21.6616 5.60172 21.3631 5.30318C21.0645 5.00465 20.7075 4.771 20.3145 4.61688C19.9214 4.46277 19.5007 4.39152 19.0788 4.40759ZM17.8069 13.0465C17.8108 13.1771 17.7855 13.3069 17.7329 13.4265C17.6802 13.5461 17.6015 13.6524 17.5025 13.7377C17.4424 13.7882 17.3716 13.8245 17.2954 13.8436C17.2193 13.8628 17.1397 13.8644 17.0628 13.8483L6.88746 11.5286C6.72433 11.4706 6.58455 11.3609 6.4893 11.2163C6.39405 11.0718 6.34852 10.9001 6.35961 10.7273V4.40454C6.34854 4.23175 6.39408 4.06006 6.48933 3.91547C6.58457 3.77088 6.72434 3.66127 6.88746 3.60323L17.0628 1.28362C17.0991 1.27526 17.1363 1.271 17.1735 1.2709C17.294 1.27325 17.4101 1.31664 17.5025 1.3939C17.6015 1.47915 17.6802 1.58542 17.7328 1.70495C17.7855 1.82448 17.8108 1.95425 17.8069 2.08481V13.0465ZM19.0788 9.49528V5.67951C19.3329 5.66599 19.5871 5.70607 19.8247 5.79717C20.0623 5.88826 20.278 6.02833 20.458 6.20826C20.6379 6.3882 20.778 6.60398 20.8691 6.84158C20.9602 7.07918 21.0002 7.33329 20.9867 7.5874C21.0003 7.84152 20.9603 8.09566 20.8692 8.33329C20.7781 8.57092 20.6381 8.78672 20.4581 8.96667C20.2782 9.14662 20.0624 9.28668 19.8247 9.37775C19.5871 9.46882 19.333 9.50887 19.0788 9.49528Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Sale
                  </label>
                </div>
              </div>
            </li>

            {/* Building type */}
            <li>
              <p>Building type</p>

              <div
                className="d-flex align-items-center flex-wrap"
                onChange={inputChange}
              >
                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="Buildingtype"
                    id="Commercial"
                    value="Commercial"
                    autoComplete="off"
                    defaultChecked={formvalues.Buildingtype === "Commercial"}
                  />
                  <label className=" Rent-label" htmlFor="Commercial">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9599 20.9998H1.41504V1L10.9599 2.81745V20.9998ZM2.24476 20.1701H10.1301V3.50415L2.24476 2.00271V20.1701Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M20.4984 20.9996H10.1299V5.11279L20.4984 7.8185V20.9996ZM10.9596 20.1699H19.6686V8.45943L10.9596 6.18681V20.1699Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M20.9133 20.1699H1V20.9996H20.9133V20.1699Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.63699 21.0001L3.63477 20.9967V13.9473H8.63699V21.0001ZM4.46449 20.1673L7.80727 20.17V14.777H4.46449V20.1673Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.6065 20.1702H16.7767V14.777H13.861V20.1671H13.0312V13.9473H17.6065V20.1702Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.1908 13.9473H13.4453V14.777H17.1908V13.9473Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.89825 5.23535H3.91992V6.06507H8.89825V5.23535Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.91094 7.72412H3.93262V8.55384H8.91094V7.72412Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.87286 10.2134H3.89453V11.0431H8.87286V10.2134Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.9998 9.38379H13.0215V10.2135H17.9998V9.38379Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M18.0201 11.873H13.0312V12.7028H18.0201V11.873Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                    </svg>
                    Commercial
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="Buildingtype"
                    id="Residential"
                    autoComplete="off"
                    value="Residential"
                    defaultChecked={formvalues.Buildingtype === "Residential"}
                  />
                  <label className=" Rent-label" htmlFor="Residential">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21H1L1.01058 6.7192L2.32609 1H19.6646L21 6.83801V21ZM1.83333 20.1667H20.1667V6.88542L19.0013 1.83333H2.98934L1.83333 6.85999V20.1667Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M20.5835 6.4165H1.53809V7.24984H20.5835V6.4165Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M8.5 21.0002H3.5V16.8335C3.5 15.4549 4.62142 14.3335 6 14.3335C7.37858 14.3335 8.5 15.4549 8.5 16.8335V21.0002ZM4.33333 20.1668H7.66667V16.8335C7.66667 15.9145 6.91919 15.1668 6 15.1668C5.08081 15.1668 4.33333 15.9145 4.33333 16.8335V20.1668Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M17.2497 15.1665H10.583V10.1665H17.2497V15.1665ZM11.4163 14.3332H16.4163V10.9998H11.4163V14.3332Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M10.9997 10.1665H9.33301V10.9998H10.9997V10.1665Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M18.4997 10.1665H16.833V10.9998H18.4997V10.1665Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                    </svg>
                    Residential
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="Buildingtype"
                    id="Agriculture"
                    autoComplete="off"
                    value="Agriculture"
                    defaultChecked={formvalues.Buildingtype === "Agriculture"}
                  />
                  <label className=" Rent-label" htmlFor="Agriculture">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2322 15.7756C17.8449 15.7756 18.742 15.6606 19.3288 15.0738C20.2734 14.129 19.9955 12.3817 19.9831 12.3078C19.9665 12.2076 19.8881 12.1293 19.7879 12.1126C19.7138 12.1003 17.9665 11.8224 17.022 12.7672C16.9068 12.8824 16.8104 13.0097 16.7289 13.1443V5.62959C17.0545 5.37142 18.0677 4.47985 18.0677 3.375C18.0677 2.08704 16.6883 1.08621 16.6296 1.04441C16.547 0.985513 16.4361 0.985513 16.3534 1.04441C16.2948 1.08645 14.9154 2.08728 14.9154 3.375C14.9154 4.47985 15.9285 5.37142 16.2542 5.62959V10.6131C16.1739 10.4824 16.0801 10.3582 15.968 10.2461C15.0234 9.30134 13.2757 9.57945 13.202 9.5918C13.1018 9.60842 13.0234 9.6868 13.0068 9.78703C12.9945 9.86113 12.7166 11.6084 13.6611 12.553C14.2478 13.1398 15.1443 13.2548 15.7571 13.2548C15.963 13.2548 16.1349 13.2417 16.2542 13.2293V19.525H10.8297V8.62446C10.9491 8.63705 11.1234 8.65059 11.3332 8.65059C11.9459 8.65059 12.8429 8.53564 13.4298 7.94877C14.3743 7.004 14.0965 5.25671 14.0841 5.18285C14.0675 5.08262 13.9891 5.00425 13.8889 4.98763C13.8148 4.97551 12.0673 4.6974 11.123 5.64217C11.0078 5.75736 10.9114 5.88466 10.8299 6.01933V1.2375C10.8299 1.10616 10.7235 1 10.5924 1C10.4613 1 10.3549 1.10616 10.3549 1.2375V3.48805C10.2746 3.35742 10.181 3.23345 10.0687 3.12111C9.12392 2.17634 7.3764 2.45445 7.30254 2.4668C7.20231 2.48343 7.12394 2.5618 7.10731 2.66202C7.09496 2.73612 6.81709 4.48341 7.76163 5.42795C8.34825 6.01481 9.24481 6.12976 9.85756 6.12976C10.0635 6.12976 10.2354 6.1167 10.3547 6.10435V19.525H4.79881V13.3745C4.91828 13.387 5.0926 13.4006 5.30231 13.4006C5.91506 13.4006 6.8121 13.2856 7.39896 12.6988C8.3435 11.754 8.06563 10.0067 8.05328 9.93285C8.03665 9.83262 7.95828 9.75425 7.85805 9.73763C7.78395 9.72528 6.03643 9.4474 5.09213 10.3922C4.97694 10.5074 4.88051 10.6347 4.79905 10.7693V5.62959C5.12466 5.37142 6.13784 4.47985 6.13784 3.375C6.13784 2.08704 4.75844 1.08621 4.69977 1.04441C4.61712 0.985513 4.50621 0.985513 4.42356 1.04441C4.3649 1.08645 2.9855 2.08728 2.9855 3.375C2.9855 4.47985 3.99868 5.37142 4.32429 5.62959V8.23805C4.24401 8.10743 4.1502 7.98321 4.0381 7.87111C3.09356 6.9261 1.3458 7.20469 1.27217 7.2168C1.17195 7.23342 1.09358 7.3118 1.07695 7.41203C1.0646 7.48613 0.786725 9.23341 1.73126 10.178C2.31789 10.7648 3.21445 10.8798 3.8272 10.8798C4.03311 10.8798 4.20506 10.8667 4.32429 10.8544V19.525H1.2375C1.1064 19.525 1 19.6312 1 19.7625C1 19.8938 1.1064 20 1.2375 20H19.7625C19.8936 20 20 19.8938 20 19.7625C20 19.6312 19.8936 19.525 19.7625 19.525H16.7287V15.7495C16.8481 15.762 17.0225 15.7756 17.2322 15.7756ZM17.3576 13.1028C17.9756 12.4848 19.1032 12.5204 19.5355 12.5605C19.5758 12.9921 19.6126 14.1183 18.993 14.738C18.3755 15.3555 17.2481 15.3205 16.8154 15.2802C16.7755 14.8479 16.7401 13.7205 17.3576 13.1028ZM16.1739 12.76C15.7421 12.7999 14.6161 12.8372 13.9965 12.2176C13.3787 11.5999 13.4144 10.4717 13.4543 10.0397C13.8865 10.0001 15.012 9.96278 15.6317 10.5822C16.2494 11.1999 16.2138 12.3278 16.1739 12.76ZM11.4586 5.97776C12.0765 5.35979 13.2042 5.39541 13.6364 5.43555C13.6768 5.86709 13.7136 6.99331 13.094 7.61295C12.4762 8.23069 11.3491 8.19577 10.9163 8.15516C10.8762 7.72291 10.8411 6.5955 11.4586 5.97776ZM10.2749 5.63505C9.84308 5.67519 8.71709 5.71224 8.09745 5.0926C7.47971 4.47486 7.51534 3.34674 7.55524 2.91473C7.98701 2.87506 9.113 2.83754 9.73288 3.45718C10.3504 4.07491 10.3148 5.2028 10.2749 5.63505ZM5.42771 10.7278C6.04569 10.1098 7.17334 10.1452 7.60559 10.1855C7.64596 10.6171 7.68278 11.7433 7.06314 12.363C6.4454 12.9807 5.31823 12.9458 4.8855 12.9052C4.8456 12.4729 4.81021 11.3455 5.42771 10.7278ZM4.24401 10.385C3.81248 10.4252 2.68625 10.462 2.06661 9.8426C1.44888 9.22486 1.4845 8.09674 1.5244 7.66472C1.95618 7.62459 3.08216 7.58754 3.7018 8.20718C4.31978 8.82491 4.28391 9.9528 4.24401 10.385ZM3.46003 3.375C3.46003 2.54517 4.23784 1.80987 4.56131 1.53984C4.88479 1.80987 5.6626 2.54494 5.6626 3.375C5.6626 4.20506 4.88479 4.94012 4.56131 5.21016C4.23784 4.94012 3.46003 4.20482 3.46003 3.375ZM15.3899 3.375C15.3899 2.54517 16.1677 1.80987 16.4912 1.53984C16.8147 1.80987 17.5925 2.54494 17.5925 3.375C17.5925 4.20506 16.8147 4.94012 16.4912 5.21016C16.1677 4.94012 15.3899 4.20482 15.3899 3.375Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.5"
                      />
                    </svg>
                    Agriculture
                  </label>
                </div>
              </div>
            </li>

            {/* Property Type */}

            <li>
              <p>Property Type</p>

              <div
                className={activeproperty.Residential + " PropertyType"}
                onChange={inputChange}
              >
                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_two"
                    id="FlatApparment"
                    autoComplete="off"
                    value="FlatApparment"
                    defaultChecked={
                      formvalues.PropertyType_two === "FlatApparment"
                    }
                  />
                  <label className="Rent-label" htmlFor="FlatApparment">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9599 20.9998H1.41504V1L10.9599 2.81745V20.9998ZM2.24476 20.1701H10.1301V3.50415L2.24476 2.00271V20.1701Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M20.4984 20.9996H10.1299V5.11279L20.4984 7.8185V20.9996ZM10.9596 20.1699H19.6686V8.45943L10.9596 6.18681V20.1699Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M20.9133 20.1699H1V20.9996H20.9133V20.1699Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.63699 21.0001L3.63477 20.9967V13.9473H8.63699V21.0001ZM4.46449 20.1673L7.80727 20.17V14.777H4.46449V20.1673Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.6065 20.1702H16.7767V14.777H13.861V20.1671H13.0312V13.9473H17.6065V20.1702Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.1908 13.9473H13.4453V14.777H17.1908V13.9473Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.89825 5.23535H3.91992V6.06507H8.89825V5.23535Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.91094 7.72412H3.93262V8.55384H8.91094V7.72412Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.87286 10.2134H3.89453V11.0431H8.87286V10.2134Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.9998 9.38379H13.0215V10.2135H17.9998V9.38379Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M18.0201 11.873H13.0312V12.7028H18.0201V11.873Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                    </svg>
                    Flat/Apparment
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_two"
                    id="IndependentHouse"
                    autoComplete="off"
                    value="IndependentHouse"
                    defaultChecked={
                      formvalues.PropertyType_two === "IndependentHouse"
                    }
                  />
                  <label className=" Rent-label" htmlFor="IndependentHouse">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21H1L1.01058 6.7192L2.32609 1H19.6646L21 6.83801V21ZM1.83333 20.1667H20.1667V6.88542L19.0013 1.83333H2.98934L1.83333 6.85999V20.1667Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M20.5835 6.4165H1.53809V7.24984H20.5835V6.4165Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M8.5 21.0002H3.5V16.8335C3.5 15.4549 4.62142 14.3335 6 14.3335C7.37858 14.3335 8.5 15.4549 8.5 16.8335V21.0002ZM4.33333 20.1668H7.66667V16.8335C7.66667 15.9145 6.91919 15.1668 6 15.1668C5.08081 15.1668 4.33333 15.9145 4.33333 16.8335V20.1668Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M17.2497 15.1665H10.583V10.1665H17.2497V15.1665ZM11.4163 14.3332H16.4163V10.9998H11.4163V14.3332Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M10.9997 10.1665H9.33301V10.9998H10.9997V10.1665Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M18.4997 10.1665H16.833V10.9998H18.4997V10.1665Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                    </svg>
                    Independent House/Villa
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_two"
                    id="OpenPlot"
                    autoComplete="off"
                    value="OpenPlot"
                    defaultChecked={formvalues.PropertyType_two === "OpenPlot"}
                  />
                  <label className="Rent-label" htmlFor="OpenPlot">
                    <svg
                      width="28"
                      height="19"
                      viewBox="0 0 28 19"
                      fill="currentcolor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6104 8.54902H17.8242V5.65536H22.3048V0H12.2573V5.65536H16.738V8.54902H4.24328L0 19H27.8532L23.6104 8.54902ZM13.3436 1.08621H21.2186V4.56915H13.3436V1.08621ZM4.9743 9.63523H16.738V11.8125H17.8242V9.63523H22.8799L26.2407 17.9138H1.61411L4.9743 9.63523Z"
                        fill="#currentcolor"
                      />
                    </svg>
                    Open Plot
                  </label>
                </div>
              </div>

              <div
                className={activeproperty.Commercial + " PropertyType"}
                onChange={inputChange}
              >
                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="CommercialLand"
                    autoComplete="off"
                    value="Commercial_Land"
                    defaultChecked={
                      formvalues.PropertyType_one === "Commercial_Land"
                    }
                  />
                  <label className="Rent-label" htmlFor="CommercialLand">
                    <svg
                      width="25"
                      height="22"
                      viewBox="0 0 25 22"
                      fill="currentcolor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3333 12.6665H16V13.4998H18.8617L22.8617 20.1665H2.47166L6.47165 13.4998H13.5V12.6665H6L1 20.9998H24.3333L19.3333 12.6665Z"
                        fill="currentcolor"
                        stroke="#2C3C53"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M15.1666 16.8333V10.1058C15.6941 10.6542 16.4283 11 17.2499 11C18.8608 11 20.1666 9.69417 20.1666 8.08333C20.1666 6.51333 18.9233 5.24251 17.3691 5.17918C17.5541 4.79585 17.6666 4.37083 17.6666 3.91667C17.6666 2.30583 16.3608 1 14.7499 1C13.1391 1 11.8333 2.30583 11.8333 3.91667C11.8333 4.37083 11.9466 4.79585 12.1307 5.17918C10.5766 5.24251 9.33325 6.51417 9.33325 8.08333C9.33325 9.69417 10.6391 11 12.2499 11C13.0716 11 13.8058 10.6542 14.3333 10.1058V16.8333H15.1666ZM14.0341 9.13833C13.6507 9.78166 12.9841 10.1667 12.2499 10.1667C11.1008 10.1667 10.1666 9.2325 10.1666 8.08333C10.1666 6.9675 11.0449 6.05667 12.1649 6.01167L13.4324 5.96L12.8816 4.81666C12.7391 4.52082 12.6666 4.2175 12.6666 3.91667C12.6666 2.7675 13.6008 1.83333 14.7499 1.83333C15.8991 1.83333 16.8333 2.7675 16.8333 3.91667C16.8333 4.2175 16.7608 4.52082 16.6183 4.81666L16.0674 5.96L17.3349 6.01167C18.4557 6.05751 19.3333 6.9675 19.3333 8.08333C19.3333 9.2325 18.3991 10.1667 17.2499 10.1667C16.5158 10.1667 15.8491 9.78166 15.4658 9.13833L14.7499 7.9325L14.0341 9.13833Z"
                        fill="currentcolor"
                        stroke="#2C3C53"
                        strokeWidth="0.4"
                      />
                    </svg>
                    Commercial Land
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="IndustrialSpace"
                    autoComplete="off"
                    value="Industrial_Space"
                    defaultChecked={
                      formvalues.PropertyType_one === "Industrial_Space"
                    }
                  />
                  <label className=" Rent-label" htmlFor="IndustrialSpace">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9599 20.9998H1.41504V1L10.9599 2.81745V20.9998ZM2.24476 20.1701H10.1301V3.50415L2.24476 2.00271V20.1701Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M20.4984 20.9996H10.1299V5.11279L20.4984 7.8185V20.9996ZM10.9596 20.1699H19.6686V8.45943L10.9596 6.18681V20.1699Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M20.9133 20.1699H1V20.9996H20.9133V20.1699Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.63699 21.0001L3.63477 20.9967V13.9473H8.63699V21.0001ZM4.46449 20.1673L7.80727 20.17V14.777H4.46449V20.1673Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.6065 20.1702H16.7767V14.777H13.861V20.1671H13.0312V13.9473H17.6065V20.1702Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.1908 13.9473H13.4453V14.777H17.1908V13.9473Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.89825 5.23535H3.91992V6.06507H8.89825V5.23535Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.91094 7.72412H3.93262V8.55384H8.91094V7.72412Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M8.87286 10.2134H3.89453V11.0431H8.87286V10.2134Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M17.9998 9.38379H13.0215V10.2135H17.9998V9.38379Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                      <path
                        d="M18.0201 11.873H13.0312V12.7028H18.0201V11.873Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.2"
                      />
                    </svg>
                    Industrial Space
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="IndustrialLand"
                    autoComplete="off"
                    value="Industrial_Land"
                    defaultChecked={
                      formvalues.PropertyType_one === "Industrial_Land"
                    }
                  />
                  <label className=" Rent-label" htmlFor="IndustrialLand">
                    <svg
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5117 19.1922L19.3764 11.805C19.2813 11.5912 19.0676 11.4487 18.83 11.4487H13.0343V12.6126H18.45L21.0866 18.8122H1.46661L4.10319 12.6126H9.51887V11.4487H3.69939C3.46186 11.4487 3.24808 11.5912 3.15307 11.805L0.0414331 19.1922C-0.0298258 19.3585 -0.00607284 19.5722 0.088939 19.7385C0.183951 19.9048 0.373975 19.9998 0.587751 19.9998H21.9654C22.1554 19.9998 22.3455 19.9048 22.4642 19.7385C22.5592 19.5722 22.583 19.3585 22.5117 19.1922Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M5.97957 8.14727H10.6827V15.2257C10.6827 15.5582 10.9439 15.8195 11.2765 15.8195C11.609 15.8195 11.8703 15.5582 11.8703 15.2257V8.14727H16.5734C16.9059 8.14727 17.1672 7.88599 17.1672 7.55344V0.593824C17.1672 0.261283 16.9059 0 16.5734 0H5.97957C5.64702 0 5.38574 0.261283 5.38574 0.593824V7.55344C5.38574 7.88599 5.64702 8.14727 5.97957 8.14727ZM6.54964 1.18765H15.9796V6.98337H6.54964V1.18765Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M8.40242 3.49185H14.1269C14.4594 3.49185 14.7207 3.23057 14.7207 2.89802C14.7207 2.56548 14.4594 2.3042 14.1269 2.3042H8.40242C8.06988 2.3042 7.80859 2.56548 7.80859 2.89802C7.83235 3.23057 8.09363 3.49185 8.40242 3.49185Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M14.7207 5.22566C14.7207 4.89312 14.4594 4.63184 14.1269 4.63184H8.40242C8.06988 4.63184 7.80859 4.89312 7.80859 5.22566C7.80859 5.5582 8.06988 5.81948 8.40242 5.81948H14.1269C14.4594 5.81948 14.7207 5.5582 14.7207 5.22566Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Industrial Land
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="Godown"
                    autoComplete="off"
                    value="Godown"
                    defaultChecked={formvalues.PropertyType_one === "Godown"}
                  />
                  <label className=" Rent-label" htmlFor="Godown">
                    <svg
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.4623 20.2141V8.8352L24.5723 10.3832L25.0343 9.75447L13.0981 1L1.15718 9.75447L1.6192 10.3832L3.72922 8.8352V20.2141H1V20.9952H8.02548V12.4122H18.1708V21H25.1962V20.2189H22.4623V20.2141ZM18.9519 20.2141V11.6311H7.24434V20.2189H4.51036V8.26363L13.0981 1.9669L21.6859 8.26363V20.2141H18.9519Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M9.97827 20.9953H16.2226V14.751H9.97827V20.9953ZM12.7075 15.5321H13.4886V16.3133H12.7075V15.5321ZM10.7546 15.5321H11.9264V17.0944H14.2698V15.5321H15.4415V20.2142H10.7594V15.5321H10.7546Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M13.0981 4.99609C12.0217 4.99609 11.1453 5.87249 11.1453 6.94894C11.1453 8.02539 12.0217 8.90179 13.0981 8.90179C14.1746 8.90179 15.051 8.02539 15.051 6.94894C15.051 5.87249 14.1746 4.99609 13.0981 4.99609ZM13.0981 8.11588C12.4503 8.11588 11.9264 7.59195 11.9264 6.94418C11.9264 6.2964 12.4503 5.77247 13.0981 5.77247C13.7459 5.77247 14.2698 6.2964 14.2698 6.94418C14.2698 7.59195 13.7459 8.11588 13.0981 8.11588Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                    </svg>
                    Godown
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="CommercialShop"
                    autoComplete="off"
                    value="CommercialShop_showroom"
                    defaultChecked={
                      formvalues.PropertyType_one === "CommercialShop_showroom"
                    }
                  />
                  <label className=" Rent-label" htmlFor="CommercialShop">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21H1L1.01058 6.7192L2.32609 1H19.6646L21 6.83801V21ZM1.83333 20.1667H20.1667V6.88542L19.0013 1.83333H2.98934L1.83333 6.85999V20.1667Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M20.5835 6.4165H1.53809V7.24984H20.5835V6.4165Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M8.5 21.0002H3.5V16.8335C3.5 15.4549 4.62142 14.3335 6 14.3335C7.37858 14.3335 8.5 15.4549 8.5 16.8335V21.0002ZM4.33333 20.1668H7.66667V16.8335C7.66667 15.9145 6.91919 15.1668 6 15.1668C5.08081 15.1668 4.33333 15.9145 4.33333 16.8335V20.1668Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M17.2497 15.1665H10.583V10.1665H17.2497V15.1665ZM11.4163 14.3332H16.4163V10.9998H11.4163V14.3332Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M10.9997 10.1665H9.33301V10.9998H10.9997V10.1665Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                      <path
                        d="M18.4997 10.1665H16.833V10.9998H18.4997V10.1665Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.4"
                      />
                    </svg>
                    Commercial Shop/showroom
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="CommercialOffice"
                    autoComplete="off"
                    value="Commercial_Office_Space"
                    defaultChecked={
                      formvalues.PropertyType_one === "Commercial_Office_Space"
                    }
                  />
                  <label className=" Rent-label" htmlFor="CommercialOffice">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.697 18.4577H19.7886V7.35949C19.7886 7.23432 19.7117 7.12201 19.5949 7.07688L13.8416 4.85141V1.30303C13.8416 1.13568 13.706 1 13.5386 1H2.51441C2.34706 1 2.21138 1.13568 2.21138 1.30303V18.4577H1.30303C1.13568 18.4577 1 18.5934 1 18.7607V20.697C1 20.8643 1.13568 21 1.30303 21H20.697C20.8643 21 21 20.8643 21 20.697V18.7607C21 18.5934 20.8643 18.4577 20.697 18.4577ZM19.1826 7.56723V18.4577H13.8416V5.50123L19.1826 7.56723ZM2.81744 1.60606H13.2356V18.4577H10.8039V12.0424C10.8039 11.8751 10.6683 11.7394 10.5009 11.7394H5.55197C5.38462 11.7394 5.24893 11.8751 5.24893 12.0424V18.4577H2.81744V1.60606ZM5.855 18.4577V12.3454H10.1979V18.4577H5.855ZM20.3939 20.3939H1.60606V19.0637H20.3939V20.3939Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M4.3836 5.73964H6.93464C7.10199 5.73964 7.23767 5.60396 7.23767 5.43661V2.91338C7.23767 2.74603 7.10199 2.61035 6.93464 2.61035H4.3836C4.21625 2.61035 4.08057 2.74603 4.08057 2.91338V5.43661C4.08057 5.60396 4.21625 5.73964 4.3836 5.73964ZM4.68663 3.21641H6.63161V5.13358H4.68663V3.21641Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M9.11846 5.73964H11.6695C11.8369 5.73964 11.9725 5.60396 11.9725 5.43661V2.91338C11.9725 2.74603 11.8369 2.61035 11.6695 2.61035H9.11846C8.95111 2.61035 8.81543 2.74603 8.81543 2.91338V5.43661C8.81543 5.60396 8.95111 5.73964 9.11846 5.73964ZM9.42149 3.21641H11.3665V5.13358H9.42149V3.21641Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M6.93464 10.1487C7.10199 10.1487 7.23767 10.013 7.23767 9.84564V7.32256C7.23767 7.15521 7.10199 7.01953 6.93464 7.01953H4.3836C4.21625 7.01953 4.08057 7.15521 4.08057 7.32256V9.84564C4.08057 10.013 4.21625 10.1487 4.3836 10.1487H6.93464ZM4.68663 7.62559H6.63161V9.54261H4.68663V7.62559Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M9.11846 10.1487H11.6695C11.8369 10.1487 11.9725 10.013 11.9725 9.84564V7.32256C11.9725 7.15521 11.8369 7.01953 11.6695 7.01953H9.11846C8.95111 7.01953 8.81543 7.15521 8.81543 7.32256V9.84564C8.81543 10.013 8.95111 10.1487 9.11846 10.1487ZM9.42149 7.62559H11.3665V9.54261H9.42149V7.62559Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M15.4957 9.0626H17.5284C17.6957 9.0626 17.8314 8.92692 17.8314 8.75957C17.8314 8.59223 17.6957 8.45654 17.5284 8.45654H15.4957C15.3283 8.45654 15.1926 8.59223 15.1926 8.75957C15.1926 8.92692 15.3283 9.0626 15.4957 9.0626Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M15.4957 11.7101H17.5284C17.6957 11.7101 17.8314 11.5744 17.8314 11.407C17.8314 11.2397 17.6957 11.104 17.5284 11.104H15.4957C15.3283 11.104 15.1926 11.2397 15.1926 11.407C15.1926 11.5744 15.3283 11.7101 15.4957 11.7101Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M15.4957 14.3575H17.5284C17.6957 14.3575 17.8314 14.2218 17.8314 14.0545C17.8314 13.8871 17.6957 13.7515 17.5284 13.7515H15.4957C15.3283 13.7515 15.1926 13.8871 15.1926 14.0545C15.1926 14.2218 15.3283 14.3575 15.4957 14.3575Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M17.5284 16.3984H15.4957C15.3283 16.3984 15.1926 16.5341 15.1926 16.7015C15.1926 16.8688 15.3283 17.0045 15.4957 17.0045H17.5284C17.6957 17.0045 17.8314 16.8688 17.8314 16.7015C17.8314 16.5341 17.6957 16.3984 17.5284 16.3984Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                    </svg>
                    Commercial Office Space
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_one"
                    id="IndustrialShed"
                    autoComplete="off"
                    value="IndustrialShed"
                    defaultChecked={
                      formvalues.PropertyType_one === "IndustrialShed"
                    }
                  />
                  <label className=" Rent-label" htmlFor="IndustrialShed">
                    <svg
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="currentcolor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.75 0C10.1045 0.00413552 6.60958 1.45412 4.03185 4.03185C1.45412 6.60958 0.00413563 10.1045 1.12645e-07 13.75V19.375C-4.91858e-05 19.4571 0.0160833 19.5384 0.0474751 19.6142C0.0788668 19.6901 0.124902 19.759 0.182948 19.8171C0.240995 19.8751 0.309914 19.9211 0.385765 19.9525C0.461615 19.9839 0.54291 20 0.625 20H26.875C26.9571 20 27.0384 19.9839 27.1142 19.9525C27.1901 19.9211 27.259 19.8751 27.3171 19.8171C27.3751 19.759 27.4211 19.6901 27.4525 19.6142C27.4839 19.5384 27.5 19.4571 27.5 19.375V13.75C27.4959 10.1045 26.0459 6.60958 23.4682 4.03185C20.8904 1.45412 17.3955 0.00413552 13.75 0ZM6.25 18.75V11.25H13.125V18.75H6.25ZM14.375 18.75V11.25H21.25V18.75H14.375ZM26.25 18.75H22.5V10.625C22.5 10.5429 22.4839 10.4616 22.4525 10.3858C22.4211 10.3099 22.3751 10.241 22.3171 10.1829C22.259 10.1249 22.1901 10.0789 22.1142 10.0475C22.0384 10.0161 21.9571 9.99995 21.875 10H5.625C5.54291 9.99995 5.46162 10.0161 5.38576 10.0475C5.30991 10.0789 5.24099 10.1249 5.18295 10.1829C5.1249 10.241 5.07887 10.3099 5.04747 10.3858C5.01608 10.4616 4.99995 10.5429 5 10.625V18.75H1.25V13.75C1.25 10.4348 2.56696 7.25537 4.91117 4.91117C7.25537 2.56696 10.4348 1.25 13.75 1.25C17.0652 1.25 20.2446 2.56696 22.5888 4.91117C24.933 7.25537 26.25 10.4348 26.25 13.75V18.75Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M18.125 6.25H9.375C9.20924 6.25 9.05027 6.31585 8.93306 6.43306C8.81585 6.55027 8.75 6.70924 8.75 6.875C8.75 7.04076 8.81585 7.19973 8.93306 7.31694C9.05027 7.43415 9.20924 7.5 9.375 7.5H18.125C18.2908 7.5 18.4497 7.43415 18.5669 7.31694C18.6842 7.19973 18.75 7.04076 18.75 6.875C18.75 6.70924 18.6842 6.55027 18.5669 6.43306C18.4497 6.31585 18.2908 6.25 18.125 6.25Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M10.625 5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75H10.625C10.4592 3.75 10.3003 3.81585 10.1831 3.93306C10.0658 4.05027 10 4.20924 10 4.375C10 4.54076 10.0658 4.69973 10.1831 4.81694C10.3003 4.93415 10.4592 5 10.625 5Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Industrial Shed
                  </label>
                </div>
              </div>

              <div
                className={activeproperty.Agriculture + " PropertyType"}
                onChange={inputChange}
              >
                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_three"
                    id="Agri_land"
                    autoComplete="off"
                    value="Agri_land"
                    defaultChecked={
                      formvalues.PropertyType_three === "Agri_land"
                    }
                  />
                  <label className="Rent-label" htmlFor="Agri_land">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentcolor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.96875 1.83586C8.05163 1.83586 8.13111 1.80293 8.18972 1.74433C8.24832 1.68572 8.28125 1.60624 8.28125 1.52336V0.625H8.90625V2.8125C8.90625 2.89538 8.93917 2.97487 8.99778 3.03347C9.05638 3.09208 9.13587 3.125 9.21875 3.125C9.30163 3.125 9.38112 3.09208 9.43972 3.03347C9.49833 2.97487 9.53125 2.89538 9.53125 2.8125V0.3125C9.53125 0.229621 9.49832 0.150138 9.43972 0.0915337C9.38111 0.0329295 9.30163 4.14363e-06 9.21875 0L7.96875 0C7.88587 4.14363e-06 7.80639 0.0329295 7.74778 0.0915337C7.68918 0.150138 7.65625 0.229621 7.65625 0.3125V1.52336C7.65625 1.60624 7.68918 1.68572 7.74778 1.74433C7.80639 1.80293 7.88587 1.83586 7.96875 1.83586Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M0.3125 9.6875H0.639063C0.630027 9.6359 0.625323 9.58363 0.625 9.53125V9.0625H0.3125C0.22962 9.0625 0.150134 9.09542 0.0915291 9.15403C0.032924 9.21263 0 9.29212 0 9.375C0 9.45788 0.032924 9.53737 0.0915291 9.59597C0.150134 9.65458 0.22962 9.6875 0.3125 9.6875Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M5.33855 10.625H0.3125C0.22962 10.625 0.150134 10.6579 0.0915291 10.7165C0.032924 10.7751 0 10.8546 0 10.9375C0 11.0204 0.032924 11.0999 0.0915291 11.1585C0.150134 11.2171 0.22962 11.25 0.3125 11.25H5.20698L5.0096 12.1875H0.3125C0.22962 12.1875 0.150134 12.2204 0.0915291 12.279C0.032924 12.3376 0 12.4171 0 12.5C0 12.5829 0.032924 12.6624 0.0915291 12.721C0.150134 12.7796 0.22962 12.8125 0.3125 12.8125H4.87803L4.68065 13.75H0.3125C0.22962 13.75 0.150134 13.7829 0.0915291 13.8415C0.032924 13.9001 0 13.9796 0 14.0625C0 14.1454 0.032924 14.2249 0.0915291 14.2835C0.150134 14.3421 0.22962 14.375 0.3125 14.375H4.54907L4.35172 15.3125H0.3125C0.22962 15.3125 0.150134 15.3454 0.0915291 15.404C0.032924 15.4626 0 15.5421 0 15.625C0 15.7079 0.032924 15.7874 0.0915291 15.846C0.150134 15.9046 0.22962 15.9375 0.3125 15.9375H4.22013L4.02276 16.875H0.3125C0.22962 16.875 0.150134 16.9079 0.0915291 16.9665C0.032924 17.0251 0 17.1046 0 17.1875C0 17.2704 0.032924 17.3499 0.0915291 17.4085C0.150134 17.4671 0.22962 17.5 0.3125 17.5H3.89118L3.69382 18.4375H0.3125C0.22962 18.4375 0.150134 18.4704 0.0915291 18.529C0.032924 18.5876 0 18.6671 0 18.75C0 18.8329 0.032924 18.9124 0.0915291 18.971C0.150134 19.0296 0.22962 19.0625 0.3125 19.0625H3.56224L3.44421 19.6231C3.42714 19.7042 3.44298 19.7888 3.48825 19.8582C3.53352 19.9276 3.60451 19.9762 3.68561 19.9933C3.76661 20.0094 3.8507 19.9931 3.91988 19.948C3.98906 19.9029 4.03784 19.8325 4.05579 19.7519L6.01013 10.4688H5.37145L5.33855 10.625Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M6.56418 19.6548C6.5556 19.7372 6.58007 19.8196 6.63222 19.8839C6.68437 19.9483 6.75994 19.9893 6.84231 19.998C6.92469 20.0067 7.00714 19.9823 7.07155 19.9302C7.13596 19.8781 7.17706 19.8026 7.18583 19.7202L8.15967 10.4688H7.53113L6.56418 19.6548Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M0.3125 8.125H0.625V7.5H0.3125C0.22962 7.5 0.150134 7.53292 0.0915291 7.59153C0.032924 7.65013 0 7.72962 0 7.8125C0 7.89538 0.032924 7.97487 0.0915291 8.03347C0.150134 8.09208 0.22962 8.125 0.3125 8.125Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M5.61828 1.61237C5.55948 1.54848 5.48806 1.49747 5.40855 1.46258C5.32903 1.42769 5.24314 1.40968 5.1563 1.40967C5.06947 1.40966 4.98357 1.42766 4.90405 1.46254C4.82453 1.49742 4.7531 1.54841 4.69429 1.6123L1.41319 5.24801C1.30792 5.36461 1.24976 5.51618 1.25 5.67327V9.53123C1.25 9.61411 1.28293 9.69359 1.34153 9.75219C1.40014 9.8108 1.47962 9.84372 1.5625 9.84373H8.75C8.83288 9.84372 8.91236 9.8108 8.97097 9.75219C9.02957 9.69359 9.0625 9.61411 9.0625 9.53123V5.67327C9.06277 5.51627 9.00465 5.36478 8.89946 5.24824L5.61828 1.61237ZM4.6875 9.21873V7.34373H5.625V9.21873H4.6875ZM8.4375 9.21873H6.25V7.34373C6.24981 7.17803 6.1839 7.01917 6.06673 6.902C5.94956 6.78483 5.7907 6.71892 5.625 6.71873H4.6875C4.5218 6.71892 4.36294 6.78483 4.24577 6.902C4.1286 7.01917 4.06269 7.17803 4.0625 7.34373V9.21873H1.87516L1.87706 5.66694L5.15419 2.031L8.4375 5.67327V9.21873Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M9.89762 5.23134C9.928 5.20375 9.95265 5.17044 9.97016 5.13332C9.98766 5.09621 9.99769 5.056 9.99966 5.01501C10.0016 4.97402 9.9955 4.93304 9.98163 4.89441C9.96776 4.85579 9.94642 4.82027 9.91883 4.7899L5.8455 0.306488C5.75747 0.211659 5.65083 0.136015 5.53223 0.0842867C5.41363 0.0325585 5.28564 0.00585937 5.15625 0.00585938C5.02687 0.00585937 4.89887 0.0325585 4.78028 0.0842867C4.66168 0.136015 4.55504 0.211659 4.46701 0.306488L0.39368 4.7899C0.366087 4.82028 0.344748 4.85579 0.330881 4.89442C0.317014 4.93304 0.310891 4.97402 0.31286 5.01501C0.31483 5.056 0.324854 5.0962 0.34236 5.13332C0.359866 5.17044 0.384512 5.20374 0.41489 5.23134C0.445268 5.25893 0.480783 5.28027 0.519407 5.29413C0.558032 5.308 0.59901 5.31412 0.640001 5.31216C0.680992 5.31019 0.721194 5.30016 0.758311 5.28265C0.795428 5.26515 0.828734 5.2405 0.856326 5.21012L4.92966 0.726713C4.95867 0.695654 4.99375 0.670891 5.03273 0.65396C5.07171 0.63703 5.11375 0.628293 5.15625 0.628293C5.19875 0.628293 5.24079 0.63703 5.27977 0.65396C5.31875 0.670891 5.35384 0.695654 5.38285 0.726713L9.45615 5.21009C9.51281 5.26985 9.59036 5.30542 9.67262 5.30938C9.75487 5.31334 9.83548 5.28538 9.89762 5.23134Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M16.875 7.62614V8.125H19.6875C19.7704 8.125 19.8499 8.09208 19.9085 8.03347C19.9671 7.97487 20 7.89538 20 7.8125C20 7.72962 19.9671 7.65013 19.9085 7.59153C19.8499 7.53292 19.7704 7.5 19.6875 7.5H17.1815C17.0817 7.54754 16.9794 7.58964 16.875 7.62614Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M19.6875 9.6875C19.7704 9.6875 19.8499 9.65458 19.9085 9.59597C19.9671 9.53737 20 9.45788 20 9.375C20 9.29212 19.9671 9.21263 19.9085 9.15403C19.8499 9.09542 19.7704 9.0625 19.6875 9.0625H16.25V7.1458C17.8393 6.8543 18.1755 5.57508 18.1224 4.88975C18.1333 3.93767 17.9676 2.99181 17.6337 2.10013C17.3627 1.33534 16.9635 0 15.9493 0H15.9311C14.8926 1.40625e-05 14.5226 1.31676 14.2413 2.10014C13.9074 2.99182 13.7417 3.93767 13.7526 4.88975C13.6995 5.57508 14.0357 6.8543 15.625 7.1458V9.0625H14.3325L14.1351 8.125H15V7.62614C14.8956 7.58964 14.7933 7.54754 14.6935 7.5H9.6875V19.6875C9.6875 19.7704 9.72042 19.8499 9.77903 19.9085C9.83763 19.9671 9.91712 20 10 20C10.0829 20 10.1624 19.9671 10.221 19.9085C10.2796 19.8499 10.3125 19.7704 10.3125 19.6875V8.125H11.5936L12.8142 19.7202C12.8245 19.8019 12.866 19.8765 12.93 19.9283C12.9941 19.9802 13.0757 20.0052 13.1577 19.9983C13.2402 19.9896 13.3158 19.9486 13.3679 19.8841C13.4201 19.8197 13.4445 19.7372 13.4358 19.6548L12.2222 8.125H13.4964L15.9442 19.7519C15.9632 19.8319 16.0121 19.9017 16.0811 19.9466C16.15 19.9915 16.2335 20.0082 16.3144 19.9933C16.3955 19.9762 16.4665 19.9276 16.5118 19.8582C16.557 19.7888 16.5729 19.7042 16.5558 19.6231L16.4378 19.0625H19.6875C19.7704 19.0625 19.8499 19.0296 19.9085 18.971C19.9671 18.9124 20 18.8329 20 18.75C20 18.6671 19.9671 18.5876 19.9085 18.529C19.8499 18.4704 19.7704 18.4375 19.6875 18.4375H16.3062L16.1088 17.5H19.6875C19.7704 17.5 19.8499 17.4671 19.9085 17.4085C19.9671 17.3499 20 17.2704 20 17.1875C20 17.1046 19.9671 17.0251 19.9085 16.9665C19.8499 16.9079 19.7704 16.875 19.6875 16.875H15.9772L15.7799 15.9375H19.6875C19.7704 15.9375 19.8499 15.9046 19.9085 15.846C19.9671 15.7874 20 15.7079 20 15.625C20 15.5421 19.9671 15.4626 19.9085 15.404C19.8499 15.3454 19.7704 15.3125 19.6875 15.3125H15.6483L15.4509 14.375H19.6875C19.7704 14.375 19.8499 14.3421 19.9085 14.2835C19.9671 14.2249 20 14.1454 20 14.0625C20 13.9796 19.9671 13.9001 19.9085 13.8415C19.8499 13.7829 19.7704 13.75 19.6875 13.75H15.3193L15.122 12.8125H19.6875C19.7704 12.8125 19.8499 12.7796 19.9085 12.721C19.9671 12.6624 20 12.5829 20 12.5C20 12.4171 19.9671 12.3376 19.9085 12.279C19.8499 12.2204 19.7704 12.1875 19.6875 12.1875H14.9904L14.793 11.25H19.6875C19.7704 11.25 19.8499 11.2171 19.9085 11.1585C19.9671 11.0999 20 11.0204 20 10.9375C20 10.8546 19.9671 10.7751 19.9085 10.7165C19.8499 10.6579 19.7704 10.625 19.6875 10.625H14.6614L14.4641 9.6875H19.6875ZM14.3767 4.92638C14.3778 4.91425 14.3781 4.90207 14.3777 4.88991C14.3744 3.96358 14.5433 3.04471 14.876 2.18018C15.0539 1.67496 15.4234 0.625 15.937 0.625H15.9434C16.4516 0.625 16.8212 1.67503 16.999 2.18018C17.3312 3.04483 17.5002 3.96362 17.4973 4.88991C17.4969 4.90105 17.4973 4.91379 17.4982 4.92485C17.5092 5.06366 17.5575 6.20771 16.25 6.50966V5.20676L16.7928 4.61457C16.8207 4.58434 16.8423 4.54892 16.8564 4.51033C16.8705 4.47174 16.8769 4.43075 16.8751 4.3897C16.8734 4.34865 16.8636 4.30834 16.8462 4.27109C16.8289 4.23383 16.8044 4.20037 16.7741 4.1726C16.7438 4.14483 16.7084 4.12331 16.6697 4.10926C16.6311 4.09522 16.5901 4.08892 16.5491 4.09075C16.508 4.09257 16.4677 4.10247 16.4305 4.11988C16.3933 4.13729 16.3599 4.16187 16.3322 4.19221L16.25 4.28185V4.0625C16.25 3.97962 16.2171 3.90013 16.1585 3.84153C16.0999 3.78292 16.0204 3.75 15.9375 3.75C15.8546 3.75 15.7751 3.78292 15.7165 3.84153C15.6579 3.90013 15.625 3.97962 15.625 4.0625V4.96368L15.5428 4.87404C15.5151 4.84379 15.4817 4.8193 15.4445 4.80197C15.4073 4.78464 15.367 4.7748 15.326 4.77302C15.285 4.77125 15.2441 4.77756 15.2055 4.79161C15.167 4.80565 15.1316 4.82716 15.1013 4.85489C15.0711 4.88262 15.0466 4.91604 15.0292 4.95324C15.0119 4.99044 15.0021 5.03068 15.0003 5.07168C14.9985 5.11268 15.0048 5.15363 15.0189 5.19219C15.0329 5.23074 15.0544 5.26616 15.0822 5.29641L15.625 5.88859V6.50966C14.3175 6.20772 14.3658 5.06376 14.3767 4.92638Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Agri land
                  </label>
                </div>

                <div className="Rent-item-box">
                  <input
                    type="radio"
                    className="btn-check Rent-button"
                    name="PropertyType_three"
                    id="Farm_house"
                    autoComplete="off"
                    value="Farm_house"
                    defaultChecked={
                      formvalues.PropertyType_three === "Farm_house"
                    }
                  />
                  <label className="Rent-label" htmlFor="Farm_house">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="currentcolor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.71777 11.5878V17.3389C6.71777 17.5302 6.87304 17.6855 7.06435 17.6855H13.0202C13.2115 17.6855 13.3668 17.5302 13.3668 17.3389V11.5878C13.3668 11.3965 13.2115 11.2412 13.0202 11.2412H7.06435C6.87304 11.2412 6.71777 11.3965 6.71777 11.5878ZM10.389 11.9344H12.6739V14.1167H10.389V11.9344ZM10.389 14.8098H12.6739V16.9921H10.389V14.8098ZM7.41093 11.9344H9.69581V14.1167H7.41093V11.9344ZM7.41093 14.8098H9.69581V16.9921H7.41093V14.8098Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M26.7386 14.1105C26.7386 12.0652 25.0748 10.4011 23.0295 10.4011C20.9838 10.4011 19.3199 12.0652 19.3199 14.1105C19.3199 16.0388 20.7991 17.6266 22.6829 17.8022V20.3066H16.829V11.7207L16.9413 11.833C17.009 11.9007 17.0974 11.9344 17.1864 11.9344C17.2749 11.9344 17.3638 11.9007 17.4315 11.833L18.984 10.281C19.0489 10.2161 19.0854 10.128 19.0854 10.0359C19.0854 9.94413 19.0489 9.85586 18.984 9.79071L16.8151 7.62181C16.835 7.57768 16.8468 7.52985 16.8468 7.48018V1.52456C16.8468 1.33325 16.6915 1.17798 16.5002 1.17798H13.0205C12.8292 1.17798 12.6739 1.33325 12.6739 1.52456V3.48112L10.2943 1.1015C10.2423 1.04952 10.177 1.01856 10.1086 1.0077C9.99789 0.983898 9.87705 1.01532 9.79063 1.1015L1.10143 9.79094C1.03651 9.85586 1 9.94413 1 10.0361C1 10.128 1.03651 10.2161 1.10143 10.2812L2.65341 11.8332C2.78881 11.9686 3.00808 11.9686 3.14348 11.8332L3.25623 11.7205V20.6534C3.25623 20.8447 3.4115 21 3.60281 21H16.4824C16.4882 21 16.4942 20.9984 16.4999 20.9982V21H24.7123V20.3068H23.3761V17.8025C25.2592 17.6266 26.7386 16.0388 26.7386 14.1105ZM13.3671 1.87114H16.1534V6.96031L13.3671 4.17427V1.87114ZM16.1358 20.3064H3.94939V11.0268L10.0425 4.93375L16.1358 11.0273V20.3064ZM10.2876 4.19854C10.2227 4.13361 10.1344 4.0971 10.0425 4.0971C9.95052 4.0971 9.86249 4.13361 9.79733 4.19854L2.89856 11.0978L1.83664 10.0359L10.0427 1.82978L18.2488 10.0359L17.1864 11.0978L10.2876 4.19854ZM22.6829 14.1105V17.1051C21.1825 16.9325 20.0131 15.6562 20.0131 14.1105C20.0131 12.4474 21.3659 11.0943 23.0295 11.0943C24.6924 11.0943 26.0454 12.4471 26.0454 14.1105C26.0454 15.6562 24.8761 16.9323 23.3761 17.1051V14.1105H22.6829Z"
                        fill="currentcolor"
                        stroke="currentcolor"
                        strokeWidth="0.3"
                      />
                    </svg>
                    Farm house
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="row Advance-Details-sec box">
        <div className="col-12 col-lg-4 box-left">
          <p>Advance Details</p>
          <span>Add informative details to understnad buyer</span>
        </div>

        <div className="col-lg-8 col-12">
          <div className="address-form">
            <Form.Group className="City-item" controlId="City_input">
              <Form.Label className="address-lable">City</Form.Label>
              <Form.Control
                className="address-input"
                type="text"
                name="City_Name"
                onChange={inputChange}
                placeholder="Enter city of your property"
                value={formvalues.City_Name}
                required
                focused={focused.toString()}
                onBlur={handleFocus}
              />
              <p className="error">{fielderoor.City_Error}</p>
            </Form.Group>

            <Form.Group
              className="City-item"
              controlId="project_building_input"
            >
              <Form.Label className="address-lable">
                Project/Building Name
              </Form.Label>
              <Form.Control
                className="address-input"
                type="text"
                name="ProjectBuilding_Name"
                onChange={inputChange}
                placeholder="Enter city of your property"
                value={formvalues.ProjectBuilding_Name}
                required
                focused={focused.toString()}
                onBlur={handleFocus}
              />
              <span className="error">{fielderoor.ProjectBuilding_Error}</span>
            </Form.Group>

            <Form.Group className="City-item" controlId="locality_input">
              <Form.Label className="address-lable">Locality</Form.Label>
              <Form.Control
                className="address-input"
                type="text"
                name="Locality_Name"
                onChange={inputChange}
                placeholder="Enter city of your property"
                value={formvalues.Locality_Name}
                required
                focused={focused.toString()}
                onBlur={handleFocus}
              />
              <span className="error">{fielderoor.Locality_Error}</span>
            </Form.Group>

            {(formvalues.Rent_Sale === "Rent" ||
              formvalues.Rent_Sale === "sale") &&
            formvalues.Buildingtype === "Commercial" ? (
              <>
                {formvalues.PropertyType_one === "Commercial_Office_Space" ? (
                  ""
                ) : (
                  <div className="Area-Details-box">
                    <div className="d-flex align-items-center">
                      <p className="area-text">
                        {formvalues.PropertyType_one === "Commercial_Land" ||
                        formvalues.PropertyType_one === "Industrial_Land"
                          ? "Plot Area"
                          : "Area Details"}
                      </p>
                      <select className="SqFt-item" name="Proprty" id="Proprty">
                        <option value="volvo">Sq. Ft.</option>
                        <option value="volvo">Sq. Ft.2</option>
                      </select>
                    </div>
                    {formvalues.PropertyType_one === "Commercial_Land" ||
                    formvalues.PropertyType_one === "Industrial_Land" ||
                    formvalues.PropertyType_one === "IndustrialShed" ? (
                      <>
                        <div className="Area-items single_fild">
                          <Form.Group
                            className="City-item"
                            controlId="area_input"
                          >
                            <Form.Label className="Area-lable">Area</Form.Label>
                            <Form.Control
                              className="Area-input"
                              type="number"
                              name="Areaone_Name"
                              onChange={inputChange}
                              placeholder="Enter Value"
                              value={formvalues.Areaone_Name}
                              required
                              focused={focused.toString()}
                              onBlur={handleFocus}
                            />
                            <span className="error">
                              {fielderoor.Areaone_Error}
                            </span>
                          </Form.Group>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="Area-items">
                          <Form.Group
                            className="City-item"
                            controlId="area_input"
                          >
                            <Form.Label className="Area-lable">Area</Form.Label>
                            <Form.Control
                              className="Area-input"
                              type="number"
                              name="Areaone_Name"
                              onChange={inputChange}
                              placeholder="Enter Value"
                              value={formvalues.Areaone_Name}
                              required
                              focused={focused.toString()}
                              onBlur={handleFocus}
                            />
                            <span className="error">
                              {fielderoor.Areaone_Error}
                            </span>
                          </Form.Group>

                          <Form.Group
                            className="City-item"
                            controlId="area_secect_input"
                          >
                            <Form.Label className="Area-lable">Area</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              className="Area-select"
                              name="Area_Name"
                              onChange={inputChange}
                              value={formvalues.Area_Name}
                              required
                              focused={focused.toString()}
                              onBlur={handleFocus}
                            >
                              <option defaultValue="1">One</option>
                              <option defaultValue="2">Two</option>
                              <option defaultValue="3">Three</option>
                            </Form.Select>
                            <span className="error">
                              {fielderoor.Area_Error}
                            </span>
                          </Form.Group>

                          <Form.Group
                            className="City-item displayarea"
                            controlId="display_area"
                          >
                            <Form.Label className="Area-lable">
                              Display Area
                            </Form.Label>

                            <Form.Check
                              type="switch"
                              id="display-custom-switch"
                              label="Visitors can see display area "
                              name="Displayarea_Name"
                              onChange={inputChange}
                            />
                          </Form.Group>
                        </div>
                      </>
                    )}

                    {formvalues.PropertyType_one === "Industrial_Land" ||
                    formvalues.PropertyType_one === "IndustrialShed" ? (
                      ""
                    ) : (
                      <div className="col-12 mt-2">
                        <button className="Add_Area_Details">
                          <AiOutlinePlus />
                          Add More Area Details
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (formvalues.Rent_Sale === "Rent" ||
                formvalues.Rent_Sale === "sale") &&
              formvalues.Buildingtype === "Residential" ? (
              <div className="Area-Details-box">
                <div className="d-flex align-items-center">
                  <p className="area-text">
                    {formvalues.Buildingtype === "Residential" &&
                    formvalues.PropertyType_two === "OpenPlot"
                      ? "Area Details"
                      : "Plot Details"}
                  </p>
                  <select className="SqFt-item" name="Proprty" id="Proprty">
                    <option value="volvo">Sq. Ft.</option>
                    <option value="volvo">Sq. Ft.2</option>
                  </select>
                </div>
                {formvalues.Buildingtype === "Residential" &&
                formvalues.PropertyType_two === "OpenPlot" ? (
                  <>
                    <div className="Area-items single_fild">
                      <Form.Group className="City-item" controlId="area_input">
                        <Form.Label className="Area-lable">Area</Form.Label>
                        <Form.Control
                          className="Area-input"
                          type="number"
                          name="Areaone_Name"
                          onChange={inputChange}
                          placeholder="Enter Value"
                          value={formvalues.Areaone_Name}
                          required
                          focused={focused.toString()}
                          onBlur={handleFocus}
                        />
                        <span className="error">
                          {fielderoor.Areaone_Error}
                        </span>
                      </Form.Group>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="Area-items">
                      <Form.Group className="City-item" controlId="area_input">
                        <Form.Label className="Area-lable">Area</Form.Label>
                        <Form.Control
                          className="Area-input"
                          type="number"
                          name="Areaone_Name"
                          onChange={inputChange}
                          placeholder="Enter Value"
                          value={formvalues.Areaone_Name}
                          required
                          focused={focused.toString()}
                          onBlur={handleFocus}
                        />
                        <span className="error">
                          {fielderoor.Areaone_Error}
                        </span>
                      </Form.Group>

                      <Form.Group
                        className="City-item"
                        controlId="area_secect_input"
                      >
                        <Form.Label className="Area-lable">Area</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          className="Area-select"
                          name="Area_Name"
                          onChange={inputChange}
                          value={formvalues.Area_Name}
                          required
                          focused={focused.toString()}
                          onBlur={handleFocus}
                        >
                          <option defaultValue="1">One</option>
                          <option defaultValue="2">Two</option>
                          <option defaultValue="3">Three</option>
                        </Form.Select>
                        <span className="error">{fielderoor.Area_Error}</span>
                      </Form.Group>

                      <Form.Group
                        className="City-item displayarea"
                        controlId="display_area"
                      >
                        <Form.Label className="Area-lable">
                          Display Area
                        </Form.Label>

                        <Form.Check
                          type="switch"
                          id="display-custom-switch"
                          label="Visitors can see display area "
                          name="Displayarea_Name"
                          onChange={inputChange}
                        />
                      </Form.Group>
                    </div>
                  </>
                )}

                <div className="col-12 mt-2">
                  <button className="Add_Area_Details">
                    <AiOutlinePlus />
                    Add More Area Details
                  </button>
                </div>
              </div>
            ) : (
              <div className="Area-Details-box">
                <div className="d-flex align-items-center">
                  <p className="area-text">Land Area</p>
                  <select className="SqFt-item" name="Proprty" id="Proprty">
                    <option value="volvo">Sq. Ft.</option>
                    <option value="volvo">Sq. Ft.2</option>
                  </select>
                </div>
                <div className="Area-items single_fild">
                  <Form.Group className="City-item" controlId="area_input">
                    <Form.Label className="Area-lable">Area</Form.Label>
                    <Form.Control
                      className="Area-input"
                      type="number"
                      name="Areaone_Name"
                      onChange={inputChange}
                      placeholder="Enter Value"
                      value={formvalues.Areaone_Name}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                    />
                    <span className="error">{fielderoor.Areaone_Error}</span>
                  </Form.Group>
                </div>
              </div>
            )}

            <Form.Group className="City-item" controlId="price_input">
              <Form.Label className="address-lable">Price</Form.Label>
              <Form.Control
                className="address-input"
                type="number"
                name="Price_Name"
                onChange={inputChange}
                placeholder="Please enter the property price  "
                value={formvalues.Price_Name}
                required
                focused={focused.toString()}
                onBlur={handleFocus}
                pattern={fildpattern.Price_Pattern}
              />
              <span className="error">{fielderoor.Price_Error}</span>
            </Form.Group>

            {formvalues.Buildingtype === 'Commercial'  && formvalues.PropertyType_one === "Commercial_Office_Space" ? (
              <div className="Maintance_row">
                <Form.Label className="address-lable">Maintance</Form.Label>
                <div className="Maintance_input">
                  <Form.Group
                    className="City-item me-4"
                    controlId="maintance_input"
                  >
                    <Form.Control
                      className="address-input"
                      type="number"
                      name="Maintance"
                      onChange={inputChange}
                      placeholder="Please enter the property price  "
                      value={formvalues.Maintance}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                      pattern={fildpattern.Maintance_Pattern}
                    />
                    <span className="error">{fielderoor.Maintance_Error}</span>
                  </Form.Group>

                  <Form.Group
                    className="City-item"
                    controlId="maintance_select_input"
                  >
                    <Form.Select
                      aria-label="Default select example"
                      className="Area-select"
                      name="Per_Sq_Ft"
                      onChange={inputChange}
                      value={formvalues.Per_Sq_Ft}
                      required
                      focused={focused.toString()}
                      onBlur={handleFocus}
                    >
                      <option defaultValue="Per Sq.Ft-1">Per Sq.Ft-1</option>
                      <option defaultValue="Per Sq.Ft-2">Per Sq.Ft-2</option>
                      <option defaultValue="Per Sq.Ft-3">Per Sq.Ft-3</option>
                    </Form.Select>
                    <span className="error">
                      {fielderoor.maintance_select_Error}
                    </span>
                  </Form.Group>
                </div>
                <Form.Group
                  className="mt-3"
                  controlId="included_price_checkbox"
                >
                  <Form.Check type="checkbox" label="Included in Price" />
                </Form.Group>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
