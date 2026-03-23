import { useNavigation } from "react-router-dom";
import Header from "../Components/Header";

export default function AboutPage() {
    const navigation = useNavigation();
    return (
        <div className="about-page-container">
            {navigation.state == "loading" ? (
                <img
                    src="/icons/loading.svg"
                    alt="Loading..."
                    className="about-page-loading"
                />
            ) : (
                <>
                    <Header />
                    <div className="about-page">
                        <h1>About Us</h1>
                        <p>
                            A catalog of cocktails where you can look up recipes
                            for various types of drinks.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
