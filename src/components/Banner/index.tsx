import { AiOutlineDown } from "react-icons/ai";

type BannerProps = {
  onScrollToContent: () => void;
};

export const Banner:React.FC<BannerProps> = ({ onScrollToContent }: BannerProps) => {
  return (
    <div
      id="banner-component"
      className="
            overflow-hidden flex flex-col
            w-full h-dvh
            items-center justify-center
          "
    >
      <div
        id="banner-content"
        className="
                flex flex-col
                h-full
                aspect-square items-center justify-center
              "
      >
        <h1
          className="
                    text-9xl leading-none whitespace-nowrap
                    animate-logo-in
                  "
        >
          Arete
        </h1>
        <p
          className="
                    text-1xl
                    [animation-delay:1.7s]
                    animate-transform-up-down
                  "
        >
          Bem vindo à excelência!
        </p>
      </div>

      <div
        className="
                p-2
              "
      >
        <button
            onClick={onScrollToContent}>
            <AiOutlineDown
            className="
                        animate-go-down
                        [animation-delay:2s]
                        size-12
                        hover:cursor-pointer
                    "
            />
        </button>
      </div>
    </div>
  );
};
