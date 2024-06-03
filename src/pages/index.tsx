const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-primary">
      <main className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-7xl font-bold mb-4 font-museoModerno text-custom-accent">
          Secure your <br /> Discord Server
        </h1>
        <p className="text-lg mb-8 font-montserrat text-white max-w-md">
          Protect your server and your users for free with our security bot.
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-custom-accent text-custom-primary font-montserrat py-2 px-4 rounded-full hover:bg-white hover:text-custom-accent transition duration-300"
            aria-label="Add to Discord"
          >
            Add To Discord
          </button>
          <button
            className=" text-custom-accent font-montserrat py-2 px-6 rounded-full hover:bg-custom-accent hover:text-white transition duration-300"
            aria-label="Support"
          >
            Support
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
