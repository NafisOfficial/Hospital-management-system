import { useForm } from "react-hook-form";
import bg from "../../assets/Photos/Login/background1.jpg";
import { Form, Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          <div className="text-4xl font-bold text-white text-center mt-10">
            Register Now
          </div>
          <Form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Enter your name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "name is required" })}
                placeholder="name"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
              <label className="label">
                <span className="label-text text-white">Enter your email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "please provide a valid email",
                })}
                placeholder="email"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">New Password</span>
              </label>
              <input
                type="password"
                id="new"
                {...register("newPassword", {
                  required: true,
                  // password will valided later.
                })}
                placeholder="new password"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
              <p>{errors.newPassword?.message}</p>
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                id="confirm"
                {...register("confirmPassword")}
                placeholder="confirm password"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
            </div>
            <div className="form-control my-4">
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
