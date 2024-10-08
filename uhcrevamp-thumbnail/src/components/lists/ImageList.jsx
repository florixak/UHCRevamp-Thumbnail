const List = ({ list }) => {
  return (
    <div className="w-full flex flex-col gap-20">
      {list.map((item) => (
        <li
          className="w-full flex flex-col odd:items-start even:items-end"
          key={item.title}
        >
          <h1 className="font-bold font-MinecraftAlt first-letter:text-5xl first-letter:gradient-text outline-black text-3xl">
            {item.title}
          </h1>
          <div className="flex flex-col">
            {item.images.map((image) => (
              <img
                key={item.title + ":" + image}
                className="shadow-zinc-50 shadow-lg border-zinc-50 border-2"
                width={1920}
                src={image}
                alt=""
              />
            ))}
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;
