import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <InputField
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          disabled={!formData.name || !formData.email || !formData.password}
        >
          Sign Up
        </Button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-4">
        Already have an account?{" "}
        <a href="#" className="text-blue-400 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupForm;
