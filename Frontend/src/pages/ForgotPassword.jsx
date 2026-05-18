import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div>
      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;