"use client";
import { FaGithub, FaStar, FaCodeBranch, FaFolder, FaLanguage, FaCalendarAlt, FaUserFriends, FaChartBar } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";
import { useState, useEffect } from "react";

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    updated_at: string;
    topics: string[];
}

interface GitHubUser {
    login: string;
    name: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    avatar_url: string;
    bio: string | null;
}



interface GitHubStats {
    user: GitHubUser;
    repos: GitHubRepo[];
    topLanguages: { language: string; count: number; percentage: number }[];
    totalStars: number;
    totalForks: number;
}

function GithubSection() {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const username = personalData.github.split('/').pop() || 'imnurav';

                // Fetch user data and repositories in parallel
                const [userResponse, reposResponse] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`, {
                        headers: { 'Accept': 'application/vnd.github.v3+json' }
                    }),
                    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
                        headers: { 'Accept': 'application/vnd.github.v3+json' }
                    })
                ]);

                if (!userResponse.ok || !reposResponse.ok) {
                    throw new Error('Failed to fetch GitHub data');
                }

                const user: GitHubUser = await userResponse.json();
                const repos: GitHubRepo[] = await reposResponse.json();

                // Calculate statistics
                const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
                const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

                // Calculate language statistics
                const languageStats = repos
                    .filter(repo => repo.language)
                    .reduce((acc: Record<string, number>, repo) => {
                        acc[repo.language!] = (acc[repo.language!] || 0) + 1;
                        return acc;
                    }, {});

                const topLanguages = Object.entries(languageStats)
                    .map(([language, count]) => ({
                        language,
                        count,
                        percentage: Math.round((count / repos.filter(r => r.language).length) * 100)
                    }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 6);

                setStats({
                    user,
                    repos,
                    topLanguages,
                    totalStars,
                    totalForks
                });

                setLoading(false);
            } catch (err) {
                setError("Failed to load GitHub data");
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) {
        return (
            <div className="my-12 lg:my-16 relative">
                <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                        GITHUB
                    </span>
                    <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                </div>
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="my-12 lg:my-16 relative">
                <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                        GITHUB
                    </span>
                    <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                </div>
                <div className="text-center py-12">
                    <p className="text-red-400 text-lg">{error}</p>
                </div>
            </div>
        );
    }

    if (!stats) return null;

    // Get most starred repositories
    const topRepos = stats.repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

    // Get recent repositories
    const recentRepos = stats.repos
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 4);

    return (
        <div id="github" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    GITHUB
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        My <span className="text-pink-500">GitHub</span> Activity
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore my open source contributions, repositories, and coding journey on GitHub
                    </p>
                </div>

                {/* Main Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-[#1a1443] p-6 rounded-xl border border-[#353a52] text-center hover:border-pink-500 transition-colors">
                        <FaFolder className="text-[#16f2b3] text-2xl mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white">{stats.user.public_repos}</div>
                        <div className="text-gray-400 text-sm">Repositories</div>
                    </div>

                    <div className="bg-[#1a1443] p-6 rounded-xl border border-[#353a52] text-center hover:border-pink-500 transition-colors">
                        <FaStar className="text-yellow-400 text-2xl mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white">{stats.totalStars}</div>
                        <div className="text-gray-400 text-sm">Total Stars</div>
                    </div>

                    <div className="bg-[#1a1443] p-6 rounded-xl border border-[#353a52] text-center hover:border-pink-500 transition-colors">
                        <FaCodeBranch className="text-green-400 text-2xl mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white">{stats.totalForks}</div>
                        <div className="text-gray-400 text-sm">Forks</div>
                    </div>

                    <div className="bg-[#1a1443] p-6 rounded-xl border border-[#353a52] text-center hover:border-pink-500 transition-colors">
                        <FaUserFriends className="text-blue-400 text-2xl mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white">{stats.user.followers}</div>
                        <div className="text-gray-400 text-sm">Followers</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Languages */}
                    <div className="bg-[#1a1443] p-6 rounded-xl border border-[#353a52]">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <FaLanguage className="text-pink-500" />
                            Top Languages
                        </h3>
                        <div className="space-y-3">
                            {stats.topLanguages.map((lang) => (
                                <div key={lang.language} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                                backgroundColor: lang.language === 'JavaScript' ? '#f1e05a' :
                                                    lang.language === 'TypeScript' ? '#3178c6' :
                                                        lang.language === 'Python' ? '#3572A5' :
                                                            lang.language === 'Java' ? '#b07219' :
                                                                lang.language === 'C++' ? '#f34b7d' : '#ccc'
                                            }}
                                        ></span>
                                        <span className="text-white">{lang.language}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-[#0d1224] rounded-full h-2">
                                            <div
                                                className="bg-[#16f2b3] h-2 rounded-full"
                                                style={{ width: `${lang.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-gray-400 text-sm w-12">{lang.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GitHub Profile Info */}
                    <div className="bg-[#1a1443] p-6 rounded-xl border border-[#353a52]">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <FaGithub className="text-pink-500" />
                            GitHub Profile
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={stats.user.avatar_url}
                                alt={stats.user.login}
                                className="w-16 h-16 rounded-full border-2 border-pink-500"
                            />
                            <div>
                                <h4 className="text-white font-semibold text-lg">{stats.user.name || stats.user.login}</h4>
                                <p className="text-gray-400">@{stats.user.login}</p>
                            </div>
                        </div>

                        {stats.user.bio && (
                            <p className="text-gray-300 mb-4 italic">"{stats.user.bio}"</p>
                        )}

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-400">
                                <FaCalendarAlt className="text-[#16f2b3]" />
                                <span>Joined {new Date(stats.user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <FaUserFriends className="text-blue-400" />
                                <span>{stats.user.following} following</span>
                            </div>
                        </div>

                        <a
                            href={personalData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block w-full text-center bg-gradient-to-r from-pink-500 to-violet-600 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-200"
                        >
                            View Full Profile
                        </a>
                    </div>
                </div>

                {/* Top Repositories */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Popular Repositories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topRepos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1a1443] p-5 rounded-xl border border-[#353a52] hover:border-pink-500 transition-all duration-300 hover:scale-105 group block"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="text-white font-semibold group-hover:text-pink-500 transition-colors">
                                        {repo.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" size={14} />
                                            {repo.stargazers_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCodeBranch className="text-green-400" size={14} />
                                            {repo.forks_count}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
                                    {repo.description || 'No description available'}
                                </p>

                                {repo.language && (
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                                backgroundColor: repo.language === 'JavaScript' ? '#f1e05a' :
                                                    repo.language === 'TypeScript' ? '#3178c6' :
                                                        repo.language === 'Python' ? '#3572A5' :
                                                            repo.language === 'Java' ? '#b07219' :
                                                                repo.language === 'C++' ? '#f34b7d' : '#ccc'
                                            }}
                                        ></span>
                                        <span className="text-gray-300 text-sm">{repo.language}</span>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Recent Activity
                    </h3>
                    <div className="bg-[#1a1443] rounded-xl border border-[#353a52] p-6">
                        <div className="space-y-4">
                            {recentRepos.map((repo) => (
                                <div key={repo.id} className="flex items-center justify-between py-3 border-b border-[#353a52] last:border-b-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0d1224] rounded-lg flex items-center justify-center">
                                            <FaFolder className="text-[#16f2b3]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">{repo.name}</h4>
                                            <p className="text-gray-400 text-sm">
                                                Updated {new Date(repo.updated_at).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GithubSection;