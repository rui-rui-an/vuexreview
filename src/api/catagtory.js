import _axios from '@/utils/request.js'
function getCatagtoryList () {
  return _axios({
    url: '/v1_0/channels'
  })
}
export { getCatagtoryList }
