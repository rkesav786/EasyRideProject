// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// export const Login = () => {
//   return (
//     <>
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

//       <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-body">
//             <div className="row">
//               <div className="col-6">
//                 <div className="image">
//                   <img src="https://raw.githubusercontent.com/rkesav786/EasyRideProject/84777ef6a48a2af4c87ef7288752df2ade27c100/loginpage%20logo.svg" alt="" />
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="logo">
//                   <img src="https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/logo.svg" alt="" />
//                   <button type="button" className="close" data-dismiss="modal">&times;</button>
//                 </div>
//                 <div className="heading">
//                   <h5>Sign in to avail exciting <br /> discounts and cashbacks!!</h5>
//                 </div>
//                 <div className="form">
//                   <form>
//                     <input type="number" className='form-control' placeholder='Enter your mobile number' />
//                     <button type="button" className='btn btn-danger'> GENERATE OTP (One Time Password)</button>
//                   </form>
//                 </div>
//                 <div className="footer">
//                   <p>By signing up, you agree to <br />
//                     our <span style={{ color: 'blue' }}>Terms & Conditions</span> and <span style={{ color: 'blue' }}>Privacy Policy</span></p>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
import React from 'react'

export const Login = () => {
  return (
    <div>
      <div className="container">
  <h2>Modal Example</h2>
  {/* Trigger the modal with a button */}
  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
  {/* Modal */}
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"></button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

