import { useState } from "react";
import "./Login.css";

const IconCheck = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);

const IconBuilding = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // TODO: API login
      console.log({
        email,
        password,
      });

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <div className="brand">
          <div className="brand-icon">
            <IconCheck />
          </div>

          <span className="brand-name">Sondages</span>
        </div>

        <h1 className="card-title">Connexion</h1>

        <p className="card-subtitle">
          Accédez à votre espace de sondages
        </p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">
              Adresse e-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <a
            href="/mot-de-passe-oublie"
            className="forgot"
          >
            Mot de passe oublié ?
          </a>

          <button
            type="submit"
            className="btn-login"
            disabled={loading}
          >
            {loading
              ? "Connexion..."
              : "Se connecter"}
          </button>
        </form>

        <div className="divider">
          <div className="divider-line"></div>

          <span>ou</span>

          <div className="divider-line"></div>
        </div>




        <p className="register">
          Pas encore de compte ?{" "}
          <a href="/inscription">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
}