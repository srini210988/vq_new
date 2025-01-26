let slogans = null;

export const getSlogans = async () => {
    if(!slogans){
        const response = await fetch("/conf/slogan.json");
        slogans = await response.json();
    }
    return slogans;
}