import { toast } from "react-toastify";
const errorToast = () => {
  toast.error("An error occur, check your data", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const successToast = () => {
  toast.success("Product created succesfully", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default {
  toast: {
    errorToast,
    successToast,
  },
};
