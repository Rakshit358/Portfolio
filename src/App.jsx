import { useRef } from "react";
import TextTransition from "./components/TextComponent";
import Card from "./components/Card";

export default function App() {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const codingRef = useRef(null);

  return (
    <div className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-between pt-28 pb-28 pl-20 pr-20">
        <div className="text-white lg:fixed">
          <h1 className="text-[42px] font-semibold">Rakshit Benjwal</h1>
          <div className="overflow-hidden h-[30px]">
            <h2 className="text-gray-200 text-[20px] ">
              <TextTransition />
            </h2>
          </div>
          <div className="text-gray-400 mt-5 ">
            <p>
              Hello there,I like developing web apps,
              <br />
              ML models and solving algorithmic problems too.
            </p>
          </div>
          <div className="text-white mt-16">
            <div className="text-gray-400 p-2 font-[700] cursor-pointer hover:text-white  transform transition-transform duration-500 ease-in-out hover:translate-x-8">
              <a
                href="#about"
                onClick={(e) => {
                  aboutRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                  ABOUT
                </div>
              </a>
            </div>
            <div className="text-gray-400 p-2 font-[700] cursor-pointer hover:text-white  transform transition-transform duration-500 ease-in-out hover:translate-x-8">
              <a
                href="#codingprofiles"
                onClick={(e) => {
                  codingRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                  CODING PROFILES
                </div>
              </a>
            </div>
            <div className="text-gray-400 p-2 font-[700] cursor-pointer hover:text-white  transform transition-transform duration-500 ease-in-out hover:translate-x-8">
              <a
                href="#projects"
                onClick={(e) => {
                  projectRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                  PROJECTS
                </div>
              </a>
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

      <div className="text-white justify-between pt-28 pb-28 pl-22 pr-28 w-full">
        <div ref={aboutRef}>
          <p className="text-gray-400 text-[14px] font-[600]">
            I am a pre-final year student at Graphic Era Hill University (GEHU)
            in Dehradun, actively engaged in competitive programming, web
            development, and machine learning.
          </p>
          <p className="text-gray-400 text-[14px] font-[600] pt-6">
            Besides the tech stuff, I love playing sports, especially football
            and cricket. I also enjoy picking up a good book now and then.
            Balancing these activities helps me grow both my technical skills
            and personal interests.
          </p>
        </div>
        <div ref={codingRef} className="pt-12">
          <Card
            // date={"2023-PRESENT"}
            title={"Leetcode"}
            description={
              "Solved more than 800 questions and ranked among top 10% in leetcode"
            }
            image={
              "data:image/png;base64,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"
            }
            link={"https://leetcode.com/u/Raksh21/"}
          />
          <Card
            // date={"2023-PRESENT"}
            title={"Codeforces"}
            description={"Rated as pupil on codeforces"}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtDsTEfs3adnrB-FjulnTaSH6mMoP_7ea_g&s"
            }
            link={"https://codeforces.com/profile/raks11"}
          />
          <Card
            // date={"2023-PRESENT"}
            title={"Codechef"}
            description={"Rated as 3 star on codechef"}
            image={
              "data:image/jpeg;base64,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"
            }
            link={"https://www.codechef.com/users/rakshitbenjwal"}
          />
          <Card
            // date={"2023-PRESENT"}
            title={"Atcoder"}
            description={"Recently started at atcoder/"}
            image={
              "data:image/png;base64,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"
            }
            link={"https://atcoder.jp/users/raks"}
          />
        </div>
      </div>
    </div>
  );
}
