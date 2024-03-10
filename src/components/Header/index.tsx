import s from "./index.module.css";

const Header = (): JSX.Element => {
    return (
        <header className={s.header}>
            <h1>M&M Game</h1>
            <h2>Get to know you: Tell Us</h2>
        </header>
    );
}

export default Header;
