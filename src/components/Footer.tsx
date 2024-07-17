import {DockStation} from "@/components/DockStation.tsx";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex mx-4 justify-center items-center mb-2">
                <DockStation/>
            </div>
        </footer>
    );
}
export default Footer;