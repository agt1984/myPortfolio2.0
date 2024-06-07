import { navMenuList } from "@/data/navigationData";
import { CustomLink } from "./CustomLink";
import { FiMenu } from "react-icons/fi";
import { cn } from "@/utils/helper";

export function Navigation() {
    return (
      <nav className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <p>logo</p>
          <div className="md:hidden">
            <FiMenu className="text-2xl"/>
          </div>
          <div 
            className={cn(
              "max-md:fixed max-md:top-[58px] max-md:py-10 max-md:left-0 max-md:w-full max-md:min-h-screen          max-md:bg-zinc-900/90 max-md:black-blur-lg"
            )}
          >
            <ul className="flex items-center flex-col md:flex-row gap-6 ">
              {navMenuList.map(({ title, href }, index) => {
                const isLastElement = index === navMenuList.length - 1;
                return (
                  <li key={href}>
                    <CustomLink
                      href={href}
                      linkType={isLastElement ? "primary" : "link"}
                    >
                      {title}
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
}