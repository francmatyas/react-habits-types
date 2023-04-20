import React from "react";
import pb from "../../lib/pocketbase.js";
import { useForm } from "react-hook-form";

export default function Auth() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setLoading] = React.useState(false);

  async function login(data: any) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.username, data.password);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  async function signup() {
    try {
      const data = {
        email: "",
        password: "",
      };

      const createUser = await pb.collection("users").create(data);
      await login(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Auth">
      <h1>Auth</h1>
      <p>Is valid: {pb.authStore.isValid && pb.authStore.model?.email}</p>
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
