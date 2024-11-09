import { EventData, Page } from '@nativescript/core';
import { SearchViewModel } from './view-models/search-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new SearchViewModel();
}