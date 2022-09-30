import "./styles/main.css";
import logoImg from "./assets/logo-esports-nlw.svg";
import { GameList } from "./modules/games/pages/GameList";
import { Banner } from "./components/Banner";
function App() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mt-20">
          Seu{" "}
          <span className="text-transparent bg-nlw-gradient bg-clip-text">
            duo
          </span>{" "}
          está aqui.
        </h1>

        <GameList />

        <Banner
          title={"Não encontrou seu duo?"}
          subtitle={"Publique um anúncio para encontrar novos players!"}
          button={{ label: "Publicar anúncio", callback: () => {} }}
        ></Banner>
      </div>
    </>
  );
}

export default App;
