import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => (
  <div className="h-full w-fullbg-primary-light">
    <Header />
    {/* Hero Section */}
    <div className="container flex pt-24 mx-auto px-6 items-center">
      <div className="mx-10 w-full">
        <h3 className="font-bold text-5xl text-secondary leading-tight">
          Kanri helps teams move work forward.
        </h3>
        <p className="mt-2 text-lg font-thin text-primary-dark">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        <div className="flex mt-8">
          <input
            type="text"
            placeholder="Email"
            className="rounded-md basis-4/6 mr-4 px-4 shadow-sm focus:outline-none focus:ring-2 ring-1 ring-gray-200 focus:ring-secondary"
          />
          <Button classes="basis-2/6">Sign Up</Button>
        </div>
      </div>
      <div className="basis-4/6">
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
          alt="illustration"
        />
      </div>
    </div>
  </div>
);

export default Home;