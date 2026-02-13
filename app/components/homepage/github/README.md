# GitHub Section Component

This component displays real-time data from your GitHub profile (https://github.com/imnurav) with comprehensive statistics and visualizations.

## Features

### Real Data Integration
- **Live GitHub API**: Fetches actual data from your GitHub profile
- **Repository Statistics**: Total repositories, stars, and forks count
- **Language Analytics**: Top programming languages with usage percentages
- **Repository Showcase**: Most starred and recently updated repositories
- **Profile Information**: Avatar, bio, join date, and follower count

### Visual Design
- **Theme Consistent**: Matches your portfolio's dark theme (#0d1224 background)
- **Responsive Layout**: Works on all screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Animated spinners during data fetch
- **Error Handling**: Graceful fallbacks for API issues

### Sections Included
1. **Main Statistics Cards**: Repositories, Stars, Forks, Followers
2. **Top Languages**: Visual language distribution with progress bars
3. **GitHub Profile**: Avatar, bio, and account information
4. **Popular Repositories**: Top 6 most starred repositories
5. **Recent Activity**: 4 most recently updated repositories

## Data Sources

All data is fetched from the GitHub REST API:
- User profile: `https://api.github.com/users/imnurav`
- Repositories: `https://api.github.com/users/imnurav/repos`

## Current GitHub Stats (Real Data)
Based on your profile:
- **Public Repositories**: 71
- **Followers**: 11
- **Following**: 6
- **Member Since**: October 2019

## Integration

The component is already integrated into your main page (`app/page.tsx`) and positioned above the Projects section.

### Component Structure
```
GithubSection/
├── Main Statistics (4 cards)
├── Top Languages (progress bars)
├── GitHub Profile (avatar + info)
├── Popular Repositories (grid)
└── Recent Activity (list)
```

### Position in Page Flow
1. Hero Section
2. About Section
3. Experience
4. Skills
5. **GitHub Section** ← Added here
6. Projects
7. Education
8. Blog
9. Contact

## Customization

### Colors
The component uses your existing theme variables:
- Primary: `#1a1443` (dark blue)
- Background: `#0d1224` (darker blue)
- Borders: `#353a52` (gray-blue)
- Accent: `#16f2b3` (green)
- Pink accent: `pink-500`

### Language Colors
Predefined colors for popular languages:
- JavaScript: `#f1e05a` (yellow)
- TypeScript: `#3178c6` (blue)
- Python: `#3572A5` (blue)
- Java: `#b07219` (orange)
- C++: `#f34b7d` (pink)

### API Rate Limits
GitHub's public API has rate limits:
- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5000 requests per hour

The component handles rate limiting gracefully with error messages.

## Performance Considerations

- **Client-side fetching**: Data is fetched on component mount
- **Single API calls**: User data and repositories fetched in parallel
- **No caching**: Fresh data on each page load
- **Minimal re-renders**: Optimized state management

## Future Enhancements

Potential additions:
- Year-wise contribution graphs
- GitHub README integration
- Organization membership display
- Contribution streak tracking
- Repository search functionality
- Dark/light theme toggle