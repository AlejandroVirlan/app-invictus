# App Invictus en desarrollo con Angular

Este proyecto en desarrollo consiste en la parte cliente que conecta con la API REST en Spring    
para una asociación de juegos de mesa, con el fin de tener una aplicación desarrollada en Angular    
por la parte del cliente que se conecte a esta API realizada con Spring Framework 5.

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 7.0.6.

### FUNCIONES
---
* Tener un control de los socios que se han registrado e inician sesión.
* Poder controlar las reservas de los juegos de mesa que se soliciten.
* Tener un listado del libro de socios.
* Revisar los gastos y beneficios generados.

### IMPLEMENTACIONES
---
* Login de socios con JWT (Json Web Token)
* Logout
* Registro de socios
* CRUD de socios (que implica también a usuarios)

### INSTRUCCIONES
---
Antes de ejecutar el proyecto, realizar todos los pasos anteriores para el servidor [(API REST en Spring Framework 5)](https://github.com/AlejandroVirlan/spring-boot-invictus).   
Una vez que se haya realizado todo en la parte del servidor, hay que asegurarse antes de empezar, de que hay que tener instalado   
[Node.js](https://nodejs.org/en/) junto al gestionador de paquetes npm. 

Angular requiere Node.js versión 8.x or 10.x.

Para comprobar la versión de Node.js y npm, ejecutar los siguientes comandos en la consola/terminal del ordenador:

    Comando para comprobar la versión de Node.js: node -v
    Comando para comprobar la versión de npm: npm -v

A continuación, instalar Angular CLI con el siguiente comando:

    npm install -g @angular/cli

Después de esta instalación, hay que descargar las dependencias y módulos de Node (entre ellos, se encuentran los de Angular) para este proyecto.   
Para ello se utiliza el siguiente comando:

    npm install

Finalizado todos prerrequisitos, se ejecuta el proyecto con el comando:

    ng serve -o

Automáticamente aparecerá el navegador con la siguiente dirección `http://localhost:4200/`, y si se realiza algún cambio en cualquier archivo    
de la aplicación, se recargará inmediatamente.

### PRUEBAS
---

Las pruebas que se pueden realizar son:

* Entrar en la página para iniciar sesión, y sino eres socio, registrarte.
* Una vez registrado y logueado:
    * Acceder al listado de socios que haya en la base de datos desde el menú de navegación en la opción llamada "Socios".
    * Editar ciertos datos del socio.
    * Dar de baja a socios.
    * Ver tus roles, nombre de usuario, token de acceso y cerrar sesión en la página de Home.

Si no se ha iniciado sesión, no se puede realizar ninguno de los puntos descritos en el apartado de "Una vez registrado y logueado",   
porque no está autorizado.

Al estar en desarrollo, habrá cambios que irán siendo documentados y actualizados, entre ellos el diseño de la aplicación, validaciones, etc...,   
ya que primero me centro en realizar y comprobar la funcionalidad del proyecto. 
