import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
}

export default () => {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const submitting = (data: IForm) => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        if (data.ok) {
          router.push("/login");
        } else {
          setError(data.error);
        }
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitting)} className="bg-red-400">
        <h1 className="text-red-100">Create Account</h1>
        <div>
          <label htmlFor="name">
            Name:
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              name="name"
              id="name"
            />
          </label>{" "}
          {errors.name?.message}
        </div>
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
          </label>{" "}
          {errors.email?.message}
        </div>
        {error && error ? (
          <>
            <p>{error}</p>
            <Link href={"/login"}>
              <button>login</button>
            </Link>
          </>
        ) : (
          <button>Create Account</button>
        )}
      </form>
    </>
  );
};
