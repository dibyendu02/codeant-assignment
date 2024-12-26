import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { SiBitbucket, SiGithub } from "@icons-pack/react-simple-icons";
import { KeyRoundIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Import assets
import Gitlab from "../assets/gitlab.svg";
import AzureDevops from "../assets/devops.svg";
import CodeantLogo from "../assets/logo.svg";
import AnalyticsImg from "../assets/analytics.svg";
import BiggerSmokePng from "../assets/bigger-smoke.svg";

const SignInPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("saas");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget;
    const originalContent = button.innerHTML;

    button.innerHTML = `
      <div class="animate-spin w-5 h-5 border-2 border-t-transparent border-blue-500 rounded-full"></div>
    `;

    setTimeout(() => {
      button.innerHTML = originalContent;
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Side - Illustration (hidden on mobile) */}
      <div className="relative flex-1 items-center justify-center bg-white hidden lg:flex overflow-hidden">
        <img
          src={AnalyticsImg}
          alt="Analytics"
          className="z-10 w-full max-w-[600px] p-8"
        />
        <img
          src={BiggerSmokePng}
          alt="Background"
          className="fixed bottom-6 left-6 w-[200px] lg:w-[300px]"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-gray-50 p-4 sm:p-6">
        {/* Login Container */}
        <div className="w-full max-w-[420px] md:max-w-[620px] flex flex-col rounded-lg bg-white px-4 sm:px-6 py-6 sm:py-9 shadow-sm gap-4 sm:gap-5 border-[0.1px]">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:gap-9 text-center">
            <img
              src={CodeantLogo}
              alt="CodeAnt AI"
              className="mx-auto h-6 sm:h-8"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Welcome to CodeAnt AI
            </h2>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="saas"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="grid w-full grid-cols-2 h-12 sm:h-16 p-[4px] mb-6 sm:mb-9 border-[1px] rounded-lg bg-gray-50 relative">
              <div
                className="absolute inset-[4px] w-[calc(50%-4px)] h-[calc(100%-8px)] bg-blue-600 rounded-lg transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${
                    selectedTab === "self-hosted" ? "100%" : "0"
                  })`,
                }}
              />
              <TabsTrigger
                value="saas"
                className="rounded-lg h-full text-base sm:text-lg md:text-[20px] text-gray-800 transition-colors duration-300 data-[state=active]:bg-transparent data-[state=active]:text-white relative z-10"
              >
                SAAS
              </TabsTrigger>
              <TabsTrigger
                value="self-hosted"
                className="rounded-lg h-full text-base sm:text-lg md:text-[20px] text-gray-800 transition-colors duration-300 data-[state=active]:bg-transparent data-[state=active]:text-white relative z-10"
              >
                Self Hosted
              </TabsTrigger>
            </TabsList>

            {/* SAAS Content */}
            <TabsContent value="saas" className="space-y-2 sm:space-y-3">
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full h-12 sm:h-14 text-sm sm:text-[16px] font-semibold"
              >
                <SiGithub
                  width={20}
                  height={20}
                  className="mr-2 scale-110 sm:scale-125"
                />
                Sign in with GitHub
              </Button>
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full h-12 sm:h-14 text-sm sm:text-[16px] font-semibold"
              >
                <SiBitbucket
                  width={20}
                  height={20}
                  className="mr-2 scale-110 sm:scale-125"
                  color="#2e8fff"
                />
                Sign in with Bitbucket
              </Button>
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full h-12 sm:h-14 text-sm sm:text-[16px] font-semibold"
              >
                <img
                  src={AzureDevops}
                  alt="Azure DevOps"
                  className="mr-2 w-5 sm:w-6"
                />
                Sign in with Azure DevOps
              </Button>
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full h-12 sm:h-14 text-sm sm:text-[16px] font-semibold"
              >
                <img src={Gitlab} alt="GitLab" className="mr-2 w-5 sm:w-6" />
                Sign in with GitLab
              </Button>
            </TabsContent>

            {/* Self Hosted Content */}
            <TabsContent value="self-hosted" className="space-y-2 sm:space-y-3">
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full h-12 sm:h-14 text-sm sm:text-[16px] font-semibold"
              >
                <img src={Gitlab} alt="GitLab" className="mr-2 w-5 sm:w-6" />
                Self Hosted GitLab
              </Button>
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full h-12 sm:h-14 text-sm sm:text-[16px] font-semibold"
              >
                <KeyRoundIcon
                  width={20}
                  height={20}
                  className="mr-2 scale-110 sm:scale-125"
                />
                Sign in with SSO
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        {/* Policy Text */}
        <div className="text-center text-xs sm:text-sm text-gray-500 px-4">
          By Signing up you agree to the{" "}
          <a href="#" className="text-black hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
