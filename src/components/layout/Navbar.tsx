"use client"

import * as React from "react"
import Link from "next/link"
import nav_items from "@/constant/layout/NavItems";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/layout/Shadcn_Navbar_Components"

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
          {nav_items.map((item, index) => (
            <NavigationMenuItem key={index}>
                {/*First we check if there are any dropdownItems. If yes, map down again.*/}
                {typeof item.dropdownItems !== 'undefined' ? (
                    // First give a trigger to open to dropdown menu with the title of the item
                    <><NavigationMenuTrigger>
                          {item.title}
                      </NavigationMenuTrigger>
                        {/* Next we include all the content needed inside the dropdown */}
                        <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                                  {item.dropdownItems.map((dropdownItem, index) => (
                                    <div key={dropdownItem.title+index}>
                                        {/*Now we check if the item has a description, if it does we render it!*/}
                                        {typeof dropdownItem.description !== 'undefined' ? 
                                            // Rendered list item where a description exists 
                                            (<ListItem
                                                title={dropdownItem.title}
                                                href={dropdownItem.link}
                                            >
                                                {dropdownItem.description}
                                            </ListItem>) 
                                            : 
                                            // Rendered list item with only a title and link
                                            (<ListItem
                                                title={dropdownItem.title}
                                                href={dropdownItem.link}
                                            />) 
                                        }
                                    </div>
                                  ))}
                              </ul>
                          </NavigationMenuContent></>
                ) : (
                    // This occurs if there are no dropdown items and there just needs to be a button in the navbar that links somewhere
                    <Link href={item.link} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {item.title}
                        </NavigationMenuLink>
                    </Link>
                )}
            </NavigationMenuItem>
          )
          )
          }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
// {typeof item.dropdownItems !== 'undefined' ? (
{/* <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link> */}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"