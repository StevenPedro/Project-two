import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div class="colunateste">
      <header>
        <nav>
          <ul>
            <li>
              <a>
                <Link to="/home">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/extra">Extracurricular</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/hobby">Hobby</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/skills">Skills</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/cadastro">Register</Link>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
