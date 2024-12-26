import Sidebar from "../components/Sidebar";
import RepositoryListView from "../components/RepositoryListView";

type Language =
  | "Python"
  | "Java"
  | "Rust"
  | "Swift"
  | "Javascript"
  | "React"
  | "HTML/CSS"
  | "PHP"
  | "C++";

export type Repository = {
  name: string;
  isPublic: boolean;
  language: Language;
  size: string;
  updatedAgo: string;
};

const RepositoryListing = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 overflow-hidden flex flex-col md:flex-row">
      <Sidebar />
      <RepositoryListView />
    </div>
  );
};

export default RepositoryListing;
