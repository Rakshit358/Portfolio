export default function ProjectCard({
  link,
  title,
  image,
  description,
  stack,
  date,
}) {
  return (
    <a href={link} target="blank">
      <div className="flex mt-4 pr-6 pl-8 pt-12 pb-12 gap-8 bg-black hover:bg-gray-900 hover:shadow justify-between items-center rounded-md">
        <div className="flex-none w-1/3 items-center flex justify-center">
          <div>
            <h2 className="text-gray-400 pb-4 ml-2"> {date} </h2>
          </div>
          <img
            className="w-full h-20 object-cover rounded-md ml-3 border-2 border-gray-600"
            src={image}
          ></img>
        </div>
        <div className="flex-grow w-2/3 flex">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-start pr-2">
              {title}
            </h2>
            <div>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
