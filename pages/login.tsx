import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
}

export default () => {
  const { register, handleSubmit } = useForm<IForm>();
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const submitting = (data: IForm) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "datadsds");
        if (data.ok) {
          router.push("/home");
        } else {
          setError(data.error);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitting)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              type="email"
              name="email"
              id="email"
            />
          </label>
        </div>
        <button>Login</button>
        {error && (
          <>
            <p>{error}</p>
            <Link href="/">
              <button>Register</button>
            </Link>
          </>
        )}
      </form>
    </>
  );
};
