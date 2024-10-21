import Card from "./Card.component";
import Navbar from "./Navbar.component";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container flex flex-wrap justify-center">
        <Card
          profile="./public/Sponge.png"
          name="SpongeBob"
          description="I work at the Krusty Krabs. I'm a cook...I also look out for Plankton"
          isPopular={true}
        />
        <Card
          profile="./public/patrick.png"
          name="Patrick"
          description="I live under a rock, Spongebob is my best friend"
          isPopular={false}
        />
        <Card
          profile="./public/Sandy.png"
          name="Sandy"
          description="I'm a scientist,... well I try to be at least"
          isPopular={false}
        />
        <Card
          profile="./public/krabs.png"
          name="Krabs"
          description="I own the Krusty Crabs, GIVE ME YOUR MONEY!!!"
          isPopular={false}
        />
      </div>
    </>
  );
};

export default App;
