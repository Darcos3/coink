# A cerca del proyecto
El proyecto ha sido construido con ionic - angular - ngModules, generado a traves de capacitor

En global.css se ha definido las fuentes que se usand dentro del proyecto
En theme/variables.css se encuentran los colores creados para este proyecto

# Flujo del proyecto
El proyecto se compone de 2 paginas

- home: Se compone del logo de coink, un titulo y dos botones, del ingreso y el registrate
- register: Aquí está todo el cuerpo del proyecto generado para esta prueba, se ha programado los pasos mediante contenedores usando la sentencia *ngIf para programar los
pasos del formulario e ingreso de información.

Al finalizar el registro de datos, se mostrará la información del usuario registrado y un boton para regresar al home o inicio

# Construcción
Para construir el proyecto por favor siga los siguientes pasos:

- ionic build --prod
- ionic capacitor add android
- ionic capacitor add ios
- ionic capacitor update android
- ionic capacitor update ios
- cordova-res android --skip-config --copy -force
- cordova-res ios --skip-config --copy -force
- ionic capacitor sync
- ionic capacitor open android
- ionic capacitor open ios