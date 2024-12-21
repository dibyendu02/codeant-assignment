import { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Shield,
  Settings,
  LogOut,
  HelpCircle,
  HomeIcon,
  Code,
  User,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const NAVIGATION_ITEMS = [
  "Repositories",
  "AI Code Review",
  "Cloud Security",
  "How to Use",
  "Settings",
] as const;
type NavigationItem = (typeof NAVIGATION_ITEMS)[number];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] =
    useState<NavigationItem>("Repositories");

  const users = [
    "UtkarshDhairyaPatel",
    "JohnDoe",
    "JaneSmith",
    "RobertJohnson",
  ];

  return (
    <div className="hidden md:flex flex-col w-64 h-screen border-r bg-white p-4 fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-4">
        <div className="w-40 h-8">
          <img
            src="/images/logo.svg"
            alt="CodeAnt AI"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* User Dropdown */}
      <div className="mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between font-normal border-gray-200"
            >
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="truncate">UtkarshDhairyaPa...</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white rounded-xl">
            {users.map((user) => (
              <DropdownMenuItem key={user} className="rounded-lg">
                <User className="h-4 w-4 mr-2" />
                {user}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        <Button
          variant="ghost"
          className={`justify-start gap-2 h-10 font-normal
            ${
              selectedItem === "Repositories"
                ? "bg-[#1570EF] text-white hover:bg-[#1570EF] hover:text-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-gray-600"
            }`}
          onClick={() => setSelectedItem("Repositories")}
        >
          <HomeIcon className="h-4 w-4" />
          Repositories
        </Button>

        <Button
          variant="ghost"
          className={`justify-start gap-2 h-10 font-normal
            ${
              selectedItem === "AI Code Review"
                ? "bg-[#1570EF] text-white hover:bg-[#1570EF] hover:text-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-gray-600"
            }`}
          onClick={() => setSelectedItem("AI Code Review")}
        >
          <Code className="h-4 w-4" />
          AI Code Review
        </Button>

        <Button
          variant="ghost"
          className={`justify-start gap-2 h-10 font-normal
            ${
              selectedItem === "Cloud Security"
                ? "bg-[#1570EF] text-white hover:bg-[#1570EF] hover:text-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-gray-600"
            }`}
          onClick={() => setSelectedItem("Cloud Security")}
        >
          <Shield className="h-4 w-4" />
          Cloud Security
        </Button>

        <Button
          variant="ghost"
          className={`justify-start gap-2 h-10 font-normal
            ${
              selectedItem === "How to Use"
                ? "bg-[#1570EF] text-white hover:bg-[#1570EF] hover:text-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-gray-600"
            }`}
          onClick={() => setSelectedItem("How to Use")}
        >
          <BookOpen className="h-4 w-4" />
          How to Use
        </Button>

        <Button
          variant="ghost"
          className={`justify-start gap-2 h-10 font-normal
            ${
              selectedItem === "Settings"
                ? "bg-[#1570EF] text-white hover:bg-[#1570EF] hover:text-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-gray-600"
            }`}
          onClick={() => setSelectedItem("Settings")}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-1">
        <Button
          variant="ghost"
          className="justify-start gap-2 h-10 font-normal text-gray-600 hover:bg-blue-50 hover:text-gray-600"
        >
          <HelpCircle className="h-4 w-4" />
          Support
        </Button>

        <Button
          variant="ghost"
          className="justify-start gap-2 h-10 font-normal text-gray-600 hover:bg-blue-50 hover:text-gray-600"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
