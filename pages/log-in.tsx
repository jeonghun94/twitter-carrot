import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorText from "../components/error-text";
import useMutation from "../lib/client/useMutation";

interface IForm {
  email: string;
}

interface MutationResult {
  ok: boolean;
  error: string;
}

export default () => {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const { register, handleSubmit } = useForm<IForm>();

  const [login, { loading, data }] = useMutation<MutationResult>("/api/login");
  const submitting = (validForm: IForm) => {
    if (loading) return;
    login(validForm);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    } else {
      if (data?.error) setError(data.error);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [data]);

  return (
    <div className="w-full min-h-screen  flex justify-center">
      <div className="fixed top-0 w-full  h-20  flex justify-center mb-3">
        <svg
          viewBox="0 0 24 24"
          className="fill-[#1C9BEF] w-10 dark:fill-white"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
      </div>

      <div className="w-full h-full  p-4 px-10 flex flex-col justify-center items-center mt-48">
        <form onSubmit={handleSubmit(submitting)} className="w-full">
          <h1 className="font-bold text-2xl place-self-start my-8 ">
            트위터에 로그인하기
          </h1>
          <button
            type="button"
            className=" flex justify-center gap-2 border border-gray-300 rounded-3xl p-2 w-full cursor-pointer placeholder:text-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 ${error && `border-red-500`} dark:bg-white dark:text-black"
            placeholder="이메일 주소"
          >
            <svg
              aria-hidden="true"
              className="octicon octicon-mark-github"
              height="24"
              version="1.1"
              viewBox="0 0 16 16"
              width="22"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            Github 계정으로 로그인
          </button>
          <div className="w-full grid grid-cols-9 place-items-center  my-2">
            <div className="w-full col-span-4 h-1 border-b border-gray-300 divide-x-2"></div>
            <span className=" text-md text-center dark:font-semibold">
              또는
            </span>
            <div className="w-full col-span-4 h-1 border-b border-gray-300 divide-x-2"></div>
          </div>
          <div className="w-full">
            <label htmlFor="email">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                className="border border-gray-300 rounded-md px-2 py-3 w-full placeholder:text-gray-600 focus:outline-none focus:border-[#1C9BEF] focus:ring-1 focus:ring-[#1C9BEF] ${error && `border-red-500`} dark:text-black"
                placeholder="이메일 주소"
                type="email"
                name="email"
                id="email"
              />
            </label>
          </div>
          <button className="w-full p-2  my-8 rounded-3xl bg-black text-white font-bold text-md dark:bg-white dark:text-black">
            다음
          </button>

          <p className="text-md text-gray-500 place-self-start dark:text-gray-300 dark:font-semibold">
            계정이 없으신가요?{" "}
            <Link href="/create-account">
              <button className="text-[#1C9BEF] cursor-pointer">
                가입하기
              </button>
            </Link>
          </p>
        </form>
        {error && <ErrorText error={error} />}
      </div>
    </div>
  );
};
