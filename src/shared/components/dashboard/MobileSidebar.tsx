import { Logo } from "../ui";
import DashboardNavigation from "./DashboardNavigation";

export default function MobileSidebar() {
    return (
        <div className="relative flex grow flex-col gap-y-6 overflow-y-auto bg-linear-to-b from-mirage-950 via-mirage-900 to-mirage-950 px-5 pb-4 shadow-2xl border-r border-mirage-800">
            <div className="relative flex w-full pt-6 justify-center">
                <div className="w-36 transform transition-transform duration-300 hover:scale-105">
                    <Logo />
                </div>
            </div>
            <div className="border-b border-mirage-800"></div>
            <DashboardNavigation />
        </div>
    );
}
