import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useMutation from "../lib/client/useMutation";

interface IForm {
  name: string;
  email: string;
}

interface MutationResult {
  ok: boolean;
  error: string;
}

export default () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const [res, { loading, data }] = useMutation<MutationResult>("/api/register");
  const submitting = (validData: IForm) => {
    if (loading) return;
    res(validData);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push("/log-in");
    } else {
      if (data?.error) setError(data.error);
    }
  }, [data]);

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
