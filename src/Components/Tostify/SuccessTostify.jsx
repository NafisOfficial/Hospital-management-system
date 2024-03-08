import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessTostify = () => {
    return (
        <div>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            transition: Bounce
            />
        </div>
    );
};

export default SuccessTostify;