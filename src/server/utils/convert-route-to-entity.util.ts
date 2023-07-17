const mapping: Record<string, string> = {
  advertisements: 'advertisement',
  articles: 'article',
  categories: 'category',
  publishers: 'publisher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
