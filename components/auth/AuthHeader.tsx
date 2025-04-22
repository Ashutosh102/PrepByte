import Image from "next/image";

interface AuthHeaderProps {
  title: string;
}

const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image src="/auth-logo.png" alt="PrepByte logo" width={160} height={70} />
      </div>
      <h3 className="text-center">{title}</h3>
    </>
  );
};

export default AuthHeader;