import TextTransition from "./components/TextComponent";

export default function App() {
  return (
    <div className="h-screen bg-black grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-between p-28">
        <div className="text-white">
          <h1 className="text-[42px] font-[1100]">Rakshit Benjwal</h1>
          <div className="overflow-hidden h-[30px]">
            <h2 className="text-[24px] font-[350]">
              <TextTransition />
            </h2>
          </div>
          <div className="text-gray-400 mt-5">
            <p>
              Hello there,I like developing web apps,ML models and solving
              algorithmic problems too.
            </p>
          </div>
          <div className="text-white mt-16">
            <div className="text-gray-400 p-2 font-[700] cursor-pointer hover:text-white  transform transition-transform duration-500 ease-in-out hover:translate-x-8">
              ABOUT
            </div>
            <div className="text-gray-400 p-2 font-[700] cursor-pointer hover:text-white  transform transition-transform duration-500 ease-in-out hover:translate-x-8">
              CODING PROFILES
            </div>
            <div className="text-gray-400 p-2 font-[700] cursor-pointer hover:text-white  transform transition-transform duration-500 ease-in-out hover:translate-x-8">
              PROJECTS
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <a
              target="_blank"
              aria-label="mail me"
              title="send a mail to rakshit"
              href="mailto:benjwalrakshit@gmail.com"
            >
              <svg
                width="17"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 2.32013V13.3314C19 14.0471 18.4205 14.6266 17.7048 14.6266H14.6815V7.28625L9.5 11.1733L4.31854 7.28625V14.6274H1.29517C1.12502 14.6274 0.956534 14.5939 0.799345 14.5287C0.642157 14.4636 0.499343 14.3681 0.379066 14.2478C0.258788 14.1274 0.163403 13.9845 0.0983616 13.8273C0.03332 13.6701 -0.000103762 13.5016 2.41974e-07 13.3314V2.32013C2.41974e-07 0.718588 1.82796 -0.195787 3.10888 0.765296L4.31854 1.67334L9.5 5.55884L14.6815 1.67175L15.8911 0.765296C17.1713 -0.194995 19 0.718588 19 2.32013Z"
                  fill="#d1d5db"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              aria-label="linkedin url"
              title="linkedin profile url"
              href="https://www.linkedin.com/in/rakshit-benjwal-6967a9296/"
            >
              <svg
                width="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3368 15.3371H12.6698V11.1603C12.6698 10.1643 12.652 8.8822 11.2827 8.8822C9.8936 8.8822 9.68105 9.9674 9.68105 11.0878V15.3368H7.01409V6.74772H9.57438V7.92152H9.61024C9.86647 7.4834 10.2367 7.12299 10.6816 6.87865C11.1264 6.63432 11.6292 6.51522 12.1364 6.53404C14.8396 6.53404 15.338 8.3121 15.338 10.6252L15.3368 15.3371ZM4.00472 5.57371C3.14993 5.57386 2.45686 4.881 2.45672 4.02621C2.45658 3.17142 3.14937 2.47835 4.00416 2.47821C4.85895 2.478 5.55202 3.17086 5.55216 4.02564C5.55223 4.43613 5.38924 4.82984 5.09904 5.12015C4.80884 5.41047 4.41521 5.57362 4.00472 5.57371ZM5.33827 15.3372H2.66843V6.74772H5.3382V15.3371L5.33827 15.3372ZM16.6665 0.00131005H1.32827C0.603351 -0.00684619 0.00885938 0.573865 0 1.29879V16.7009C0.00857813 17.4262 0.603 18.0075 1.3282 17.9999H16.6665C17.3932 18.0089 17.9899 17.4276 18 16.7009V1.29759C17.9897 0.571263 17.3929 -0.00937744 16.6665 0.000114742"
                  fill="#d1d5db"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              aria-label="github url"
              title="github profile url"
              href="https://github.com/Rakshit358"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.5001 0C4.70179 0 0 4.59043 0 10.2532C0 14.7833 3.00858 18.6267 7.18061 19.9824C7.70536 20.0774 7.89805 19.76 7.89805 19.4892C7.89805 19.2447 7.88821 18.437 7.88378 17.5803C4.96264 18.2005 4.34626 16.3705 4.34626 16.3705C3.86859 15.1854 3.18035 14.8702 3.18035 14.8702C2.22772 14.2339 3.25221 14.247 3.25221 14.247C4.30656 14.3193 4.86175 15.3036 4.86175 15.3036C5.7983 16.871 7.31817 16.4179 7.91733 16.1559C8.01158 15.4933 8.28368 15.0408 8.584 14.7848C6.25177 14.5256 3.8001 13.6464 3.8001 9.71771C3.8001 8.59828 4.21025 7.68359 4.88193 6.96555C4.77291 6.7073 4.41353 5.66452 4.98364 4.25216C4.98364 4.25216 5.8654 3.9766 7.87196 5.30318C8.7095 5.07601 9.60775 4.96211 10.5001 4.95818C11.3924 4.96211 12.2914 5.07593 13.1305 5.30318C15.1346 3.97669 16.0151 4.25224 16.0151 4.25224C16.5866 5.66444 16.2271 6.70738 16.1181 6.96555C16.7913 7.68359 17.1987 8.59828 17.1987 9.71771C17.1987 13.6558 14.7423 14.5229 12.4042 14.7767C12.7808 15.0949 13.1164 15.7189 13.1164 16.6755C13.1164 18.0473 13.1042 19.1514 13.1042 19.4892C13.1042 19.7621 13.2932 20.0818 13.8255 19.981C17.9952 18.6238 21 14.7819 21 10.2533C21 4.59043 16.2989 0 10.5001 0ZM3.93266 14.6059C3.90953 14.6568 3.82741 14.6721 3.75268 14.6371C3.67648 14.6037 3.63374 14.5343 3.65835 14.4832C3.68099 14.4307 3.76327 14.416 3.83923 14.4512C3.91552 14.4847 3.95899 14.5548 3.93266 14.6059ZM4.44913 15.0559C4.39909 15.1012 4.30114 15.0802 4.2347 15.0086C4.16604 14.9371 4.15316 14.8415 4.20394 14.7955C4.25562 14.7501 4.35053 14.7714 4.41935 14.8428C4.48809 14.9152 4.50138 15.0101 4.44913 15.0559ZM4.8035 15.6317C4.73911 15.6753 4.63394 15.6344 4.56889 15.5432C4.50458 15.4521 4.50458 15.3427 4.57029 15.2989C4.6355 15.2551 4.73911 15.2945 4.80498 15.385C4.86913 15.4777 4.86913 15.5871 4.80342 15.6317L4.8035 15.6317ZM5.40266 16.2985C5.34516 16.3605 5.22252 16.3439 5.13278 16.2593C5.04098 16.1766 5.01547 16.0593 5.07322 15.9973C5.13146 15.9352 5.25476 15.9526 5.34516 16.0366C5.43621 16.1191 5.4641 16.2372 5.40266 16.2985ZM6.1772 16.5236C6.15177 16.604 6.03364 16.6405 5.91478 16.6064C5.796 16.5712 5.71832 16.4771 5.74227 16.396C5.76696 16.3151 5.88558 16.2771 6.00534 16.3137C6.12396 16.3486 6.20189 16.4419 6.1772 16.5236ZM7.05854 16.6192C7.0615 16.7037 6.96068 16.7738 6.83583 16.7754C6.71032 16.7781 6.60868 16.7097 6.60729 16.6264C6.60729 16.5411 6.70589 16.4716 6.83148 16.4695C6.95633 16.4671 7.05854 16.5351 7.05854 16.6192ZM7.92438 16.5867C7.93931 16.6692 7.85261 16.754 7.72857 16.7766C7.60676 16.7983 7.49388 16.7473 7.47838 16.6656C7.46329 16.581 7.55163 16.4962 7.67329 16.4743C7.79748 16.4533 7.90855 16.5029 7.92438 16.5867Z"
                  fill="#d1d5db"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-between p-28">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}
