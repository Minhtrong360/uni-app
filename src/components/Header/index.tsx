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
        "fixed left-0 right-0 top-0 z-50 border-b bg-white px-2 shadow-sm"
      }
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            aria-label="Menu"
            onClick={() => setIsOpen(true)}
          >
            <Compass className="h-5 w-5" />
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
                        <ChevronRight className="h-4 w-4 text-gray-400" />
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
              className="h-10 w-32 pl-10 pr-4 text-sm md:w-64"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/notifications">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Bell className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/user/user-setting">
              <div className="h-10 w-10 overflow-hidden rounded-full">
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
        className={`fixed inset-0 transition-opacity duration-100 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed left-0 top-0 h-full w-[300px] transform bg-white shadow-lg transition-transform duration-200 ease-in-out sm:w-[400px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-2">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center rounded-lg p-3 transition-colors duration-200 hover:bg-gray-100"
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
