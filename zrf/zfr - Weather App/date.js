let DateURL = "https://worldtimeapi.org/api/timezone/Asia/Karachi";

const getDate = async () => {
    let response = await fetch(URL);
    let data = await response.json()
    console.log(data)
}

getDate()