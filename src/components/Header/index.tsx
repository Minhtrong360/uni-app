"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  Calendar,
  HeartHandshake,
  Home,
  Rocket,
  Search,
  Store,
  ChevronRight,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/store", icon: Store, label: "Store" },
    { href: "/events", icon: Calendar, label: "Events" },
    {
      href: "/support/dashboard",
      icon: HeartHandshake,
      label: "Student Support",
    },
    { href: "/academic", icon: Rocket, label: "Startup Projects" },
  ];

  const getBreadcrumbs = () => {
    const paths = pathName.split("/").filter((path) => path);
    return [
      { href: "/", label: "Home" },
      ...paths.map((path, index) => ({
        href: `/${paths.slice(0, index + 1).join("/")}`,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      })),
    ];
  };

  const breadcrumbs = getBreadcrumbs();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (pathName === "/") return <></>;

  return (
    <header
      className={
        "bg-white fixed top-0 left-0 right-0 shadow-sm border-b z-50 px-2"
      }
    >
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10"
            aria-label="Menu"
            onClick={() => setIsOpen(true)}
          >
            <Compass className="w-5 h-5" />
          </Button>
          {typeof window !== "undefined" && (
            <Breadcrumb className="ml-2">
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <BreadcrumbItem key={crumb.href}>
                    <BreadcrumbLink href={crumb.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-sm"
                      >
                        {crumb.label}
                      </Button>
                    </BreadcrumbLink>
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </BreadcrumbSeparator>
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Input
              type="text"
              placeholder="Search..."
              className="w-32 md:w-64 h-10 pl-10 pr-4 text-sm"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/notifications">
              <Button variant="outline" size="icon" className="w-10 h-10">
                <Bell className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/user/user-setting">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/home/3d-illustration-person-with-sunglasses_23-2149436188%20(1).avif?t=2024-09-25T06%3A08%3A19.358Z"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0  transition-opacity duration-100 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 w-[300px] sm:w-[400px] h-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-2">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="mr-4 h-5 w-5" />
                <span className="text-base">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
