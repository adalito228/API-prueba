class Weather extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .api-title{
          color: hsl(0, 0%, 100%);
          font-size: 1.5rem; 
          display: flex;
          flex-direction: column;
          gap:2rem; 
          justify-content: center;
          align-items: center;  
          height: 100vh;
        }

        .api-title h1{
          font-family: "Ubuntu", sans-serif;
          margin: 0; 
            
        }
        .api-title a{
          color: hsl(0, 0%, 100%);;
          background-color: hsl(0, 0%, 0%);; 
          padding: 1rem;
          border-radius: 2rem;
          font-family: "Ubuntu", sans-serif;
          font-size: 1rem;
          margin: 0; 
          text-decoration: none;  
        }
        .api-title a:hover{
          color:green;
        }

        .api-title img{
          max-width: 30%; 
          height: auto; 

        }
      </style>

      <div class="api-title">
        <h1>${this.title}</h1> 
      </div>
      `

    const button = document.createElement('button')
    button.textContent = 'Get Data'
    button.dataset.id = 'data-btn'

    const apiTitle = this.shadowRoot.querySelector('.api-title')
    apiTitle.appendChild(button)

    button.addEventListener('click', async () => {
      const data = await this.getApiData()
      const responseWeather = await this.getWeather({ data })

      if (responseWeather) {
        const parsedWeatherData = await responseWeather.json()

        const weatherDataFormated = parsedWeatherData.map(data => {
          return Object.entries(data).reduce((acc, [key, value]) => {
            acc[key] = value.trim().replace(',', '.')
            return acc
          }, {})
        })
        await this.sendDataToServer({ DataFormated: weatherDataFormated })
      }
    })
  }

  async getApiData () {
    let data = null
    try {
      const response = await fetch(`https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=${import.meta.env.VITE_API_KEY}`)
      if (!response.ok) {
        console.log(`Error: ${response.status}`)
      }
      data = await response.json()
    } catch (error) {
      console.error('Error al enviar los datos al servidor', error.message)
    }
    return data
  }

  async getWeather ({ data }, retries = 3, delay = 1000) {
    let responseWeather = null
    try {
      responseWeather = await fetch(data.datos)
      if (responseWeather.status === 404 && retries > 0) {
        const newData = await this.getApiData()
        await new Promise(resolve => setTimeout(resolve, delay))
        await this.getWeather({ data: newData }, retries - 1, delay)
      }
    } catch (error) {
      console.error('Error al traer los datos del servidor AEMET', error.message)
    }
    return responseWeather
  }

  async sendDataToServer ({ DataFormated }) {
    let responseServer = null
    try {
      responseServer = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/weather-conditions`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(DataFormated)
      })

      if (responseServer.status === 404) {
        console.error(`Error, código del servidor, ${responseServer.status}`)
      }
    } catch (error) {
      console.error('Error al enviar los datos al servidor', error.message)
    }

    return responseServer
  }
}

customElements.define('weather-component', Weather)
