/**
 * Pessoa
 * Serviço de Gestão de Pessoas do ERPX
 *
 * OpenAPI spec version: 1.12.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EnumTipEmp } from './enumTipEmp';


export interface E026ram { 
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    /**
     * 
     */
    dthger?: Date;
    /**
     * Descrição
     */
    desRam?: string;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * Abreviatura
     */
    abrRam?: string;
    tipRam?: EnumTipEmp;
    /**
     * 
     */
    usuger?: string;
    /**
     * Indicativo se o ramo de atividade é para condutor de veículos
     */
    condutor?: boolean;
    /**
     * Indicativo se o ramo de atividade trata-se de Armazém geral/Operador logístico
     */
    armGerOpeLog?: boolean;
    /**
     * Indicativo se o ramo de atividade é para seguradoras
     */
    seguradora?: boolean;
    /**
     * 
     */
    id?: string;
    /**
     * Ramo Atividade
     */
    codRam?: string;
}
