/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package narcoticsburning;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author icaro
 */
public class ConnectDatabase {
    
    static String driverHSQLDB = "org.hsqldb.jdbcDriver";
    static String user = "SA";
    static String password = "";
    
    public static Connection getConexao() throws SQLException{
        
        System.out.println("Conectando ao banco!");
        
        
        //System.getProperty("file.separator") retorna a forma como o sistema acessa a pasta
        // retorna LOCAL_do_USUARIO/bd/cadastro
        String path = System.getProperty("user.dir") + 
                System.getProperty("file.separator") +
                "bd"+
                System.getProperty("file.separator")+
                "cadastro";
        
        try{
            
            Class.forName(driverHSQLDB);
            return DriverManager.getConnection("jdbc:hsqldb:file:"+path, user, password);
            
        } catch(ClassNotFoundException ex){
            ex.printStackTrace();
        } catch(SQLException ex){
            throw new RuntimeException(ex);
        }
        
        return null;
    }
    
    public static void close(Connection conn, Statement pstm, ResultSet rs){
    
        System.out.println("Desconectando ao Banco!");
        
        
        try{
            
            if(conn != null){
                conn.close();
            }
            
            if(pstm != null){
                pstm.close();
            }
            
            if(rs != null){
                rs.close();
            }
        } catch(SQLException ex){
            ex.printStackTrace();
        }
    }
    
    
}
