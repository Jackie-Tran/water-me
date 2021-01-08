const shortenDay = (day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | string): string => {
    switch(day) {
        case 'monday':
            return 'Mon';
        case 'tuesday':
            return 'Tue';
        case 'wednesday':
            return 'Wed';
        case 'thursday':
            return 'Thu';
        case 'friday':
            return 'Fri';
        case 'saturday':
            return 'Sat';
        case 'sunday':
            return 'Sun';
        default:
            return '';
    }
}

export const repeatToString = (repeat: string[]): string => {
    // example repeat input: [monday,wednesday,thursday]
    // Single day
    if (repeat.length === 1) {
        return repeat[0];
    } else if (repeat.includes('monday') && repeat.includes('tuesday') && repeat.includes('wednesday') && repeat.includes('thursday') && repeat.includes('friday')) {
        return 'weekday';
    } else if (repeat.includes('saturday') && repeat.includes('sunday')) {
        return 'weekend'
    } else {
        // Convert days to short terms
        let formatedRepeat: string[] = repeat;
        formatedRepeat.map((day, index) => {
            return repeat[index] = shortenDay(day);
        })

        return formatedRepeat.toString();
    }

}