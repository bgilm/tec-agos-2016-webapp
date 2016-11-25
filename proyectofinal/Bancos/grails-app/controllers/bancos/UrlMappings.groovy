package bancos

class UrlMappings {

    static mappings = {
        "/cuentas"(controller:"CuentasBancarias",  method: 'GET',action:'mostrar')
        "/cuentas"(controller:"CuentasBancarias",  method: 'POST',action:'insertar')
        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
