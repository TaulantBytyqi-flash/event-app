import axios from 'axios';

const url = 'api/eventsType/';

class EventsTypeServices{
    //get events
    static getEventsType(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(eventsType => ({
                        ...eventsType,
                        createdAt: new Date(eventsType.createdAt)
                    }))
                );        
            }catch(err){
                reject(err);
            }
        })
    }
    // create posts

    static insertEventsType(eventName){
        return axios.post(url,{
            eventName
        });
    }
    // delete post

    static deleteEventsType(id){
        return axios.delete(`${url}${id}`);
    }
}

export default EventsTypeServices;