import styles from "./index.module.scss";
import SearchInput from "../components/searchInput/searchInput";

export default function Home() {
    return (
        <div className={`glass ${styles.mainContainer}`}>
            <header>
                <SearchInput icon="/searchIcon.png" height={40} width={300}></SearchInput>
            </header>
        </div>
    );
}
