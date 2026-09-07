import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Container = (props: Props) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#f6efe7] selection:bg-[#a65a67]/50">
        {props.children}
    </div>
  );
};

export default Container;
