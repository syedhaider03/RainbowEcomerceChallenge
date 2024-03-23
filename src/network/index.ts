import endpoints from './endpoints';
import httpPrivateService from 'services/httpPrivateService';

export const doGetAllNews = <T>({
  q,
  searchIn,
  sources,
  domains,
  excludeDomains,
  from,
  to,
  language,
  sortBy,
  pageSize,
  page,
}: RequestOptions.AllNews) => {
  return httpPrivateService.get<T>(endpoints.getAllNews, {
    params: {
      q,
      searchIn,
      sources,
      domains,
      excludeDomains,
      from,
      to,
      language,
      sortBy,
      pageSize,
      page,
    },
  });
};

export const doGetTopHeadlinesSources = <T>({
  category,
  language,
  country,
}: RequestOptions.TopHeadlinesSources) => {
  return httpPrivateService.get<T>(endpoints.getTopHeadlineSources, {
    params: {
      category,
      language,
      country,
    },
  });
};

export const doGetTopHeadlinesNews = <T>({
  q,
  sources,
  pageSize,
  page,
  country,
  category,
}: RequestOptions.TopHeadlines) => {
  return httpPrivateService.get<T>(endpoints.getTopHeadline, {
    params: {
      q,
      sources,
      pageSize,
      page,
      country,
      category,
    },
  });
};
