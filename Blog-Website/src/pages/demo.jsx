/* Navbar CSS */

.header {
  box-shadow: 0 2px 10px #6a6969;
}

.header-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: red;

  text-transform: uppercase;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  gap: 0.4rem;
}

.logo-icon {
  height: 120px;
  width: auto;
}

.logo-text {
  font-size: 2rem;
  font-weight: bold;
}

.nav {
  display: none;
  gap: 1.5rem;
}

.larger-icon {
  font-size: 2em;
}

@media screen and (min-width: 768px) {
  .nav {
    display: flex;
  }
}

.nav-link {
  font-size: 1.6rem;
  font-weight: 600;
  transition: color 0.1s;
}

/* Change the hover color */
.nav-link:hover {
  color: #ffa600 !important;
  /* Use !important to ensure the hover color takes precedence */
}

/* Change the active link color */
.nav-link:active {
  color: orange;
}
.nav-button {
  display: none;
  border: none;
  border-radius: 0.375rem;
  background-color: var(--primary-color);
  color: var(--background-color);
  transform: all 0.1s;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
}

@media screen and (min-width: 768px) {
  .nav-button {
    display: block;
  }
}
@media screen and (max-width: 767px) {
  .nav {
    display: none;
    z-index: 3;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--burger-nav-background-color);
    transition: all 0.6s ease;
  }

  .menu-button {
    display: block;
    border: none;
    border-radius: 0.375rem;
    background-color: var(--background-color);
    font-size: 1rem;
    padding: 0.5rem 0.9rem;
    font-weight: 600;
  }

  .nav.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Other necessary styles */
  }
}
.nav-button:hover {
  background-color: #5254f8;
}

.menu-button {
  display: none;
  border: none;
  border-radius: 0.375rem;
  background-color: var(--background-color);
  font-size: 1rem;
  padding: 0.5rem 0.9rem;
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  .menu-button {
    display: block;
  }
}

.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
}
