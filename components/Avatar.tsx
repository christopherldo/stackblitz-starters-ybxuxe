import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 40 }: AvatarProps) {
  return (
    <Image
      alt={alt}
      className="rounded-full"
      height={size}
      src={src || ""}
      style={{ aspectRatio: "40/40", objectFit: "cover" }}
      width={size}
    />
  );
}
