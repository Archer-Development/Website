import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-primary text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link href="/">
        <a className="bg-custom-accent text-custom-primary py-2 px-4 rounded-full hover:bg-white hover:text-custom-accent transition duration-300">
          Go back home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
