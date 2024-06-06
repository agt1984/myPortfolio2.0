import { navMenuList } from "@/data/navigationData";

export function Navigation() {
    return ( 
        <nav className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 bg-zinc-900/20 backdrop-blur-md"> 
            <p>logo</p>
            <div>
                <ul>{
                    navMenuList.map(({title,href}) => {
                        return <li key={href}></li>;
                    })}
                </ul>
            </div>
        </nav>
    );
}