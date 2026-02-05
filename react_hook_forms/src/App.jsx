import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const existingUserName = ["admin", "user123", "john"];
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // const validateName = (value) => {
  //   if (value !== "admin") {
  //     return "Not enough clearance to access this resource";
  //   }
  //   return true;
  // };

  // console.log(watch("name"));
  const watchedName = watch("name");
  const watchedEmail = watch("email");
  useEffect(() => {
    console.log(`Name :${watchedName}`);
  }, [watchedName]);

  useEffect(() => {
    console.log(`Email: ${watchedEmail}`);
  }, [watchedEmail]);

  const checkIfUsernameExist = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return existingUserName.includes(username);
  };

  return (
    <>
      <div>
        <h1>Forms in React</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            {/*<input {...register("name", { required: true })} />*/}
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name should be at-least 2 characters",
                },
                validate: {
                  validateName: (value) =>
                    value !== "admin" || "Cannot access this resource",
                  isNotNumber: (value) =>
                    isNaN(value) || "Name cannot be a number",
                  checkIfUsernameExist: async (value) => {
                    const exist = await checkIfUsernameExist(value);
                    return !exist || "Username already taken";
                  },
                },
              })}
            />
          </label>
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          <label>
            Email:
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
          </label>
          <label>
            Password:
            <input
              type={`password`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password should be at-least 6 characters",
                },
              })}
            />
          </label>
          <label>
            Confirm password:
            <input
              type={`password`}
              {...register("confirmPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password should be at-least 6 characters",
                },
                validate: (value) =>
                  value === watch("password") || "Password do not match. ",
              })}
            />
          </label>
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
          {errors.email && <p style={{ color: "red" }}>Email is required</p>}
          <button type={`submit`}>Submit</button>
          <button type={`button`} onClick={() => reset()}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
