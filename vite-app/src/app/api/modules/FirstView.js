import { get } from '../requests';
import urls from '../../utils/urls';

export const getgroupsAPI = () =>
  get(null, false, urls.firstViewUrls.groups, null);