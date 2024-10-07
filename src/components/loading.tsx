import React from "react";
import Modal from "react-modal";

interface LoadingButtonClickProps {
  isLoading: boolean;
}

const LoadingButtonClick: React.FC<LoadingButtonClickProps> = ({
  isLoading,
}) => {
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={isLoading}
        style={{
          overlay: {
            backgroundColor: "white",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 42424244, // Keep zIndex here in the overlay
          },
          content: {
            border: "none",
            background: "none",
            margin: "auto",
          },
        }}
      >
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="h-12 w-12 animate-spin text-blue-600">
            <LoaderIcon className="h-full w-full" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoadingButtonClick;

function LoaderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>
  );
}
