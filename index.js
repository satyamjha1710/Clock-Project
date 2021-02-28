setInterval(() => {
    date=new Date();
    hTime= date.getHours();
    mTime= date.getMinutes();
    sTime= date.getSeconds();
    hrot= 30*hTime + mTime/2;
    mrot= 6*mTime;
    srot= 6*sTime;

    hour.style.transform= `rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;
}, 1000);