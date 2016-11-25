package bancos

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*




class CuentasBancariasController extends RestfulController {

    static responseFormats = ['json', 'xml']
    CuentasBancariasController() {
        super(CuentasBancarias)
    }

    @Secured(value=['ROLE_ADMINISTRADOR'], httpMethod='GET')
    def mostrar(){
    	println "Estoy en cuentasBancarias"
    	def lista = CuentasBancarias.list()
    	println "lista"+lista
    	render  lista as  JSON
    }



    @Secured(value=['ROLE_ADMINISTRADOR'], httpMethod='GET')
    def insertar(CuentasBancarias cuentasInsert){
        println "Estoy en cuentasBancarias"
        cuentasInsert.save();
       render  status: 201 
    }

}
