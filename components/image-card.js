import wine from "/public/wine.jpg";
export default function ImageCard({ imgName, title, body }) {
  return (
    <section className=" leading-normal flex text-white w-full justify-center">
      <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
        {/* <div className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-[url('../public/wine.jpg')]"></div> */}
        <div
          className={
            "h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden " +
            imgName
          }
        ></div>

        <div className="px-6 py-4">
          <h2 className="mb-2 font-black">{title}</h2>
          <p className="mb-4 text-grey-dark text-sm">{body}</p>
        </div>
      </div>
    </section>
  );
}
