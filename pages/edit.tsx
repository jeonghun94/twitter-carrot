import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import useUser from "../lib/client/useUser";
import useMutation from "../lib/client/useMutation";
import Layout from "../components/tweetLayout";
import { BsFillCameraFill, BsCamera } from "react-icons/bs";

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  avatar?: FileList;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<EditProfileForm>();
  useEffect(() => {
    if (user?.name) setValue("name", user.name);
    if (user?.avatar)
      setAvatarPreview(
        `https://imagedelivery.net/jhi2XPYSyyyjQKL_zc893Q/${user?.avatar}/avatar`
      );
  }, [user, setValue]);
  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);
  const onValid = async ({ email, phone, name, avatar }: EditProfileForm) => {
    if (loading) return;
    if (email === "" && phone === "" && name === "") {
      return setError("formErrors", {
        message: "Email OR Phone number are required. You need to choose one.",
      });
    }
    if (avatar && avatar.length > 0 && user) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", avatar[0], user?.id + "");

      const {
        result: { id: avatarId },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: form,
        })
      ).json();
      editProfile({
        email,
        phone,
        name,
        avatarId,
      });
    } else {
      editProfile({
        email,
        phone,
        name,
      });
    }
  };
  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
  }, [data, setError]);
  const [avatarPreview, setAvatarPreview] = useState("");
  const avatar = watch("avatar");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const B = () => {
    return (
      <>
        <button className="text-gray-500">
          {loading ? "Loading..." : "완료"}
        </button>
      </>
    );
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Layout pageTitle="Edit Profile" subTitle="Edit profile" sideBar={false}>
        <div className="-mt-3 space-y-4">
          <div className="flex justify-center items-center">
            {avatarPreview ? (
              <div className="w-full relative">
                <Image
                  alt="이미지를 불러올 수 없습니다:("
                  src={avatarPreview}
                  className=" aspect-square w-full h-48  "
                  width={100}
                  height={100}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-500 bg-opacity-25 flex justify-center items-center">
                  <div className=" w-8 h-8 flex justify-center items-center font-semibold bg-[#3E3435] aspect-square rounded-full">
                    X
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-14 h-14 rounded-full bg-transparent flex justify-center
              items-center "
              >
                <label
                  htmlFor="picture"
                  className="cursor-pointer p-1  border-gray-300 rounded-full shadow-sm text-xs  text-gray-700"
                >
                  <BsCamera className="w-5 h-5 dark:text-white" />
                  <input
                    {...register("avatar")}
                    id="picture"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            )}
          </div>
          {/* <Input
            register={register("name")}
            required={false}
            label="닉네임"
            name="name"
            type="text"
          /> */}
          {errors.formErrors ? (
            <span className="my-2 text-orange-500 font-medium text-center block">
              {errors.formErrors.message}
            </span>
          ) : null}
          <button>{loading ? "Loading..." : "완료"}</button>
        </div>
      </Layout>
    </form>
  );
};

export default EditProfile;
