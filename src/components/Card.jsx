export default function Card({ date, title, link, description, image }) {
  return (
    <a href={link} target="blank">
      <div className="flex mt-4 pt-4 pb-4 gap-8 bg-black hover:bg-gray-900 hover:shadow justify-between items-center rounded-md">
        <div className="flex-none w-1/3 items-center justify-center">
          <div>
            <h2 className="text-gray-400 pb-4 ml-2"> {date} </h2>
          </div>
          <img
            className="w-10 h-10 object-cover rounded-md ml-3"
            src={image}
          ></img>
        </div>
        <div className="flex-grow w-2/3 flex flex-col justify-center">
          <h2 className="text-sm font-semibold mb-2 text-start">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}
