export default function ReviewItem({ imgUrl, name, title, text }) {
  return (
    <div className="  border-2 border-stone-900 dark:border-white rounded-md overflow-hidden max-w-md my-4">
      <div className="relative">
        <img
          src={imgUrl}
          alt={name}
          className="w-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black  dark:from-white via-white/10 to-transparent"></div>
      </div>
      <h3 className="text-center p-3 font-extrabold text-3xl">{name}</h3>
      <div className="flex justify-center pb-3">
        <h4 className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
          {title}
        </h4>
      </div>
      <span className="">
        <p className="p-4">{text}</p>
      </span>
    </div>
  );
}
