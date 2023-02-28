import { http } from '@/utils/http'

enum OpenApi {
  OneSentence = '/open/sentence',
}

/**
 * @description 一言开放接口
 */
export const getSentence = () => {
  return http.get(OpenApi.OneSentence)
}
