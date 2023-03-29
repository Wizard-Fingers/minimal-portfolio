export default function PortfolioItem({ title, imgUrl, stack, link, text }) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden max-w-md my-4">
      <img
        src={imgUrl}
        alt="portfolio"
        // adjust the image parameters here once you updated the image in the data folder in the portfolio.js file
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-center font-semibold">
          {title}
        </h3>
        <div className="w-full text-center px-8">{text}</div>
        <span className="w-full flex justify-center py-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className=" text-center inline-block px-10 py-2 w-max text-base font-medium rounded-md text-stone-900 bg-gradient-to-r from-stone-500 to-gray-200 drop-shadow-md hover:from-stone-600 hover:to-gray-300 hover:text-white "
          >
            have a look
          </a>
        </span>
        <p className="flex flex-wrap gap-2 flex-row times-center justify-center text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
