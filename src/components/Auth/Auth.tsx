import React from "react";
import { useForm } from "react-hook-form";
import actionLib from "../../lib/actionLib";

export default function Auth() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setLoading] = React.useState(false);

  async function login(data: any) {
    setLoading(true);
    try {
      const authData = await actionLib.pb
        .collection("users")
        .authWithPassword(data.username, data.password);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  return (
    <div className="Auth">
      <h1>Auth</h1>
      <p>Is valid: {actionLib.pb.authStore.isValid && actionLib.pb.authStore.model?.email}</p>
      {isLoading && <p>Loading ...</p>}
      <form onSubmit={handleSubmit(login)}>
        <input type="text" placeholder="username" {...register("username")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
}
