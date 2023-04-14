import Image from "next/image";

interface PageProps {
  imageUrl: string;
  height?: number;
}

export default function TweetImage({ imageUrl, height }: PageProps) {
  return (
    <>
      <Image
        src={`https://imagedelivery.net/jhi2XPYSyyyjQKL_zc893Q/${imageUrl}/avatar`}
        className="rounded-3xl"
        alt="tweet image"
        width={"100%"}
        height={height ? height : 340}
      />
    </>
  );
}
