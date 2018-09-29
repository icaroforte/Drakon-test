/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package narcoticsburning;

import javafx.beans.property.SimpleStringProperty;

/**
 *
 * @author Dayana
 */
public class Entorpecente {
    
    public SimpleStringProperty ip = new SimpleStringProperty("");
    public SimpleStringProperty TCO = new SimpleStringProperty("");
    public SimpleStringProperty data_entrada = new SimpleStringProperty("");
    public SimpleStringProperty investigado = new SimpleStringProperty("");
    public SimpleStringProperty substancia = new SimpleStringProperty("");
 
    public SimpleStringProperty unidade = new SimpleStringProperty("");
    public SimpleStringProperty laudo = new SimpleStringProperty("");
    public SimpleStringProperty vara = new SimpleStringProperty("");
    public SimpleStringProperty numero_processo = new SimpleStringProperty("");
    public SimpleStringProperty lacre = new SimpleStringProperty(""); 
    
public Entorpecente(SimpleStringProperty ip, SimpleStringProperty TCO,
        SimpleStringProperty data_entrada, SimpleStringProperty investigado, 
        SimpleStringProperty substancia, SimpleStringProperty unidade, SimpleStringProperty laudo,
        SimpleStringProperty vara, SimpleStringProperty numero_processo, SimpleStringProperty lacre)
{
    
}
    
public SimpleStringProperty getIp() {
        return ip;
    }

    public SimpleStringProperty getTCO() {
        return TCO;
    }

    public SimpleStringProperty getData_entrada() {
        return data_entrada;
    }

    public SimpleStringProperty getInvestigado() {
        return investigado;
    }

    public SimpleStringProperty getSubstancia() {
        return substancia;
    }

    public SimpleStringProperty getUnidade() {
        return unidade;
    }

    public SimpleStringProperty getLaudo() {
        return laudo;
    }

    public SimpleStringProperty getVara() {
        return vara;
    }

    public SimpleStringProperty getNumero_processo() {
        return numero_processo;
    }

    public SimpleStringProperty getLacre() {
        return lacre;
    }

    public void setIp(SimpleStringProperty ip) {
        this.ip = ip;
    }

    public void setTCO(SimpleStringProperty TCO) {
        this.TCO = TCO;
    }

    public void setData_entrada(SimpleStringProperty data_entrada) {
        this.data_entrada = data_entrada;
    }

    public void setInvestigado(SimpleStringProperty investigado) {
        this.investigado = investigado;
    }

    public void setSubstancia(SimpleStringProperty substancia) {
        this.substancia = substancia;
    }

    public void setUnidade(SimpleStringProperty unidade) {
        this.unidade = unidade;
    }

    public void setLaudo(SimpleStringProperty laudo) {
        this.laudo = laudo;
    }

    public void setVara(SimpleStringProperty vara) {
        this.vara = vara;
    }

    public void setNumero_processo(SimpleStringProperty numero_processo) {
        this.numero_processo = numero_processo;
    }

    public void setLacre(SimpleStringProperty lacre) {
        this.lacre = lacre;
    }
    
     @Override
    public String toString() {
        return "Entorpecente{" + "ip=" + ip + ", TCO=" + TCO + ", data_entrada=" + data_entrada + ", investigado=" + investigado + ", substancia=" + substancia + ", unidade=" + unidade + ", laudo=" + laudo + ", vara=" + vara + ", numero_processo=" + numero_processo + ", lacre=" + lacre + '}';
    }
    
}
