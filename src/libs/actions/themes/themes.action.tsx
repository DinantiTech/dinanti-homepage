'use server'

import { ThemesDataListType } from '@/libs/types/themes.type';
import axios from 'axios';

const BASE_URL = process.env.BASE_URL! ?? "http://localhost:1337";
const ITEMS_PER_PAGE = 10;

export async function getInitialThemes(): Promise<ThemesDataListType> {
  const { data } = await axios.get(`${BASE_URL}/api/themes`, {
    params: paramsPage({}),
  });
  return data;
}

export async function fetchMoreThemes({ pageParam, searchTerm }: { pageParam: number, searchTerm?: string }): Promise<ThemesDataListType> {
  const { data } = await axios.get(`${BASE_URL}/api/themes`, {
    params: paramsPage({ page: pageParam, searchTerm }),
  });
  return data;
}

function paramsPage({ page, pageSize, searchTerm }: { page?: number, pageSize?: number, searchTerm?: string }) {
  const params: any = {
    populate: {
      cover: {
        fields: ['url']
      },
      screenshot: {
        fields: ['url']
      }
    },
    pagination: {
      page: page ?? 1,
      pageSize: pageSize ?? ITEMS_PER_PAGE
    }
  };

  if (searchTerm) {
    params.filters = {
      $or: [
        { title: { $containsi: searchTerm } },
        { slug: { $containsi: searchTerm } },
        { categories: { $containsi: searchTerm } }
      ]
    };
  }

  return params;
}
// /api/themes?populate[cover][fields][0]=url&populate[screenshot][fields][0]=url&pagination[page]=1&pagination[pageSize]=10&filters[$or][0][title][$containsi]=SEARCH_TERM&filters[$or][1][slug][$containsi]=SEARCH_TERM&filters[$or][2][categories][name][$containsi]=SEARCH_TERM