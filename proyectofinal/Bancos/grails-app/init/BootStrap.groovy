import bancos.CuentasBancarias
import bancos.*
import grails.rest.*
import grails.converters.*

class BootStrap {

    def init = { servletContext ->
    		new CuentasBancarias(nombre: "nombre1", numeroCuenta: 1000).save()
    		new CuentasBancarias(nombre: "nombre2", numeroCuenta: 1001).save()
    Role admin = new Role("ROLE_ADMINISTRADOR").save()
    User user = new User("admin","password").save()
    UserRole.create(user, admin,true).save()


    JSON.registerObjectMarshaller(CuentasBancarias) {
    	def output = [:]
    	output['nombreCuenta'] = it.nombre
    	output['numeroCuenta'] = it.numeroCuenta
    	return output;
	}

    }
    def destroy = {
    }
}
