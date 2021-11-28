let users = {}

let add = (id,user) => {
    users[id] = {
        user,
        data: "yo"
    }
}

let list = () => {
    console.log("showing user list")
    console.log(users)
}

function getcookie(req) {
    const { headers: { cookie } } = req;
    if (cookie) {
        const values = cookie.split(';').reduce((res, item) => {
            const data = item.trim().split('=');
            return { ...res, [data[0]]: data[1] };
        }, {});
        return(values);
    }
    else return({});
}

function user(req){
    return users["user"]
}

function logged(req, res){
    let cookie = getcookie(req);
    if(cookie.user === undefined){
        res.send({act:"not logged", data: "not logged really"})
        return undefined;
    }else if(users[cookie.user] === undefined){
        res.send({act:"not logged", data:"no session"})
        return undefined;
    }else{
        return users[cookie.user];
    }
}

module.exports = { add, list, getcookie, user, logged }