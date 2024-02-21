interface AvatarProps {
  src?: string;
  alt: string;
  size: string;
}

export default function Avatar({ src, alt, size }: AvatarProps) {
  return (
    <img
      alt={alt}
      className="rounded-full"
      height={size}
      src={src}
      style={{ aspectRatio: "40/40", objectFit: "cover" }}
      width={size}
    />
  );
}
