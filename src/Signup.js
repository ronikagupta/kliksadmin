import React from 'react'
import './css/index1.css'
import {Link } from "react-router-dom";

/* The following line can be included in your src/index.js or App.js file */

import './App.css';
// import {NavLink} fcrom "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="logo1">
        <svg width="209" height="100" class="kliks-logo-svg" viewBox="0 0 209 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.7195 60.0425L48.4847 33.2268L24 45.589L28.335 48.936L16.8419 64.2102C14.3228 67.5581 14.2374 72.1449 16.6302 75.5841L33.2291 99.4422H48.9604L28.8115 71.3399C28.1885 70.4709 28.208 69.2964 28.8596 68.4486L38.0761 56.4573L42.7195 60.0425Z" fill="#16B396"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M94.6156 0C98.9691 0 102.498 3.52917 102.498 7.88261C102.498 11.4634 97.1654 20.4422 95.2725 23.2957C95.1265 23.5159 94.8799 23.6483 94.6156 23.6483C94.3514 23.6483 94.1048 23.5159 93.9588 23.2957C92.0659 20.4422 86.733 11.4634 86.733 7.88261C86.733 3.52917 90.2622 0 94.6156 0Z" fill="#16B396"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.8485 99.4422V20.5627H72.2368V99.4422H58.8485ZM87.8304 99.4422V37.4194H101.219V99.4422H87.8304ZM205.319 56.488V44.6617C201.525 43.0253 196.765 42.2072 191.038 42.2072C185.087 42.2072 180.141 43.6947 176.199 46.6699C172.257 49.6451 170.286 53.736 170.286 58.9425C170.286 65.9342 174.414 71.2895 182.67 75.0085C182.819 75.0829 183.005 75.1573 183.228 75.2317C183.451 75.306 183.6 75.3804 183.674 75.4548C183.823 75.5291 184.009 75.6035 184.232 75.6779C186.315 76.5705 187.691 77.2027 188.36 77.5746C189.104 77.8721 190.108 78.3928 191.373 79.1366C192.637 79.8803 193.492 80.6613 193.939 81.4795C194.385 82.2233 194.608 83.0787 194.608 84.0456C194.608 85.682 193.901 86.9836 192.488 87.9505C191.149 88.8431 189.253 89.2894 186.798 89.2894C180.997 89.2894 175.604 87.6158 170.621 84.2687V96.5414C174.935 98.8471 180.587 100 187.579 100C193.901 100 198.959 98.5124 202.753 95.5372C206.546 92.562 208.443 88.434 208.443 83.1531C208.443 79.3597 207.29 76.273 204.984 73.8928C202.678 71.5127 199.554 69.3557 195.612 67.4218C195.017 67.1243 194.199 66.7523 193.158 66.3061C192.116 65.8598 191.298 65.4879 190.703 65.1904C190.108 64.8929 189.401 64.5582 188.583 64.1863C187.765 63.74 187.133 63.3309 186.687 62.959C186.24 62.5871 185.757 62.178 185.236 61.7318C184.79 61.2111 184.455 60.6904 184.232 60.1698C184.083 59.6491 184.009 59.0913 184.009 58.4963C184.009 56.9343 184.641 55.6698 185.906 54.7029C187.244 53.6615 189.067 53.1409 191.373 53.1409C196.951 53.1409 201.6 54.2566 205.319 56.488ZM129.643 99.4422H116.254V21.9016H129.643V99.4422ZM149.483 99.4422H165.215L145.066 71.3399C144.443 70.4709 144.462 69.2964 145.114 68.4486L164.768 42.8766H149.149L133.096 64.2102C130.577 67.5581 130.492 72.1448 132.885 75.5841L149.483 99.4422ZM13.3883 99.4422H0V21.9016H13.3883V99.4422Z" fill="#47505E"></path></svg>

      </div>
      <container className="d-flex justify-content-center">

        <div className="Heading flex-center d-flex "></div>

        <div className="box1">

          <form className="">
            <h1 className="d-flex justify-content-center Heading2 ">Mileage reimbursement simplified.</h1>
            <h2 className="d-flex justify-content-center Heading3 "> Start your free trial</h2>
            <div className="mb-3 fw">
              <span className="signup pull-center fwp ">Already have an account?<Link to="/login" className="fpwd">Log in!</Link></span>
            </div>

            <div className="mb-3">

              <input type="textf" className="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">

              <input type="textl" className="form-control" id="exampleInputEmail1" placeholder="Last Name" aria-describedby="emailHelp" />

            </div>

            <div className="mb-3 form-group">

              <label for="exampleInputEmail1" className="form-label" > </label>
              <input type="email" placeholder="Enter a valid work email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label"></label>
              <span className="ant-input-suffix icon1"><span role="img" aria-label="eye-invisible" tabindex="-1" class="anticon anticon-eye-invisible ant-input-password-icon"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg></span></span>
              <input type="password" placeholder="Enter valid password " className="form-control " id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-group">
              <label for="exampleInputEmail1" className="form-label" > </label>
              <input type="email" placeholder="Enter Company Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>


            <button type="submit1 " className="submit"><b>Start Free Trial</b></button>

          </form>

        </div>

      </container>

    </div>
  )
}

export default Signup
