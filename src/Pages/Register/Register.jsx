import { useForm } from "react-hook-form";
import bg from "../../assets/Photos/Login/background1.jpg";
import { Form, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);

  const onSubmit = ({ name, email, newPassword, confirmPassword }) => {
    if(newPassword === confirmPassword){
      createUser(email,confirmPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user,{displayName:name})
        .then(()=>{
          
        })
        .catch();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }else{
      console.log("Password doesn't match");
    }

  };
  

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div>
        <div className="border rounded-lg px-12">
          <div className="text-3xl font-bold text-white text-center mt-8">
            Register Now
          </div>
          <Form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control gap-1">
              <div className="form-control">
                <label className="label pb-0 px-0">
                  <span className="text-white">Enter your name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "name is required" })}
                  placeholder="name"
                  className="input ps-1  border-white bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label pb-0 px-0">
                  <span className="text-white">Enter your email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "please provide a valid email",
                  })}
                  placeholder="email"
                  className="input ps-1 border-0 rounded-none border-b-2 input-sm focus:outline-0 border-white bg-transparent text-white"
                  required
                />
              </div>
            </div>
            <div className="form-control ">
              <div className="form-control">
                <label className="label pb-0 px-0">
                  <span className="text-white">New Password</span>
                </label>
                <input
                  type="password"
                  id="new"
                  {...register("newPassword", {
                    required: true,
                    // password will valided later.
                  })}
                  placeholder="new password"
                  className="input ps-1 border-0 rounded-none border-b-2 input-sm focus:outline-0 border-white bg-transparent text-white"
                  required
                />
              </div>
              <p className="py-1 text-sm">{errors.newPassword?.message}</p>
              <div className="form-control">
                <label className="label pb-0 px-0">
                  <span className="text-white">Confirm Password</span>
                </label>
                <input
                  type="password"
                  id="confirm"
                  {...register("confirmPassword")}
                  placeholder="confirm password"
                  className="input ps-1 border-0 rounded-none border-b-2 input-sm focus:outline-0 border-white bg-transparent text-white"
                  required
                />
              </div>
              <p className="py-1 text-sm">{errors.confirmPassword?.message}</p>
            </div>
            <div className="form-control my-2">
              <button className="btn bg-[#3B82F6] border-0 hover:bg-transparent text-white">
                Register
              </button>
            </div>
            <div className="form-control text-white">
              If you already have an account ? please
              <Link to="/login" className="link">
                login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
