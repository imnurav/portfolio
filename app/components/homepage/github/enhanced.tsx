"use client";
import { FaStar, FaCodeBranch, FaFolder, FaLanguage } from "react-icons/fa";
import { getGitHubStats, GitHubUser } from "@/utils/github-api";
import { personalData } from "@/utils/data/personal-data";
import { useState, useEffect } from "react";

interface GitHubStats {
  user: GitHubUser;
  stats: {
    totalStars: number;
    totalForks: number;
    totalRepos: number;
    topLanguages: { language: string; count: number }[];
    recentRepos: any[];
  };
}

function EnhancedGithubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Extract username from GitHub URL
        const username = personalData.github.split('/').pop() || 'imnurav';
        const githubStats = await getGitHubStats(username);
        setStats(githubStats);
        setLoading(false);
      } catch (err) {
        setError("Failed to load GitHub statistics");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="mt-8 p-6 bg-[#1a1443] rounded-xl border border-[#353a52]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <FaFolder className="text-[#16f2b3]" />
          GitHub Statistics
        </h3>
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#16f2b3] hover:text-pink-500 transition-colors"
        >
          View Profile →
        </a>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0d1224] p-4 rounded-lg border border-[#353a52]">
          <div className="flex items-center gap-2 mb-2">
            <FaFolder className="text-[#16f2b3]" />
            <span className="text-gray-400 text-sm">Repositories</span>
          </div>
          <div className="text-2xl font-bold text-white">{stats.stats.totalRepos}</div>
        </div>

        <div className="bg-[#0d1224] p-4 rounded-lg border border-[#353a52]">
          <div className="flex items-center gap-2 mb-2">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-400 text-sm">Stars</span>
          </div>
          <div className="text-2xl font-bold text-white">{stats.stats.totalStars}</div>
        </div>

        <div className="bg-[#0d1224] p-4 rounded-lg border border-[#353a52]">
          <div className="flex items-center gap-2 mb-2">
            <FaCodeBranch className="text-green-400" />
            <span className="text-gray-400 text-sm">Forks</span>
          </div>
          <div className="text-2xl font-bold text-white">{stats.stats.totalForks}</div>
        </div>

        <div className="bg-[#0d1224] p-4 rounded-lg border border-[#353a52]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-[#39d353] rounded-full"></span>
            <span className="text-gray-400 text-sm">Contributions</span>
          </div>
          <div className="text-2xl font-bold text-white">1000+</div>
        </div>
      </div>

      {/* Top Languages */}
      {stats.stats.topLanguages.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <FaLanguage className="text-pink-500" />
            Top Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {stats.stats.topLanguages.map((lang) => (
              <span
                key={lang.language}
                className="px-3 py-1 bg-[#0d1224] text-white text-sm rounded-full border border-[#353a52] hover:border-pink-500 transition-colors"
              >
                {lang.language} ({lang.count})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recent Repositories */}
      {stats.stats.recentRepos.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Recent Repositories</h4>
          <div className="space-y-2">
            {stats.stats.recentRepos.slice(0, 3).map((repo: any) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-[#0d1224] rounded-lg border border-[#353a52] hover:border-pink-500 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium text-white group-hover:text-pink-500 transition-colors">
                      {repo.name}
                    </h5>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: repo.language === 'JavaScript' ? '#f1e05a' :
                              repo.language === 'TypeScript' ? '#3178c6' :
                                repo.language === 'Python' ? '#3572A5' : '#ccc'
                          }}
                        ></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="text-green-400" size={12} />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Profile Info */}
      <div className="mt-6 pt-4 border-t border-[#353a52]">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>GitHub Member Since {new Date(stats.user.created_at).getFullYear()}</span>
          <span className="text-[#16f2b3]">
            {stats.user.followers} followers • {stats.user.following} following
          </span>
        </div>
      </div>
    </div>
  );
}

export default EnhancedGithubStats;