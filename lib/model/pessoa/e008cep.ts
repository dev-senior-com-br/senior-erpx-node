/**
 * Pessoa
 * Serviço de Gestão de Pessoas do ERPX
 *
 * OpenAPI spec version: 1.10.6
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E008rai } from './e008rai';


export interface E008cep { 
    /**
     * Logradouro
     */
    logEnd?: string;
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    /**
     * Bairro
     */
    baiEnd?: string;
    /**
     * 
     */
    dthger?: Date;
    /**
     * CEP endereço
     */
    cepIni?: number;
    /**
     * 
     */
    dthalt?: Date;
    e008rai?: E008rai;
    /**
     * 
     */
    id?: string;
    /**
     * 
     */
    usuger?: string;
}
