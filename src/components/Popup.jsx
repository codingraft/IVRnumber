import { useEffect, useState } from "react";
import Popupimg from "../images/popup.gif";

function Popup() {
  const [show, setShow] = useState(false);


  const handleOpen = () => {
    const timer =  setTimeout(() => {
         setShow(true);
     }, 10000)
      return () => clearTimeout(timer);
 }

 useEffect(() => {
  handleOpen();
}, [])
  function handleClose() {
    setShow((prev) => !prev);
  }

  return (
    <>
      {show && (
        <div className="pop_container">
          <div className="pop_form">
            <div className="cross" onClick={handleClose}>
              <i class="fa-solid fa-xmark"></i>
            </div>

            <div className="pop_gif">
              <img src={Popupimg} alt="logo" />
            <div className="pop_cssaa">
              <input type="tel" placeholder="Mobile No." />

              <button className="submit ds__s">Submit</button>
            </div>
            </div>
         
          </div>
        </div>
      )}
    </>
  );
}
export default Popup;
// render(<Example />);
