import "@/styles/globals.css";
import { FC } from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Sample",
  desctiption: "Generated by create next app",
};

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <html lang="ja">
      <body className="">
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;