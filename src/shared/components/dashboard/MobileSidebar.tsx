import { Logo } from "../ui";
import DashboardNavigation from "./DashboardNavigation";

export default function MobileSidebar() {
    return (
        <div className="relative flex grow flex-col gap-y-6 overflow-y-auto bg-gradient-to-b from-white via-azul-50/30 to-white px-5 pb-4 shadow-2xl dark:from-mirage-950 dark:via-mirage-900 dark:to-mirage-950 dark:ring-1 dark:ring-mirage-800">
            <div className="relative flex w-full pt-6 justify-center">
                <div className="w-36 transform transition-transform duration-300 hover:scale-105">
                    <Logo />
                </div>
            </div>
            <div className="border-b border-mirage-200 dark:border-mirage-800"></div>
            <DashboardNavigation />
        </div>
    );
}
