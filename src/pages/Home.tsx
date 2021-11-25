import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="let me ask" />
          <button>
            <img src={googleIconImg} alt="logo do goole" />
            crie sua sala com o google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="digite o codigo da sala" />
            <button type="submit">entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
