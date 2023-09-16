import { Injectable } from '@nestjs/common'
import { CreateDoubanDto } from './dto/create-douban.dto'
import { UpdateDoubanDto } from './dto/update-douban.dto'
import axios from 'axios'

@Injectable()
export class WeiboService {
  async find(page: number) {
    const list = await axios.get(`https://weibo.com/ajax/statuses/mymblog?uid=2599152753&page=${page}&feature=0`, {
      headers: {
        Cookie:
          'SINAGLOBAL=4914447153745.425.1682139870333; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhvP7dPPF4W7lGoK53fu3l65JpX5KMhUgL.FoMRSh-EehnXehq2dJLoIpUj9gHzdEH8SC-4eF-RBEH8SCHWxFHWSntt; XSRF-TOKEN=6Z_Pn-WNpBsFPN0w4aJjH8O4; ALF=1697445902; SSOLoginState=1694853904; SCF=AtGTpAL1Z5CY_EGVcWMO0tOqbTzYjMRRGurmtvEv_DYgiHsQgJssjxMTsDnxUZJoj0ClxGBmdnrzBmsw6NPRawo.; SUB=_2A25IARtADeRhGeFG71cT8CbIyzqIHXVrdwuIrDV8PUNbmtB-LUPMkW9NeWLgZDSspfptogahVPBw1BMbNu-JoI4F; _s_tentry=weibo.com; Apache=8458770948773.939.1694853912720; ULV=1694853912749:6:2:2:8458770948773.939.1694853912720:1694287769254; webim_unReadCount=%7B%22time%22%3A1694854009548%2C%22dm_pub_total%22%3A1%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A35%2C%22msgbox%22%3A0%7D; WBPSESS=UUZD7LfMMcq6A42Wr1Z_xYYbdXlro5bpQZj8pgrLypTib7ss4WS49N8Fk8o-gT7kT81LctdIPlcKLFFDQiySsf2tj2AYbjyGrrUygRKpGkuJkaTDk2HF3awCfNlUOQrFAjW-YyCYBBEPZ0CRBRiZww==',
      },
    })
    const details = await axios.get('https://weibo.com/ajax/profile/info?uid=2599152753', {
      headers: {
        Cookie:
          'SINAGLOBAL=4914447153745.425.1682139870333; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhvP7dPPF4W7lGoK53fu3l65JpX5KMhUgL.FoMRSh-EehnXehq2dJLoIpUj9gHzdEH8SC-4eF-RBEH8SCHWxFHWSntt; XSRF-TOKEN=6Z_Pn-WNpBsFPN0w4aJjH8O4; ALF=1697445902; SSOLoginState=1694853904; SCF=AtGTpAL1Z5CY_EGVcWMO0tOqbTzYjMRRGurmtvEv_DYgiHsQgJssjxMTsDnxUZJoj0ClxGBmdnrzBmsw6NPRawo.; SUB=_2A25IARtADeRhGeFG71cT8CbIyzqIHXVrdwuIrDV8PUNbmtB-LUPMkW9NeWLgZDSspfptogahVPBw1BMbNu-JoI4F; _s_tentry=weibo.com; Apache=8458770948773.939.1694853912720; ULV=1694853912749:6:2:2:8458770948773.939.1694853912720:1694287769254; webim_unReadCount=%7B%22time%22%3A1694854009548%2C%22dm_pub_total%22%3A1%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A35%2C%22msgbox%22%3A0%7D; WBPSESS=UUZD7LfMMcq6A42Wr1Z_xYYbdXlro5bpQZj8pgrLypTib7ss4WS49N8Fk8o-gT7kT81LctdIPlcKLFFDQiySsf2tj2AYbjyGrrUygRKpGkuJkaTDk2HF3awCfNlUOQrFAjW-YyCYBBEPZ0CRBRiZww==',
      },
    })
    return {
      list: list.data.data.list,
      details: details.data.data.user,
    }
  }
}
