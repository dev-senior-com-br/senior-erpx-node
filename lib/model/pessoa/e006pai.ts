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


export interface E006pai { 
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    /**
     * Visto entrada
     */
    visEnt?: boolean;
    /**
     * Código do país na DIRF
     */
    paiDir?: number;
    /**
     * País Siscomex/Siscoserv
     */
    paiSis?: number;
    /**
     * Mercosul
     */
    merSul?: boolean;
    /**
     * 
     */
    dthger?: Date;
    /**
     * Nome
     */
    nomPai?: string;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * Código
     */
    codPai?: string;
    /**
     * 
     */
    id?: string;
    /**
     * 
     */
    usuger?: string;
}