package narcoticsburning;

import java.net.URL;
import java.sql.SQLException;
import java.util.ResourceBundle;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;


/**
 * @authors 
 * Ícaro Forte
 * Dayana Souza
 */
public class FXMLDocumentController implements Initializable {
    
    @FXML
    private Label label;
    
    @FXML
    private TableView tableDrugs;
    
    @FXML
    private TableColumn tableDrugsProcedimento;
    
    @FXML
    private TableColumn tableDrugsNum;
    
    @FXML
    private TableColumn tableDrugsDataEntrada;
    
    @FXML
    private TableColumn tableDrugsInvestigado;
    
    @FXML
    private TableColumn tableDrugsSubstancia;
    
    @FXML
    private TableColumn tableDrugsQuantidade;
    
    @FXML
    private TableColumn tableDrugsUnidade;
    
    @FXML
    private TableColumn tableDrugsLaudo;
    
    @FXML
    private TableColumn tableDrugsVara;
    
    @FXML
    private TableColumn tableDrugsNumeroProcesso;
    
    @FXML
    private TableColumn tableDrugsLacre;
    
    @FXML
    private TableColumn tableDrugsDataAutorizacao;
    
    @FXML
    private TableColumn tableDrugsOficio;
    
    @FXML
    private TableColumn tableDrugsDelegacias;
    
    @FXML
    private TableColumn tableDrugsCaixa;
        
        
    
    @FXML
    private void handleButtonAction(ActionEvent event) {
        System.out.println("You clicked me!");
        label.setText("Hello World!");
    }
    
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        
        //Conectando ao banco de dados
        try {
            ConnectDatabase.getConexao();
        } catch (SQLException ex) {
            Logger.getLogger(FXMLDocumentController.class.getName()).log(Level.SEVERE, null, ex);
        }//banco de dados
        
       
        
        
    }    
    
}
