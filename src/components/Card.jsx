export default function Card({ title, link, description, image, subtitle }) {
  return (
    <a href={link} target="blank">
      <div className="flex mt-4 pt-4 pb-4 gap-8 bg-black hover:bg-gray-900 hover:shadow justify-between items-center rounded-md">
        <div className="flex-none w-1/3 items-center flex justify-center">
          <img
            className="w-16 h-16 object-cover rounded-md ml-3"
            src={image}
          ></img>
        </div>
        <div className="flex-grow w-2/3 flex flex-col justify-center">
          <div className="flex justify-start items-start">
            <h2 className="text-lg font-semibold mb-2 text-start pr-2">
              {title}
            </h2>
            <h2 className="text-lg font-semibold mb-2 text-start">
              | {subtitle}
            </h2>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}
