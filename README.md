# Some yapping for lore:
- i was fetching the weather data directly on the frontend, but that exposes my API key. To fix this, i moved the weather feature server side (backend).

- in this way, i can hide my **API key in a `.env` file** (a server-side specific feature. that means, `process.env.VARIABLE_NAME` is not available or accessible in the browser side.. that capability is only available backend). don't believe me? try it lol. use `process.env` in your frontend code and see if it works.

Path for the weather:
[https://weather-pets-adoption-see6.vercel.app/weather](https://weather-pets-adoption-see6.vercel.app/weather)
