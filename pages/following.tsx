import useSWR from "swr";
import useUser from "../lib/client/useUser";
import useMutation from "../lib/client/useMutation";
import { Tweet, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Tweets from "../components/tweets";
import Layout from "../components/tweetLayout";
import Image from "next/image";

export interface IForm {
  text: string;
  photo?: FileList;
}
export interface ITweets {
  ok?: boolean;
  tweets: TweetWithUser[];
}

export interface MutationResult {
  ok: boolean;
}

interface TweetWithUser extends Tweet {
  user: User;
}

const Home = () => {
  const { user, isLoading } = useUser();
  const { data: tweetData, mutate } = useSWR<ITweets>("/api/tweet");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm<IForm>();

  const [tweet, { data, loading }] = useMutation<MutationResult>("/api/tweet");

  const onSubmit = async ({ text, photo }: IForm) => {
    if (loading) return;
    const photoIds = [];

    if (photo && photo.length > 0) {
      // setImageLoading(true);
      for (let i = 0; i < photo.length; i++) {
        const form = new FormData();
        const { uploadURL } = await (await fetch(`/api/files`)).json();
        form.append("file", photo[i], text);
        const {
          result: { id },
        } = await (
          await fetch(uploadURL, { method: "POST", body: form })
        ).json();
        photoIds.push(id);
        // setImageLoading(false);
      }
    }

    tweet({
      text,
      photoId: photoIds.join(","),
    });
  };

  useEffect(() => {
    if (loading) return;
    if (data?.ok) {
      setValue("text", "");
      mutate();
      photoPreview && setPhotoPreview("");
    }
  }, [data]);

  // const [imageLoading, setImageLoading] = useState(false);

  const photo = watch("photo");

  const [photos, setPhotos] = useState(0);
  const [photoPreview, setPhotoPreview] = useState("");
  const removePhoto = (idx: number) => {
    const newPhotoPreview = photoPreview.split(",");
    newPhotoPreview.splice(idx, 1);
    setPhotos(photos - 1);
    setPhotoPreview(newPhotoPreview.toString());
  };

  useEffect(() => {
    const files = [];
    if (photo && photo.length > 0) {
      for (let i = 0; i < photo.length; i++) {
        files.push(URL.createObjectURL(photo[i]));
      }
      setPhotos(photo.length);
      setPhotoPreview(files.toString());
    }
  }, [photo]);

  return isLoading ? (
    <div className="min-h-screen w-full flex justify-center items-center">
      <h1>Loading</h1>
    </div>
  ) : (
    <Layout isHome pageTitle="follwing" subTitle="follwing">
      <div className="w-full px-4 py-3  border-b dark:border-b-[#181818]">
        <h1>준비중</h1>
      </div>
    </Layout>
  );
};

export default Home;
