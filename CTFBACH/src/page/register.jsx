import { useState } from "react";
import "./public/Login.css"


  return (
    <div className="page">
      <div className="card">

        <div className="brand">
          <div className="brand-icon">
            <IconCheck />
          </div>
          <span className="brand-name">Sondages</span>
        </div>

        <h1 className="card-title">Inscription</h1>
        <p className="card-subtitle">Créez votre compte pour accéder à votre espace de sondages</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              placeholder="vous@exemple.com"
              value={email}
             
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? "Inscription…" : "S'inscrire"}
          </button>
        </form>

        <div className="divider">
          <div className="divider-line" />
          <span>ou</span>
          <div className="divider-line" />
        </div>

        <button className="btn-sso" onClick={() => {}}>
          <IconBuilding />
          Continuer avec SSO entreprise
        </button>

        <p className="register">
          Pas encore de compte ? <a href="/inscription">Créer un compte</a>
        </p>

      </div>
    </div>
  );
