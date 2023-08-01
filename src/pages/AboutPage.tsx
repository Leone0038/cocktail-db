import { useNavigation } from "react-router-dom";
import Header from "../components/Header";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              repudiandae architecto qui adipisci in officiis, aperiam sequi
              atque perferendis eos, autem maiores nisi saepe quisquam hic odio
              consectetur nobis veritatis quasi explicabo obcaecati doloremque?
              Placeat ratione hic aspernatur error blanditiis?
            </p>
          </div>
        </>
      )}
    </div>
  );
}
