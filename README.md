# # SISTEMA SMM POR JUAN DUQUE SMM 
## PRUEBA LINKTIC 

### La prueba quedo a finalizar el modulo de pedido por que el tiempo de entrega se paso por implmentar arquitectura hexagonal 

## 

Resumen para Instalar y Correr un Aplicativo Angular
Instala Node.js y Angular CLI: Descarga e instala Node.js desde su sitio oficial y luego instala Angular CLI globalmente con npm install -g @angular/cli.

Clona el Repositorio: Usa git clone <URL_DEL_REPOSITORIO> para clonar el proyecto en tu máquina y navega al directorio del proyecto.

Instala Dependencias: Ejecuta npm install para instalar todas las dependencias necesarias.

Inicia el Servidor de Desarrollo: Ejecuta ng serve para correr la aplicación en http://localhost:4200.

Construye para Producción (opcional): Usa ng build --prod para crear una versión optimizada de la aplicación.

Despliegue (opcional): Sube los archivos de la carpeta dist/ a la plataforma de despliegue elegida.

### Configuración de aplicativo en Backend 


Se realiza arquitectura hexagonal 
la base de datos es mssql su abjunta de los documentos tecncios configuración 

Se realizar la entrega de credenciaeles para el pase de datos
1.1. Base de Datos MySQL
    Nombre de la Base de Datos: smm
    Host: localhost (o IP del servidor)
    Puerto: 3306
    Usuario: root
    Contraseña: 

## Roles y Credenciales
1.  ### Cliente
   Descripción: Usuario final que puede realizar compras y gestionar su información personal.
   Permisos:
   Ver productos
   Realizar pedidos
   Gestionar perfil
   Credenciales:
### Usuario: ejemplo_cliente@correo.com
### Contraseña: ClaveCliente123
2.  ###Coordinador
   Descripción: Usuario encargado de gestionar pedidos y supervisar la actividad de los clientes.
   Permisos:
   Ver todos los pedidos
   Actualizar el estado de los pedidos
   Gestionar clientes
   Credenciales:
   ### Usuario: ejemplo_coordinador@correo.com
   ### Contraseña: ClaveCoordinador123
3. ### Administrador
   Descripción: Usuario con acceso completo al sistema para gestionar todos los aspectos de la plataforma.
   Permisos:
   Administrar usuarios (Clientes y Coordinadores)
   Gestionar productos y categorías
   Ver reportes y análisis
   Credenciales:
  ### Usuario: ejemplo_administrador@correo.com
### Contraseña: ClaveAdministrador123


# smmback
