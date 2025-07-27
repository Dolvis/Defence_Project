// import React from 'react'

// function ToastMsg({ msg }: any) {
//     return (
//         <div>
//             <div className="toast toast-top toast-end">
//                 <div className="alert alert-success">
//                     <span>Message sent successfully.</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ToastMsg
// utils/toast.ts
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message: string = 'Operation successful!') => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

export const showErrorToast = (message: string = 'Something went wrong!') => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

export const showInfoToast = (message: string = 'Loading...') => {
    toast.info(message, {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
    });
};

export const dismissAllToasts = () => {
    toast.dismiss();
};
