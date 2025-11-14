import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <header>
        <nav>
            <Image src="/logo.svg" alt="logo" width={30} height={30}/>

            <ul>
                {NavLinks.map(({label}) => (
                    <li key={label}>
                        <Link href="#">{label}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex-center gap-3">
                <button>
                    <Image src="/search.svg" alt="search" width={20} height={20}/>
                </button>
                <button>
                    <Image src="/cart.svg" alt="cart" width={20} height={20}/>
                </button>

            </div>
        </nav>
    </header>
  )
}