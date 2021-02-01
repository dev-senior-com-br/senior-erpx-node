/**
 * Produto
 * Serviço de Produto do ERPX
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E012fxm } from './e012fxm';
import { E047ntg } from './e047ntg';
import { E070emp } from './e070emp';
import { E076mar } from './e076mar';
import { E083ori } from './e083ori';
import { EnumExiMon } from './enumExiMon';
import { EnumSitReg } from './enumSitReg';
import { EnumTipPro } from './enumTipPro';


export interface E012fam { 
    /**
     * Código
     */
    codFam: string;
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
    e047ntg?: E047ntg;
    proMon?: EnumExiMon;
    /**
     * Ligacação família - máscara
     */
    e012fxm?: Array<E012fxm>;
    /**
     * Descrição
     */
    desFam: string;
    /**
     * Quantidade de posições para o código de produto
     */
    posPro: number;
    /**
     * 
     */
    dthalt?: Date;
    e076mar?: E076mar;
    e083ori: E083ori;
    sitFam?: EnumSitReg;
    /**
     * 
     */
    usuger?: string;
    e070emp: E070emp;
    /**
     * Número do nível da origem do produto
     */
    numOri?: number;
    /**
     * 
     */
    id?: string;
    /**
     * Indicativo que os produtos produzidos desta família são &#39;kit&#39; c/ vários produtos agregados p/ venda (não gera op)
     */
    indKit: boolean;
    tipPro?: EnumTipPro;
}