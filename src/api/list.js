import _axios from '@/utils/request.js'
export function getInfo (id) {
  return _axios({
    url: `/v1_1/articles?channel_id=${id}&timestamp=${Date.now()}&with_top=1`
  })
}
