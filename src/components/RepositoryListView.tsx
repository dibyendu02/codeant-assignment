import React, { useEffect } from "react";
import RepoCard from "./RepositoryCard";
import { Loader2Icon, Plus, RefreshCcw } from "lucide-react";
import { repositories } from "../lib/dummyData";
import { SearchInput } from "./ui/input";
import { Button } from "./ui/button";

const RepositoryListView: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleRefresh = (until: number) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, until ?? 3000);
  };

  useEffect(() => {
    handleRefresh(500);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepositories = React.useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <main className="flex-1 h-screen overflow-hidden">
      <div className="bg-white border-[1px] shadow-sm md:rounded-lg md:m-6 flex flex-col">
        <div className="border-b pb-6 flex flex-col max-h-[208px] md:max-h-[156px] p-4 py-3 md:p-6 md:py-5">
          <div className="md:flex md:justify-between md:items-center mb-4 gap-2">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
              <p className="text-sm text-gray-500">
                {loading ? "--" : repositories.length} total repositories
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button
                variant="outline"
                className="flex items-center gap-2 text-sm font-normal border border-gray-300 px-3 py-1 rounded-lg"
                onClick={() => handleRefresh(1500)}
              >
                <RefreshCcw className="h-5 w-5 text-gray-600" />
                Refresh All
              </Button>
              <Button className="flex items-center gap-2 bg-blue-500 text-sm font-normal hover:bg-blue-600 text-white px-3 py-1 rounded-lg">
                <Plus className="h-5 w-5" />
                Add Repository
              </Button>
            </div>
          </div>
          <SearchInput
            value={searchTerm}
            placeholder="Search Repositories"
            onChange={handleSearchChange}
          />
        </div>

        <div className="divide-y overflow-y-auto no-scrollbar h-[calc(100vh-272px)] md:h-[calc(100vh-190px)]">
          {loading && (
            <div className="w-full p-6 flex justify-center items-center text-gray-600">
              <Loader2Icon className="animate-spin" />
            </div>
          )}
          {!loading && filteredRepositories.length < 1 && (
            <p className="w-full p-4 flex justify-center text-gray-500">
              Looks like there is no repository to show
            </p>
          )}
          {!loading &&
            filteredRepositories.map((repo, i) => (
              <RepoCard key={repo.name} repo={repo} index={i} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default RepositoryListView;
