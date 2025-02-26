import { 
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, 
    NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger 
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { PackageOpen } from 'lucide-react'
import React, { FC } from 'react'
import NavItems from '../constant'
import Link from 'next/link'

interface ListItemProps {
    title: string
    description?: string
    path: string
}

const NavBar: FC = () => {
    return (
        <nav className='w-full sticky top-0 bg-yellow-100 hover:bg-yellow-200 p-4 z-50'>
            <div className='container mx-auto flex items-center  '>
                
                {/* Logo */}
                <Link href="/" className='font-bold text-xl mr-10 '>
                    OpenToFix
                </Link>

                {/* Navigation Menu */}
                <NavigationMenu className='hidden md:block'>
                    <NavigationMenuList className='space-x-6 '>
                        
                        {/* Regular Links */}
                        {[
                            { title: "Home", path: "/" },
                            { title: "About", path: "/about" },
                            { title: "Projects", path: "/projects" }
                        ].map((link, index) => (
                            <NavigationMenuItem key={index}>
                                <Link href={link.path} legacyBehavior passHref>
                                    <NavigationMenuLink className='font-medium hover:text-yellow-700 transition-colors'>
                                        {link.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}

                        {/* Dropdown Menu */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="font-medium capitalize bg-inherit hover:bg-inherit">
                                <span className='capitalize text-[16px]'>Services</span>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='grid gap-3 p-4 md:w-full lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                    
                                    {/* Highlighted Section */}
                                    <li className='row-span-3 bg-orange-300 p-4 rounded-md flex flex-col items-center justify-center'>
                                        <PackageOpen size={36} className='text-white' />
                                        <p className='text-white text-sm mt-2 text-center'>
                                            High-quality services tailored for you.
                                        </p>
                                    </li>

                                    {/* Dynamic Service List */}
                                    {NavItems.map((item, index) => (
                                        <ListItem key={index} path={item.path} title={item.title} description={item.description} />
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className='mx-auto flex-1'/>

                <div className='bg-amber-200 text-stone-950 px-5 py-3 rounded-md capitalize'>
                    estimate project
                </div>
            </div>
        </nav>
    )
}

const ListItem: FC<ListItemProps> = ({ title, description, path }) => {
    return (
        <NavigationMenuLink asChild>
            <Link href={path} className={cn(
                "block p-3 rounded-md transition-all hover:bg-yellow-300"
            )}>
                <div className="text-sm font-medium capitalize">{title}</div>
                {description && (
                    <p className="text-xs text-gray-600">{description}</p>
                )}
            </Link>
        </NavigationMenuLink>
    )
}

export default NavBar
