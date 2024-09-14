import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
export const ComingSoon = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <div className="messageComing">
                <div className="texts">
                    <div className="text text-front">Coming soon</div>
                </div>
            </div>
            <Footer />
        </>

    );
};