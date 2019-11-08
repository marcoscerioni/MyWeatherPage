# Lab 3 - Proyecto MayWeather

En este laboratorio teníamos que hacer una aplicación del clima con React. Todos los valores fueron tomados de una API, en específico https://openweathermap.org/api. 


## Instalación

Clonamos el repositorio: 

    git clone https://github.com/marcoscerioni/MyWeatherPage.git

Luego entramos en la carpeta: 

    cd MyWeatherPage/
    
En caso en el que no tenga instalado node y npm, lo instalamos :

     sudo apt install nodejs
     sudo apt install npm

Recomendamos que la version del node  sea: v10.15.3 o superior y la version del npm sea : 6.4.1 o superior

Luego instalamos npm, react-mdl y prendemos el server:

	 npm install
	 npm install --save react-mdl
	 npm start

Luego abrimos en el navegador http://localhost:8080/ para poder correr la aplicación web.

## Demo
![Demo MayWeather](https://lh3.googleusercontent.com/gvWeJbZBqMAmAeACeO6zFKx1F6XKZapGSOBv7yFjC5p9kpGeYy68j6zBEUwQLZBaeskBIB5sd7GAaA=s1000)

## Modularización

 En public se encuentran los .css que se utilizan para que la app tenga un mejor estilo. 
 En src se encuentran: 
 - actions/weatherActions.js: se encuentran las dos llamadas a la api, una para current y la otra para forecast.
 
 - components/App.jsx: se encuentran los formularios de entrada de datos de la página principal, y la funcionalidad del "check weather".
 
 - components/Form.jsx: se encuentra el front-end de la página principal. 
 
 - components/Tabs/Tabs.jsx: se encuentra los tabs de current, forecast y uvi. 
 
 - components/Tabs/TabsContent/Current/Current.jsx: se encuentra toda la información requerida del día actual para mostrar en current. 
 
 - components/Tabs/TabsContent/Forecast/Forecast.jsx: forecastCard y forecastCardDetail necesitan de este arcihvo que es el que se encarga de obtener la información. Este archivo te dirige a los otros dos, segun el estado. 
 
 - components/Tabs/TabsContent/Forecast/ForecastCard.jsx: es el encargado de mostrar el clima de los 5 días posteriores al actual.
 
 - components/Tabs/TabsContent/Forecast/ForecastCardDetail.jsx: es el encargado de mostrar el clima de un día en específico separado en el lapso de 3 horas.
 
 - constants/apiConstants.js: se encuentra la clave de la api y  la url que se usa.
 
 - templates/*: se encarga de mostrar el html del mensage de error, y el ícono del "loading/cargando".
 
 - utils/dateUtils.js: contiene funciones que devuelven el día actual, el porcentaje de rain (si existe).
 
 ## Desición de diseño
 Decidimos modularizar las llamadas de la api en la carpeta actions. 
 Luego en componenets decidimos modularizar los Tabs en dos grandes carpetas: la de current y la de forecast. 
 En la carpeta Forecast se encuentran 3 archivos, decidimos modularizarlo así para que cuando Forecast.jsx cambie de estado, llame a algunos de los otros dos archivos. 
 Decidimos también que al hacer click en una Card de forecast, se muestre el clima en diferentes horarios, y al hacer click otra vez en alguna de estas, vuelve otra vez al forecastCard de los 5 días. 

