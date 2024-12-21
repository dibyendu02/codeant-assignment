import { RefreshCcw, Plus, File } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import Sidebar from "./Sidebar";

type Language =
  | "React"
  | "Javascript"
  | "Python"
  | "Swift"
  | "Java"
  | "HTML/CSS"
  | "PHP";

type Repository = {
  name: string;
  isPublic: boolean;
  language: Language;
  size: string;
  updatedAgo: string;
};

const RepositoryListing = () => {
  const repositories: Repository[] = [
    {
      name: "design-system",
      isPublic: true,
      language: "React",
      size: "7320 KB",
      updatedAgo: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      isPublic: false,
      language: "Javascript",
      size: "5871 KB",
      updatedAgo: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      isPublic: false,
      language: "Python",
      size: "4521 KB",
      updatedAgo: "5 days ago",
    },
    {
      name: "mobile-app",
      isPublic: true,
      language: "Swift",
      size: "3096 KB",
      updatedAgo: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      isPublic: false,
      language: "Java",
      size: "6210 KB",
      updatedAgo: "6 days ago",
    },
    {
      name: "blog-website",
      isPublic: true,
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAgo: "4 days ago",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <Sidebar />

      <main className="md:pl-64">
        <div className="p-6">
          <div className="border-b pb-6">
            <div className="md:flex md:justify-between md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Repositories</h1>
                <p className="text-sm text-gray-500">33 total repositories</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Refresh All
                </Button>
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-[#1570EF] hover:bg-[#1570EF]/90"
                >
                  <Plus className="h-4 w-4" />
                  Add Repository
                </Button>
              </div>
            </div>

            <div>
              <Input placeholder="Search Repositories" className="max-w-md" />
            </div>
          </div>

          <div className="divide-y">
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="py-3 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-gray-900">
                        {repo.name}
                      </span>
                      <Badge
                        variant={repo.isPublic ? "secondary" : "outline"}
                        className={`text-xs px-2 py-0.5 font-normal 
                          ${
                            repo.isPublic
                              ? "bg-blue-50 text-blue-700 hover:bg-blue-50"
                              : "border-gray-200 text-gray-700"
                          }`}
                      >
                        {repo.isPublic ? "Public" : "Private"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                        {repo.language}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <File className="h-3 w-3" />
                        {repo.size}
                      </div>
                      <span>• Updated {repo.updatedAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RepositoryListing;
