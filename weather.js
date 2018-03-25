class Weather{
    constructor(city, state){
        this.api_key = '17c647140945cfec',
        this.city = city,
        this.state = state
    }
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`)

        const responseData = await response.json()
        console.log('Weather data', responseData);

        return responseData.current_observation;
    }

    async changeLocation(city, state){
        this.city = city,
        this.state = state
    }
}