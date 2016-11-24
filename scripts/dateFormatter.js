var dateFormatter = function () {
    var retModel = {};

    retModel.formatDate = function(date) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var dateString = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + getOrdinalSuffix(date.getDate()) + ', ' + date.getFullYear();
        var timeString = padWithZeros(get12HourTime(date.getHours())) + ':' + padWithZeros(date.getMinutes()) + ':' + padWithZeros(date.getSeconds()) + ' ' + getAmPm(date.getHours());
        return dateString + ' - ' + timeString;
    }

    function getOrdinalSuffix(day) {
        var dayString = day.toString();

        //11th, 12th, and 13th don't follow the rest of the ordinal suffix rules
        if (dayString.endsWith('11') || dayString.endsWith('12') || dayString.endsWith('13'))
            return 'th';
        else if (dayString.endsWith('1'))
            return 'st';
        else if (dayString.endsWith('2')) 
            return 'nd';
        else if (dayString.endsWith('3'))
            return 'rd';
        else 
            return 'th';
    }

    function getAmPm (hour) {
        if (hour < 12)
            return 'AM';
        else
            return 'PM';
    }

    function get12HourTime(hour) {
        if (hour === 0)
            return 12;
        else if (hour < 13)
            return hour;
        else
            return hour - 12;
    }

    function padWithZeros(num) {
        if (num < 10)
            return "0" + num;
        else
            return num.toString();
    }

    return retModel;
}